import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import SignUpCustomer from "./components/SignUpCustomer.jsx";
import SignUp from './components/SignUp.jsx'
import SignIn from './components/SignIn.jsx'
import SignUpAdmin from './components/SignUpAdmin.jsx'
// import CustomerUI from './components/CustomerUI.jsx'
// import AdminUI from './components/AdminUI.jsx'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<App />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signupcustomer" element={<SignUpCustomer />} />
        <Route path="/signupadmin" element={<SignUpAdmin />} />
        {/* <Route path="/customerUI" element={<CustomerUI />} />
        <Route path="/AdminUI" element={<AdminUI />} /> */}
      </Routes>
    </Router>
  </React.StrictMode>
);
