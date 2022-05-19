import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import GlobalContextProvider from './GlobalContext/GlobalContextProvider';
import { ThemeProvider } from 'styled-components';
// import { createRoot } from 'react-dom/client';
// const container = document.getElementById('root');
// const root = createRoot(container!); // createRoot(container!) if you use TypeScript

// root.render(<React.StrictMode>
//   <GlobalContextProvider>
//     <App />
//   </GlobalContextProvider>
// </React.StrictMode>);

const theme = {
  pellete:{
    primary:"rgb(253,254,254)",
    secondary:"",
    
  } 
 };


ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <GlobalContextProvider>
      <App />
    </GlobalContextProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
