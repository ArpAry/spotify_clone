import { Children, createContext ,useContext,useReducer } from "react";

export const StateContext=createContext();

export  const  StateProvider=({children,initialState,reducer})=>(
<StateContext.Provider value={useReducer(reducer,initialState)}>
{children}
</StateContext.Provider>
)

// StateProvider will return the vaLUE  the use context value of state context  //
export const useStateProvider=()=> useContext(StateContext);