import axios from "axios";
import React, { useEffect, useState } from "react";
import './Dashboard.css'

function Dashboard() {

  const [HtmlData, setHtmlData] = useState(``)

  useEffect(() => {
    console.log('ff',HtmlData.length)
    if(HtmlData.length === 0 ){
    axios({
      method: 'GET',
      url: "http://localhost:8000/backend/todo",
      withCredentials: true
    })
      .then((response) => {
        console.log('d', response.data.data)
        var HtmlStr = response.data.data.map(todoitem => (
          <div key={Math.random().toString(36).substr(2, 9)} class="card">
            <h1 class="todotitle"><b>{todoitem.title}</b></h1>
            <p>{todoitem.description}</p>
          </div>
        ))
        setHtmlData(HtmlStr)


      }).then((error) => { console.log('e', error) })
    }
  })

  return(
    <div>{HtmlData}</div>
  )

}
export default Dashboard;
