import React from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Deposit from "./components/User/Deposit";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MyProfile from "./components/User/MyProfile";
import NotASubscriber from "./components/NotASubscriber";
import Lobby from "./container/Casino/Lobby";
import Transaction from "./components/User/Transaction";
import ResetPassword from "./components/User/ResetPassword";
import Withdraw from "./components/User/Withdraw";
import BetHistory from "./components/User/BetHistory";
import ForgotPassword from "./components/ForgotPassword";
import VerifyEmail from "./components/VerifyEmail";
import Bonus from "./components/User/Bonus";
import Referral from "./components/User/Referral";
import Promotions from "./components/Promotions";
import Livecasino from "./components/Livecasino";
import SportsBet from "./components/SportsBet";
import Toast from "./container/Toast";
import ViewAll from "./container/Casino/ViewAll";
import IframeGame from "./container/Casino/IframeGame";
import PageLayout from "./components/PageLayout";
import PrivateRoute from "./PrivateRoute";
import About from "./components/About";
import Cms from "./components/Cms";
import ChatBox from "./components/ChatBox";
import GameList from "./components/GameList";
import ReferFriend from "./components/ReferFriend";
import Favorites from "./container/Casino/Favorites";
import Recents from "./container/Casino/Recents";

const appRoutes = [
  { path: "/", element: <Lobby /> },
  { path: "/:referralCode", element: <Lobby /> },
  {
    path: "/view-all/:provider/:category/:name",
    element: <ViewAll />,
  },
  { path: "/all-games", element: <ViewAll /> },
  { path: "/promotions", element: <Promotions /> },
  { path: "/sport-bet", element: <SportsBet /> },
  { path: "/liveCasino", element: <Livecasino /> },
  { path: "/about", element: <About /> },
  { path: "/gamelist", element: <GameList /> },
  { path: "/refer-friend", element: <ReferFriend /> },
];
const isUserAuthenticate = false;

export const createRoute = (path, component, privateRoute, props) => {
  if (privateRoute) {
    if (!isUserAuthenticate) {
      return (
        <Route path={path} key={path} element={<Navigate replace to="/" />} />
      );
    }
    return (
      <Route exact path={path} key={path} element={component} {...props} />
    );
  }
  return <Route exact path={path} key={path} element={component} {...props} />;
};

export const getApplicationRoutes = (routes) => {
  return routes.map((route) =>
    createRoute(route.path, route.element, route.private, route.props)
  );
};

const styleTopDiv = {
  width: "calc(100% - 720px)",
  margin: "0 auto",
  maxWidth: "1196px",
};

export const buildRouter = (
  routesConfig,
  sidebarOpen,
  isChatBoxOpen,
  isLoggedIn,
  mapRoutes = getApplicationRoutes
) => {
  const applicationRoutes = mapRoutes(routesConfig);
  return (
    <Router>
      <Header />
      <Toast />
      <div style={{ display: "flex" }}>
        <div
          className="leftPannel"
          style={{
            width: "240px",
          }}
        >
          <PageLayout />
        </div>

        <div style={styleTopDiv} className="middle-section">
          <Routes>
            <Route path={"/"}>
              {applicationRoutes}
              <Route
                key={"Favorites"}
                path={"favorites"}
                element={
                  <PrivateRoute>
                    <Favorites />
                  </PrivateRoute>
                }
              />
              <Route
                key={"recents"}
                path={"recents"}
                element={
                  <PrivateRoute>
                    <Recents />
                  </PrivateRoute>
                }
              />
              <Route path="/user" key={"user"}>
                <Route
                  key={"MyProfile"}
                  path={"myProfile"}
                  element={
                    <PrivateRoute>
                      <MyProfile />
                    </PrivateRoute>
                  }
                />
                <Route
                  key={"Deposit"}
                  path={"deposit"}
                  element={
                    <PrivateRoute>
                      <Deposit />
                    </PrivateRoute>
                  }
                />
                <Route
                  key={"Transaction"}
                  path={"transaction"}
                  element={
                    <PrivateRoute>
                      <Transaction />
                    </PrivateRoute>
                  }
                />
                <Route
                  key={"ResetPassword"}
                  path={"resetPassword"}
                  element={
                    <PrivateRoute>
                      <ResetPassword />
                    </PrivateRoute>
                  }
                />
                <Route
                  key={"BetHistory"}
                  path={"betHistory"}
                  element={
                    <PrivateRoute>
                      <BetHistory />
                    </PrivateRoute>
                  }
                />
                <Route
                  key={"referral"}
                  path={"referral"}
                  element={
                    <PrivateRoute>
                      <Referral />
                    </PrivateRoute>
                  }
                />
                <Route
                  key={"Withdraw"}
                  path={"withdraw"}
                  element={
                    <PrivateRoute>
                      <Withdraw />
                    </PrivateRoute>
                  }
                />
                <Route
                  key={"Bonus"}
                  path={"bonus"}
                  element={
                    <PrivateRoute>
                      <Bonus />
                    </PrivateRoute>
                  }
                />
                <Route
                  key={"Referral"}
                  path={"referral"}
                  element={
                    <PrivateRoute>
                      <Referral />
                    </PrivateRoute>
                  }
                />
              </Route>
              <Route path="/game" key={"game"}>
                <Route
                  key={"gameId"}
                  path={":gameId"}
                  element={
                    <PrivateRoute>
                      <IframeGame />
                    </PrivateRoute>
                  }
                />
              </Route>
            </Route>
            <Route
              key={"ForgotPassword"}
              path={"/user/forgotPassword"}
              element={<ForgotPassword />}
            />
            <Route
              key={"VerifyEmail"}
              path={"/user/verifyEmail"}
              element={<VerifyEmail />}
            />
            <Route path={"/cms/:slug"} element={<Cms />} />
            <Route key={"notSub"} path={"*"} element={<NotASubscriber />} />
          </Routes>

          <Footer />
        </div>

        <div className="rightPannel">
          <ChatBox isChatBoxOpen={isChatBoxOpen} isLoggedIn={isLoggedIn} />
        </div>
      </div>
    </Router>
  );
};

const appRouter = ({ sidebarOpen, isChatBoxOpen, isLoggedIn }) =>
  buildRouter(appRoutes, sidebarOpen, isChatBoxOpen, isLoggedIn);

export default appRouter;
