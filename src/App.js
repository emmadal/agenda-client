import React from "react";
import "./App.css";
import { BrowserRouter,Switch, Route  } from "react-router-dom";
import Login from "./components/Login";

function App() {
  return (
    <BrowserRouter >
      <Switch>
        <Route path="/" component={Login} exact/>
        {/* <div className="App-header">
          <Route path="/event" component={HomeEvent} exact/>
        </div> */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
