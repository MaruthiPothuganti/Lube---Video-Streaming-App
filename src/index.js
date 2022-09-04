import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./App/store";

// Call make Server
makeServer();

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <Router>
      <App tab="home" />
    </Router>
  </Provider>
);
