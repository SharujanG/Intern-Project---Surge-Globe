import { Password } from "@mui/icons-material";
import React ,{useState}from "react";

function Clickme(){
    alert('Account added Sucessfully')
  }

function CreateUser(props){
    const{onCreate}=props;

    const[users,setuser]=useState({
        userName:"",
        email:"",
        password:""
    });

    const handleChange =(e)=>{
        console.log([e.target.name])
        console.log(e.target.value)
        console.log(users)
        setuser({
            ...users,
           [e.target.name]:e.target.value,
        });
    }
    const onSubmit =(e)=>{
       e.preventDefault();
       onCreate(users)
    }
    return(
        <form onSubmit={onSubmit}> 

        <lable>
            userName:
            <input name="userName" type ="text" value={users.userName} onChange={(e)=> handleChange(e)}/>
        </lable>
        
        <lable>
            Email:
            <input name="email" type ="text" value={users.email} onChange={(e)=> handleChange(e)}/>
        </lable>
       <lable>
        Password:
            <input name="password" type ="password" value={users.password} onChange={(e)=> handleChange(e)}/>
        </lable>  
        
        <button onClick={Clickme} type="submit" value="Submit">Submit</button>
        
        </form>
    );

}

export default CreateUser;  