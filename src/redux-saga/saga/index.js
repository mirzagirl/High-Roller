import { all } from "redux-saga/effects";

import authenticationWatcher from "./auth/authentication";
import userProfileWatcher from "./profile/myProfile";
import transactionsWatcher from "./transaction";
import resetPasswordWatcher from "./auth/resetPassword";
import casinoLobbyWatcher from "./casino/lobby";
import currencyWatcher from "./currencies";
import cmsWatcher from "./cms";
import walletWatcher from "./profile/wallet";
import kycVerificationWatcher from "./kycVerification";
import promotionsWatcher from "./promotions";
import multipleWalletWatcher from "./wallet";
import chatBox from "./chatbox";
import favoritesWatcher from "./casino/lobby/games";
import paymentWatcher from "./payment";
import LiveTableWatcher from "./LiveTable";
import RecentBetWatcher from "./LiveTable/betsSocket";

export default function* rootSaga() {
  yield all([
    authenticationWatcher(),
    kycVerificationWatcher(),
    userProfileWatcher(),
    transactionsWatcher(),
    resetPasswordWatcher(),
    casinoLobbyWatcher(),
    currencyWatcher(),
    cmsWatcher(),
    chatBox(),
    walletWatcher(),
    promotionsWatcher(),
    multipleWalletWatcher(),
    favoritesWatcher(),
    paymentWatcher(),
    LiveTableWatcher(),
    RecentBetWatcher(),
  ]);
}
