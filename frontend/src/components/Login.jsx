import React from "react";
import './Login.css'
import axios from "axios"


class Login extends React.Component{

  constructor(props) {
    super(props);

    this.state = {
      Username: '',
      Password: '',

    };

  }

  componentDidMount(){
    localStorage.setItem('token','')
    // console.log('reseted', localStorage.getItem('token'))
  }

  SendLogin = () => {
    var data = new FormData()

    data.append("Username",this.state.Username)
    data.append("Password",this.state.Password)
    // console.log(this.state.Username,this.state.Password)
    axios.post("http://localhost:8000/backend/login",
      data,{headers: {'Content-Type': 'multipart/form-data'}}
      ).then((response) => {

        const token = response.data.data.id
        console.log("SUCCESS",response,token);
        localStorage.setItem('token',token)
        window.location.replace("http://localhost:3000/dashboard")

      }, (error) => {
        console.log(error);
      })
  }

  render() {

    return (
      <form className = "LoginForm">
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