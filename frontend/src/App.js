import React , {useState} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Footer, Login, Add, Logout,Dashboard } from "./components";
function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact component={() => <Login />} />
          <Route path="/dashboard" exact component={() => <Dashboard />} />
          <Route path="/add" exact component={() => <Add />} />
          <Route path="/logout" exact component={() => <Logout />} />

        </Switch>
        <Footer />
      </Router>
    </div> 
  );
}

export default App;