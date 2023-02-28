import React, { useContext, useReducer } from "react";
import { initialState, reducer } from "./reducer";

const userStateContext = React.createContext();
const userDispatcherContext = React.createContext();

export function useUserContext() {
  const context = useContext(userStateContext);
  if (!context) {
    throw new Error('UserContext must be used with a UserProvider"');
  }
  return context;
}

export function useUserDispatch() {
  const context = useContext(userDispatcherContext);
  if (!context) {
    throw new Error('useUserDispatch must be used with a UserProvider"');
  }
  return context;
}

export function UserProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <userStateContext.Provider value={state}>
      <userDispatcherContext.Provider value={dispatch}>
        {children}
      </userDispatcherContext.Provider>
    </userStateContext.Provider>
  );
}
