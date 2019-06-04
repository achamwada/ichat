import React from "react";
import "./App.css";
import Dashboard from "./components/dashboard/Dashboard";
import Store, { ContextStore } from "./store/store";

const App: React.FC = () => {
  return (
    <Store>
      <ContextStore.Consumer>{context => <Dashboard />}</ContextStore.Consumer>
    </Store>
  );
};

export default App;
