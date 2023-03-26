import React from "react";
import * as ReactDOMClient from 'react-dom/client';
import "./index.css";
import { DataLayer } from "./Context/DataLayer";
import App from "./App";
import reducer, { initialState } from "./reducer";

const container = document.getElementById('root')!;

// Create a root.
const Root = ReactDOMClient.createRoot(container);

Root.render(
  <DataLayer initialState={initialState} reducer={reducer}>
    <App />
  </DataLayer>
);
