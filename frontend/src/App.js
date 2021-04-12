import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Footer, Login, Add, Dashboard } from "./components";

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact component={() => <Login />} />
          <Route path="/dashboard" exact component={() => <Dashboard />} />
          <Route path="/add" exact component={() => <Add />} />

        </Switch>
        <Footer />
      </Router>
    </div>)

}

export default App;