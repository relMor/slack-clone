import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";

import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Chat from "./components/Chat/Chat";
import Login from "./components/Login/Login";
import { useStateValue } from "./logic/StateProvider";
import { actionTypes } from "./logic/reducer";
import { auth } from "./firebase";
import Welcome from "./components/Welcome/Welcome";

function App() {
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: actionTypes.SET_USER,
          user: authUser,
        });
      } else {
        dispatch({
          type: actionTypes.SET_USER,
          user: null
        });
      }
    });

    return () => {
      //perfom cleanup
      unsubscribe();
    };
  }, []);

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
                <Welcome />
              </Route>
            </Switch>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
