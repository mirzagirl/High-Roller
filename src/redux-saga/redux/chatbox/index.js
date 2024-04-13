import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  error: null,
  userList: [],
  chatList: [],
  unseenMsg: 0,
  socketInstance: null,
  newMessageByWS: {},
  activeUsersCount: 0,
};

const chatboxSlice = createSlice({
  name: "chatbox",
  initialState,
  reducers: {
    getUserListStart: (state, action) => {
      state.loading = true;
    },
    getUserListSuccess: (state, action) => {
      state.loading = true;
      state.userList = action.payload;
    },
    getUserListFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    getPreviousChatsStart: (state, action) => {
      state.loading = true;
    },
    getPreviousChatsSuccess: (state, action) => {
      state.loading = false;
      state.chatList = action.payload.messages;
      state.unseenMsg = action.payload.unSeenMentionedCount;
    },
    getPreviousChatsFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    setSocketInstance: (state, action) => {
      return {
        ...state,
        socketInstance: action.payload,
      };
    },
    setNewMessageByWS: (state, action) => {
      return {
        ...state,
        newMessageByWS: action.payload,
      };
    },
    setPlayerUnseenMessage: (state, action) => {
      return {
        ...state,
        unseenMsg: action.payload,
      };
    },
    updateUnseenCountStart: (state, action) => {
      return {
        ...state,
      };
    },
    updateUnseenCountFailure: (state, action) => {
      return {
        ...state,
      };
    },
    updateUnseenCountSuccess: (state, action) => {
      return {
        ...state,
        unseenMsg: 0,
      };
    },
    setActivePlayers: (state, action) => {
      return {
        ...state,
        activeUsersCount: action.payload,
      };
    },
  },
});

export const {
  getUserListStart,
  getUserListSuccess,
  getUserListFailure,
  getPreviousChatsStart,
  getPreviousChatsSuccess,
  getPreviousChatsFailure,
  setSocketInstance,
  setNewMessageByWS,
  setPlayerUnseenMessage,
  updateUnseenCountStart,
  updateUnseenCountFailure,
  updateUnseenCountSuccess,
  setActivePlayers,
} = chatboxSlice.actions;

export default chatboxSlice.reducer;
