import React, { useState } from "react";
import './Login.css'
import axios from "axios"

class Login extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      Username: '',
      Password: '',
      Redirect:false
    };
    // this.handleChangeUsername = this.handleChangeUsername.bind(this)
    // this.handleChangePassword = this.handleChangePassword.bind(this)

  }

  // handleChangeUsername(event) {
  //   this.setState({ Username: event.target.value })
  // }
  // handleChangePassword(event) {
  //   this.setState({ Password: event.target.value })
  // }

  SendLogin = () => {

    // console.log(this.state.Username,this.state.Password)
    axios.post("http://localhost:8000/backend/loginAPI/",
      {
        Username: this.state.Username,
        Password: this.state.Password
      }).then((response) => {
        console.log("SUCCESS",response);
        window.location.replace("http://localhost:3000/dashboard")
        this.setState({redirect:true})

      }, (error) => {
        console.log(error);
      })
  }

  render() {
    const {redirect} = this.state
    if (redirect){
      
    }
    return (
      <form>
        <label>
          <p>Username</p>
          <input type="text" onChange={(event) => this.setState({Username:event.target.value})} />
        </label>
        <label>
          <p>Password</p>
          <input type="password" onChange={(event) => this.setState({Password:event.target.value})} />
        </label>
        <div class='submitButton'>
          <button onClick={this.SendLogin} type="button">Submit</button>
        </div>
      </form>
    )
  }
}

export default Login;