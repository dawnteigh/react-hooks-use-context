import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./index.css";
import { UserProvider } from './context/User'

ReactDOM.render(
<UserProvider>
<App />
</UserProvider>,
document.getElementById("root"));
