import { combineReducers } from "@reduxjs/toolkit";

import authentication from "./auth/authentication";
import resetPassword from "./auth/resetPassword";
import kycVerification from "./kycVerification";
import myProfile from "./profile/myProfile";
import transactions from "./transaction";
import toast from "./toast";
import casinoLobby from "./casino/lobby";
import themeSettings from "./settings/themeSettings";
import currencies from "./currencies/currencies";
import cms from "./cms";
import promotions from "./promotions";
import wallet from "./wallet";
import chatbox from "./chatbox";
import favorites from "./casino/lobby/games";
import payment from "./payment";
import liveTable from "./LiveTable";

const rootReducer = combineReducers({
  authentication,
  kycVerification,
  myProfile,
  transactions,
  toast,
  resetPassword,
  casinoLobby,
  themeSettings,
  currencies,
  cms,
  promotions,
  wallet,
  chatbox,
  favorites,
  payment,
  liveTable,
});

export default rootReducer;
