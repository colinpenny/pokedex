//React allows use of react library
//ReactDOM allows utilzation of React
//App is the content that is passed to the root element
//./index.css stores styling for the page
import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/App.js";
import "./index.css"

ReactDOM.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>,
  document.getElementById('root')
);

