import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AddDeveloper from "./components/add-developer.component";
import Developer from "./components/developer.component";
import DevelopersList from "./components/developers-list.component";

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <a href="/developers" className="navbar-brand">
            Projeto Gazin
          </a>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/developers"} className="nav-link">
                Desenvolvedores
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/add"} className="nav-link">
                Adicionar
              </Link>
            </li>
          </div>
        </nav>

        <div className="container mt-3">
          <Switch>
            <Route exact path={["/", "/developers"]} component={DevelopersList} />
            <Route exact path="/add" component={AddDeveloper} />
            <Route path="/developers/:_id" component={Developer} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;