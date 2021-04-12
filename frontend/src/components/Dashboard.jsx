import axios from "axios";
import React from "react";
import './Dashboard.css'

class Dashboard extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      HtmlStr:``,

    };

  }

  componentDidMount(){
    var dataHtml = ''
    var data = new FormData()
    var userid = localStorage.getItem('token')
    data.append("id",userid)
    axios({
      method:'GET',
      url:"http://localhost:8000/backend/todo",
      params:{"userid":userid}
    })
    // axios.get("http://localhost:8000/backend/todo",data).then((response) => { console.log(response)})
    .then((response)=>{
      console.log('d',response.data.data)
      dataHtml = response.data.data.map(todoitem => (
        <div key={ Math.random().toString(36).substr(2, 9) } class = "card">
        <h1 class = "todotitle"><b>{todoitem.title}</b></h1>
        <p>{todoitem.description}</p>
        </div>
      ))
      this.setState({HtmlStr:dataHtml})
      
  
  }).then((error)=>{console.log('e',error)})
  }

  render(){
    return(
      <div>{this.state.HtmlStr}</div>
    )
  }
}


export default Dashboard;
