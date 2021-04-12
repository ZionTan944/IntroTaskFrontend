import React, { useState } from "react";
import './Login.css'
import axios from "axios"
import { Redirect } from "react-router";


// class Login extends React.Component{

//   constructor(props) {
//     super(props);

//     this.state = {
//       Username: '',
//       Password: '',
//       Logged_in:false

//     };

//   }

//   componentDidMount(){
//     localStorage.setItem('token','')
//     console.log('reseted', localStorage.getItem('token'))
//   }

//   SendLogin = () => {
//     var data = new FormData()

//     data.append("Username",this.state.Username)
//     data.append("Password",this.state.Password)
//     // console.log(this.state.Username,this.state.Password)
//     axios.post("http://localhost:8000/backend/login",
//       data,{headers: {'Content-Type': 'multipart/form-data'},withCredentials:true}
//       ).then((response) => {

//         const token = response.data.data.id
//         console.log("SUCCESS",response,token);
//         // console.log(response.headers.get('set-cookie'))
//         localStorage.setItem('token',token)
//         this.setState({Logged_in:true})
//         // window.location.assign("http://localhost:3000/dashboard")


//       }, (error) => {
//         console.log(error);
//       })
//   }

//   render() {

//     if ( this.state.Logged_in === true){
//       return(
//         <Redirect to ={{pathname: "/dashboard"}}/>
//       )
//     }

//     return (
//       <form className = "LoginForm">
//         <label>
//           <p>Username</p>
//           <input type="text" onChange={(event) => this.setState({Username:event.target.value})} />
//         </label>
//         <label>
//           <p>Password</p>
//           <input type="password" onChange={(event) => this.setState({Password:event.target.value})} />
//         </label>
//         <div class='submitButton'>
//           <button onClick={this.SendLogin} type="button">Submit</button>
//         </div>
//       </form>
//     )
//   }
// }

function Login() {
  const [Username, SetUsername] = useState('')
  const [Password, SetPassword] = useState('')
  const [Logged_In, SetLogged_In] = useState(false)

  function ChangeUsername(event){
    SetUsername(event.target.value)
  }

  function ChangePassword(event){
    SetPassword(event.target.value)
  }

  function SendLogin(){
    var data = new FormData()

    data.append("Username", Username)
    data.append("Password", Password)
    console.log(Username,Password)
    // console.log(this.state.Username,this.state.Password)
    axios.post("http://localhost:8000/backend/login",
      data, { headers: { 'Content-Type': 'multipart/form-data' }, withCredentials: true }
    ).then((response) => {

      console.log("SUCCESS", response);
      SetLogged_In(true)


    }, (error) => {
      console.log(error);
    })
  }

  if(Logged_In === true){
          return(
        <Redirect to ={{pathname: "/dashboard"}}/>
      )
  }

  return (
    <form className="LoginForm">
      <label>
        <p>Username</p>
        <input type="text" onChange={(event) => ChangeUsername(event)} />
      </label>
      <label>
        <p>Password</p>
        <input type="password" onChange={(event) => ChangePassword(event)} />
      </label>
      <div class='submitButton'>
        <button onClick={SendLogin} type="button">Submit</button>
      </div>
    </form>
  )
}


export default Login;