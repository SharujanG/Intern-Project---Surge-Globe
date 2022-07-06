import React, { useEffect, useState } from "react";
import LoginForm from "./componenets/LoginForm";
import {getUser,addUser,editUser,deleteUser} from "./apis/studentmangaementAPICall"
import TableUser from "./componenets/TableUser"
import CreateUser from "./componenets/CreateUser";

import {BrowserRouter as Router,Route,Switch} from "react-router-dom"

function App() {
  

  const [users, setstudent] = useState([]);

  //Get all user
  useEffect (() =>{
    getUser().then(users => setstudent(users))
  }, [])

  //create an function for add user
const adduser = (user) => {
  return addUser(user)
  .then (data =>{
      setstudent([...users,data])
  })
}

  //Edit user
const edituser = (user) =>{
  return editUser(user)
    .then(data => {
      console.log(data);
      return data;
    })
}

//delete user

const deleteuser = (id) =>{
  return deleteUser(id)
    .then(data => {
      if(data.deletedCount ===1){
        setstudent(users.filter(user => user._id !== id));
      }
    })
}

  return (

    <div className="App">

      <LoginForm onCreate={LoginForm}/>
      <CreateUser onCreate ={adduser} />
      <TableUser users={users}/> 
      {/* onDelete={deleteuser} */}
    </div>
  );
  
}

export default App;
