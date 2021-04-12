import React , {useState} from "react";
import axios from "axios"
import { Redirect } from "react-router";

function Add() {
  
  function AddData(){
    console.log('add',Title,Desc)

    var data = new FormData()

    data.append("Title",Title)
    data.append("Description",Desc)
    axios.post("http://localhost:8000/backend/todo",
      data,{headers: {'Content-Type': 'multipart/form-data'}, withCredentials: true}
      ).then((response) => {
        console.log("SUCCESS",response);
        SetSubmit(true)
      }, (error) => {
        console.log(error);
      })



  }

  const [Title,setTitle] = useState('')
  const [Desc,setDesc] = useState('')
  const [Submit,SetSubmit] = useState(false)
  if (Submit === true){
    return(<Redirect to ={{pathname: "/dashboard"}}/>)
  }
  return (
    <form className = "AddForm">
    <label>
      <p>Title</p>
      <input type="text" onChange={(event) => setTitle(event.target.value)} />
    </label><br/>
    <label>
      <p>Description</p>
      <textarea name="Description" defaultValue="Enter Description here" onChange={(event) => setDesc(event.target.value)}></textarea>
    </label>
    <div class='submitButton'>
      <button type="button" onClick ={AddData}>Submit</button>
    </div>
  </form>
  );
}

export default Add;