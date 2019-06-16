import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Dashboard from "./components/dashboard/Dashboard";
import Store from "./store/store";
import Login from "./components/authentication/Login";

const App: React.FC = () => {
  return (
    <Store>
      <Router>
        <Route exact path="/login" component={Login} />
        <Route path="/" component={Dashboard} />
      </Router>
    </Store>
  );
};

export default App;
