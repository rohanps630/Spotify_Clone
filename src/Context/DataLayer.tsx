import React, { createContext, useContext, useReducer, ReactNode } from "react";
import { Action, State } from "../Types";

interface DataLayerProps {
  initialState: State;
  reducer: (state: State, action: Action) => State;
  children: ReactNode;
}

const DataLayerContext = createContext<[State, React.Dispatch<Action>]>([
  {} as State,
  () => {},
]);

export const DataLayer = ({ reducer, children, initialState }: DataLayerProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <DataLayerContext.Provider value={[state, dispatch]}>
      {children}
    </DataLayerContext.Provider>
  );
};

export const useDataLayerValue = (): [State, React.Dispatch<Action>] => useContext(DataLayerContext);
