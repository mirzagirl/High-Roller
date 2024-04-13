import { useState } from "react";

import { toast } from "react-hot-toast";
import { useSelector } from "react-redux";

import { SOCKET_EMITTERS } from "./ws";

export const useSendMessage = () => {
  const [loading, setLoading] = useState(false);
  const { socketInstance } = useSelector((state) => state.chatbox);
  const { userDetails } = useSelector((state) => state.myProfile);
  const userName = userDetails?.user?.user_name;
  const profileImage = userDetails?.user?.profile_image;

  const sendMessage = ({ message, language, messageType, userId }) => {
    if (!socketInstance.connected) {
      toast.error("Error connecting with chats");
      return;
    }
    setLoading(true);
    const data = { message, messageType };
    socketInstance.timeout(7000).emit(
      SOCKET_EMITTERS.CHAT_SEND_NEW_MESSAGE,
      {
        userId,
        data,
        userName,
        language,
        profileImage,
      },
      function (err, response) {
        if (err) {
          toast.error("Error sending message");
        }
        setLoading(false);
      }
    );
  };
  return [sendMessage, loading];
};
