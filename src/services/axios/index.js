import axios from "axios";
import toast from "react-hot-toast";

import config from "../../config";
import session from "../../utils/session";
import { store } from "../../../src/redux-saga/store";
import { navigateTarget } from "../../redux-saga/redux/toast/index";
import { resetAuthenticationState } from "../../redux-saga/redux/auth/authentication";
import { resetMyProfileState } from "../../redux-saga/redux/profile/myProfile";
import {
  resetBets,
  resetTransaction,
} from "../../redux-saga/redux/transaction";

const axiosClient = axios.create({
  baseURL: config.baseUrl,
  headers: {
    "Content-Type": "application/json",
    "domain-key": "http://example.com",
  },
});

const UNAUTHORIZED = 401;
let isRefreshing = false;
let failedRequests = [];

axiosClient.interceptors.response.use(
  (res) => {
    return res;
  },
  async (err) => {
    const originalRequest = err.config;
    if (err?.response) {
      if (
        err.response?.status === UNAUTHORIZED &&
        err.response?.data?.message === "Unauthorized Token"
      ) {
        isRefreshing = false;
        session.clearSessionCred();
        store.dispatch(navigateTarget("/"));
        store.dispatch(resetMyProfileState());
        store.dispatch(resetAuthenticationState());
        store.dispatch(resetTransaction());
        store.dispatch(resetBets());
        window.location.reload();
        toast.error("Another Session Logined already", {
          id: "session_Timeout",
        });
        return Promise.reject(err);
      }
      if (
        err.response?.status === UNAUTHORIZED &&
        err.response?.data?.message === "jwt expired"
      ) {
        const tokens = session?.getSessionCred;
        if (!isRefreshing && tokens) {
          isRefreshing = true;
          return axiosClient
            .get("/user/refreshToken")
            .then((response) => {
              const { token, resToken } = response.data;
              session.saveSessionCred({
                token,
                resToken,
              });
              axiosClient.defaults.headers["access-token"] = token;
              axiosClient.defaults.headers["refresh-token"] = resToken;
              originalRequest.headers["access-token"] = token;
              originalRequest.headers["refresh-token"] = resToken;
              failedRequests.forEach((request) => request());
              failedRequests = [];
              isRefreshing = false;
              return axiosClient(originalRequest);
            })
            .catch((error) => {
              isRefreshing = false;
              session.clearSessionCred();
              store.dispatch(navigateTarget("/"));
              store.dispatch(resetMyProfileState());
              store.dispatch(resetAuthenticationState());
              store.dispatch(resetTransaction());
              store.dispatch(resetBets());
              toast.error("SESSION TIMEOUT", { id: "session_Timeout" });
              window.location.reload();
              return Promise.reject(error);
            });
        } else {
          return new Promise((resolve, reject) => {
            failedRequests.push(() => {
              originalRequest.headers["access-token"] = tokens.token;
              originalRequest.headers["refresh-token"] = tokens.resToken;
              resolve(axiosClient(originalRequest));
            });
          });
        }
      }
      // else isRefreshing(err.response?.data?.message === "jwt expired"&&err.response?.status === 403 )
      return Promise.reject(err.response);
    }
    return Promise.reject(err);
  }
);

axiosClient.interceptors.request.use((req) => {
  if (!navigator.onLine) {
    throw new axios.Cancel("Please connect to the internet");
  }

  // Check if the "with-token" header is not explicitly set to false
  const withToken = req.headers["with-token"];
  if (withToken !== false) {
    const tokens = session.getSessionCred;
    if (tokens) {
      req.headers["access-token"] = tokens.token;
      req.headers["refresh-token"] = tokens.resToken;
    }
  }

  return req;
});

export default axiosClient;
