import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';
import WelcomePage from './WelcomePage';
const Login = () => {
  const userDetails = useSelector((state) => state.addNewProfile.list);
  const [password,setPassword]=useState("");
  const [email,setEmail]=useState("");

  const checkList=()=>{
    console.log("user detail 1 in login page : ",userDetails);
    userDetails.map(item=>{
      
      if(item.email===email && item.password===password){
      return<>
        <WelcomePage name={item.name}/>
        </>
      }
      return <>register first</>

    })
  }
  return <>
    <form>
     <label>Email</label><input type='email' placeholder='abc@xyz.com' value={email} onChange={(event)=>setEmail(event.target.value)}/>
     <label>Password</label><input type='password'value={password} onChange={(event)=>setPassword(event.target.value)}/>
     <button type='button' onClick={checkList}>Login</button>
    </form>
    <Link to="/register">Register here</Link>
    </>
 
}
export default Login
