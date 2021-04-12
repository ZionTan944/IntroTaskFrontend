import React, { Component} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Footer, Login, Add, Dashboard } from "./components";



class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      userid: ''
    }
  }


  render() {
    const token = localStorage.getItem('token')
    // console.log('t',token)
    if (!token) {
      return <Login/>
    }
    else {
      return (
        <div className="App">
          <Router>
            <Navigation />
            <Switch>
              <Route path="/" exact component={() => <Login/>} />
              <Route path="/dashboard" exact component={() => <Dashboard />} />
              <Route path="/add" exact component={() => <Add />} />

            </Switch>
            <Footer />
          </Router>
        </div>
      );
    }
  }
}

export default App;