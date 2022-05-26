import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import GlobalContextProvider from "./GlobalContext/GlobalContextProvider";
import { DefaultTheme, ThemeProvider } from "styled-components";

const theme: DefaultTheme = {
  pellete: {
    primary: "rgb(253,254,254)",
    secondary: "rgba(58, 53, 65, 0.87)",
    main: "linear-gradient(98deg, rgb(198, 167, 254), rgb(145, 85, 253) 94%)",
    success: "rgb(20, 230, 83)",
    background: "rgb(244,245,250)",
    purple: "rgb(145, 85, 253)",
  },
  boxShadow: {
    card: "rgb(58 53 65 / 10%) 0px 2px 10px 0px",
    header:"rgb(58 53 65 / 42%) 0px 4px 8px -4px"
  },
};

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalContextProvider>
        <App />
      </GlobalContextProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
