import { useState } from "react";
import "./App.css";
import { Header } from "./components/Header/Header";
import { Sidebar } from "./components/sidebar/Sidebar";

import { Feed } from "./components/Feed/Feed";
import { Widgets } from "./components/Widgets/Widgets";
import { Login } from "./components/Login/Login";
import useStateValue from "./context/useStateValue";

function App() {
  const { state, dispatch } = useStateValue();
  const { user } = state;

  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <>
          <Header />

          <div className="body__app">
            <Sidebar />
            <Feed />
            <Widgets />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
