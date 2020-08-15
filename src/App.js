import React from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";

import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Chat from './components/Chat/Chat'

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app__body">
        <Sidebar />
        {/* router --> chat screen */}
        <Switch>
          <Route path="/room/:roomId" component={Chat} />
          <Route path="/">
            <h1>Welcome</h1>
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
