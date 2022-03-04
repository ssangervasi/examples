import * as React from "react";
import * as ReactDOM from "react-dom";

import { Circles } from "./circles";

const App: React.FC = () => {
  return (
    <div>
      <h1>Circles:</h1>
      <Circles />
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
