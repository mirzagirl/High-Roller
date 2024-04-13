import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { io } from "socket.io-client";

import {
  setNewMessageByWS,
  setPlayerUnseenMessage,
  setSocketInstance,
  setActivePlayers,
} from "../../redux-saga/redux/chatbox";
import session from "../../utils/session";

const SOCKET_NAMESPACES = {
  CHAT: "/chat",
};

export const SOCKET_LISTENERS = {
  CHAT_NEW_MESSAGE: SOCKET_NAMESPACES.CHAT + "/newMessage",
  CHAT_PLAYER_UNSEEN_MENTION_COUNT:
    SOCKET_NAMESPACES.CHAT + "/playerUnSeenMentionCount",
  CHAT_PLAYER_ACTIVE_USER_COUNT: SOCKET_NAMESPACES.CHAT + "/activeUsers",
};

export const SOCKET_EMITTERS = {
  CHAT_SEND_NEW_MESSAGE: SOCKET_NAMESPACES.CHAT + "/sendNewMessage",
};

const WS_URL = process.env.REACT_APP_REST_WS_URL;

const WebSocketConnectionProvider = ({ children }) => {
  const user = session.getSessionCred;
  const token = user?.token;
  const accessToken = token;
  const { isLoggedIn } = useSelector((state) => state.authentication);
  const { socketInstance } = useSelector((state) => state.chatbox);
  const dispatch = useDispatch();
  useEffect(() => {
    if (accessToken && isLoggedIn && !socketInstance?.connected) {
      const newMessageIO = io(`${WS_URL}${SOCKET_NAMESPACES.CHAT}`, {
        transports: ["websocket"],
        auth: {
          authorization: `Bearer ${accessToken}`,
        },
      });
      dispatch(setSocketInstance(newMessageIO));

      newMessageIO.on(SOCKET_LISTENERS.CHAT_NEW_MESSAGE, (data) => {
        dispatch(setNewMessageByWS(data?.data));
      });

      newMessageIO.on(
        SOCKET_LISTENERS.CHAT_PLAYER_UNSEEN_MENTION_COUNT,
        (data) => {
          dispatch(
            setPlayerUnseenMessage(data?.data?.PlayerUnSeenMentionCount)
          );
        }
      );
      newMessageIO.on(
        SOCKET_LISTENERS.CHAT_PLAYER_ACTIVE_USER_COUNT,
        (data) => {
          dispatch(setActivePlayers(data?.data?.activeUserCount));
        }
      );
    }
  }, [accessToken, isLoggedIn]);

  return children;
};

export default WebSocketConnectionProvider;
