import React, { useReducer } from "react";
import { StateContext } from "./stateContext";
import reducer, { initialState } from "./AppReducer";

export const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StateContext.Provider value={{ state, dispatch }}>
      {children}
    </StateContext.Provider>
  );
};
