import React from "react";

import { useSelector } from "react-redux";
import {
  createTheme,
  StyledEngineProvider,
  ThemeProvider,
} from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { I18nextProvider } from "react-i18next";
import { Toaster } from "react-hot-toast";

import WebSocketConnectionProvider from "../src/services/webSocket/ws";
import WebSocketBalanceConnectionProvider from "../src/services/wallet/wallet";
import AppRoutes from "./App.routes";
import getDarkTheme from "./theme/dark";
import getLightTheme from "./theme/light";
import i18n from "./i18n";

import "./App.css";

function App() {
  if (!localStorage.theme) localStorage.setItem("theme", "dark");

  const { darkMode, sidebarOpen, isChatBoxOpen } = useSelector(
    (state) => state.themeSettings
  );
  const { isLoggedIn } = useSelector((state) => state.authentication);
  let selectTheme = !darkMode ? getLightTheme() : getDarkTheme();
  const theme = createTheme(selectTheme);
  return (
    <>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <WebSocketBalanceConnectionProvider>
            <WebSocketConnectionProvider>
              <I18nextProvider i18n={i18n}>
                <CssBaseline />
                <AppRoutes
                  sidebarOpen={sidebarOpen}
                  isChatBoxOpen={isChatBoxOpen}
                  isLoggedIn={isLoggedIn}
                />
                <Toaster
                  position="top-center"
                  toastOptions={{
                    success: {
                      style: {
                        background: darkMode ? "#24242B" : "#F3F1EA",
                        color: darkMode ? "#ffffff" : "#202228",
                      },
                    },
                    error: {
                      style: {
                        background: darkMode ? "#24242B" : "#F3F1EA",
                        color: darkMode ? "#ffffff" : "#202228",
                      },
                    },
                  }}
                />
              </I18nextProvider>
            </WebSocketConnectionProvider>
          </WebSocketBalanceConnectionProvider>
        </ThemeProvider>
      </StyledEngineProvider>
    </>
  );
}

export default App;
