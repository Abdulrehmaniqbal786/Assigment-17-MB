import React, { useState } from "react";
import Input_Field from "../components/Input_Field";
import { Custom_Button } from "../components/Custom_Button";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {auth, firebase_app} from '../config/firebase-config/index'
const Signup = () => {
  const [data, setData] = useState({});
  const Navigate = useNavigate()

  const change_handle = (e) => {
    const { value, id } = e.target;

    setData({ ...data, [id]: value });
  };


  const submit_handle = (e) => {
    e.preventDefault();

    // console.log(data)

    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        console.log('user', user)
        // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log('errorMessage', errorMessage)
        // ..
      });
  };

//   console.log(data);
  return (
    <div className="bg-bg_color h-[100dvh] grid place-items-center px-3">
      <form
        onSubmit={submit_handle}
        className="bg-gray-300 rounded-md max-w-md w-full py-6 px-3 grid grid-cols-2  gap-5"
      >
        <div className="text-primary_color col-span-2 text-center text-3xl font-bold">
          <h1>SIGNUP</h1>
        </div>
        <div className="col-span-2 md:col-span-1">
          <Input_Field
            id="first_name"
            type="text"
            required={true}
            onChange={change_handle}
            placeholder="First Name"
          />
        </div>
        <div className="col-span-2 md:col-span-1">
          <Input_Field
            id="last_name"
            type="text"
            required={true}
            onChange={change_handle}
            placeholder="Last Name"
          />
        </div>

        <div className="col-span-2">
          <Input_Field
            id="username"
            type="text"
            required={true}
            onChange={change_handle}
            placeholder="Username"
          />
        </div>
        <div className="col-span-2">
          <Input_Field
            id="phone_number"
            type="number"
            required={true}
            onChange={change_handle}
            placeholder="Phone Number"
          />
        </div>
        <div className="col-span-2">
          <Input_Field
            id="email"
            type="email"
            required={true}
            onChange={change_handle}
            placeholder="Email Address"
          />
        </div>
        <div className="col-span-2">
          <Input_Field
            id="password"
            required={true}
            onChange={change_handle}
            type="password"
            placeholder="Password"
          />
        </div>

        <div className="col-span-2">
          <Custom_Button  type="submit">Signup</Custom_Button>
        </div>

        <div className="col-span-2 space-x-1 text-center">
          <span>Already have account </span>
          <Link to="/login" className="underline text-blue-600">
            Login now
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Signup