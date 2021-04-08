import React ,{ useState } from "react";
import './Login.css'
import axios from "axios"
import {useHistory} from 'react-router-dom'

class Login extends React.Component{


  SendLogin(){
  //   axios.post("http://localhost:8000/backend/loginAPI/",
  //   {Username: 'Adam',
  //   Password: 'AdamAdam'}).then((response) => {
  //     console.log(response);
  //   }, (error) => {
  //     console.log(error);
  // })
  console.log('hi')
}

  render(){
    return(
      <form>
      <label>
        <p>Username</p>
        <input type="text" />
      </label>
      <label>
        <p>Password</p>
        <input type="password" />
      </label>
      <div class = 'submitButton'>
        <button onClick={this.SendLogin} type="button">Submit</button>
      </div>
    </form> 
    )
  }
}
export default Login;