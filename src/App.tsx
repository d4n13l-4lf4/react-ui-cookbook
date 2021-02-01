import React from 'react';
import './App.css';
import {Link, Switch, Route} from "react-router-dom";
import {routes} from "./route/routes";

function App() {
  return (
    <div>
      <ul>
          {
              routes
                  .filter(r => !r.disabled)
                  .map((r) => (
                      <li>
                          <Link to={r.path}>{r.title}</Link>
                      </li>
                  ))
          }
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
