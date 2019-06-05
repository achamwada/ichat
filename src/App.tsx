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
        <Route exact path="/" component={Login} />
        <Route path="/chat" component={Dashboard} />
      </Router>
    </Store>
  );
};

export default App;
