import { useEffect } from "react";

import { io } from "socket.io-client";
import { useSelector, useDispatch } from "react-redux";

import session from "../../utils/session";
import {
  getUserProfileDetailsStart,
  setSocketBalanceInstance,
} from "../../redux-saga/redux/profile/myProfile";
import { updateBalanceStart } from "../../redux-saga/redux/wallet";

const SOCKET_NAMESPACES = {
  GETBALANCE: "/getBalance",
};

export const SOCKET_LISTENERS = {
  BALANCE: "/balance",
};

const WS_URL = process.env.REACT_APP_BALANCE_URL;

const WebSocketBalanceConnectionProvider = ({ children }) => {
  const user = session.getSessionCred;
  const token = user?.token;
  const accessToken = token;
  const { isLoggedIn } = useSelector((state) => state.authentication);
  const { socketInstance } = useSelector((state) => state.myProfile);
  const dispatch = useDispatch();
  useEffect(() => {
    if (accessToken && isLoggedIn && !socketInstance?.connected) {
      const newMessageIO = io(`${WS_URL}${SOCKET_NAMESPACES.GETBALANCE}`, {
        extraHeaders: {
          "access-token": `${accessToken}`,
        },
      });
      dispatch(setSocketBalanceInstance(newMessageIO));

      newMessageIO.on(SOCKET_LISTENERS.BALANCE, (data) => {
        dispatch(updateBalanceStart(data));
        dispatch(getUserProfileDetailsStart());
      });
    }
  }, [accessToken, isLoggedIn]);

  return children;
};

export default WebSocketBalanceConnectionProvider;
