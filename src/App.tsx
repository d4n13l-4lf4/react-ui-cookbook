import React from 'react';
import './App.css';
import {Link, Switch, Route} from "react-router-dom";
import {routes} from "./route/routes";

function App() {
  return (
    <div>
      <ul>
        <li>
            <Link to={"/chapter01"} >1. Grids Placing Components on the Page</Link>
        </li>
          <li>
              <Link to={"/chapter02"}>2. App Bars - The Top Level of Every Page</Link>
          </li>
          <li>
              <Link to={"/chapter03"}>3. Drawers</Link>
          </li>
          <li>
              <Link to={"/chapter04"}>4. Tabs - Grouping sections</Link>
          </li>
      </ul>
        <div>
            <Switch>
                {
                    routes
                        .filter((r) => !r.disabled)
                        .map((r, i) => <Route key={i} path={r.path} component={r.component} />)
                }
            </Switch>
        </div>
    </div>
  );
}

export default App;
