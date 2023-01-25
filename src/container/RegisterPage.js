import React, { useState } from "react";
import { register } from "../action/ActionTypes";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const loadLoginPage=()=>{

}

const Register = () => {
  let arr=[];
  const userDetails = useSelector((state) => state.addNewProfile.list);
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const addNewData = () => {
    const obj = {
      name: name,
      password: password,
      email: email,
    };
    arr.push(obj)
    dispatch(register(arr));
   
    
    console.log("collected data = ", arr);
  };

  console.log("user details from store = ", userDetails);
  return (
    <>
      <h4>welcome to registration page</h4>
      <form className="register-form">
        <input
          type="text"
          placeholder="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <input
          type="text"
          placeholder="email address"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <button type="button" onClick={addNewData}>
          create
        </button>
        <Link to={"/"}>go back to login page</Link>
      </form>
    </>
  );
};

export default Register;
