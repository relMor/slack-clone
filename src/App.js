import React from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";

import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Chat from "./components/Chat/Chat";
import Login from "./components/Login/Login";
import { useStateValue } from "./logic/StateProvider";

function App() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <>
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
        </>
      )}
    </div>
  );
}

export default App;
