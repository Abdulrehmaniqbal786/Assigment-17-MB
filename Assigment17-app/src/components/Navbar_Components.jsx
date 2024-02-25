import { CircularProgress, Typography } from "@mui/material";
import logo from '../assets/logo.jpg'
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Custom_Button } from "./Custom_Button";
import { signOut } from "firebase/auth";
import { auth } from "../config/firebase-config";
import { set_user_auth } from "../store/slices/user_data_slice";

const Navbar_Components = () => {
  const user_data = useSelector((store) => store.user_data);

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const logout_handle = () =>{
    signOut(auth).then((res)=>{
        dispatch(set_user_auth(false))
        navigate('/login')
        console.log('logout ho gya...!')
    })

  }
  return (
    <div className="bg-gray-500 h-20 px-3 flex items-center justify-between">
      <div className="text-3xl text-white font-bold">

        <img width={300} src={logo} alt="" />
      </div>

      <div>
        {user_data.loading ? (
          <CircularProgress color="warning" />
        ) : (
          <div>







            {user_data.isLoggedIn ? (
              <div className="space-x-3 flex gap-7 text-white font-medium">
                <Typography className="m-7">Username</Typography>
                <Custom_Button  onClick={logout_handle} >
                    Logout
                </Custom_Button>
              </div>
            ) : (
              <div className="space-x-3 text-white font-medium">
                <Link to="/login">Login</Link>
                <span>|</span>
                <Link to="/signup">Signup</Link>
                <span>|</span>
                <Link to="/Login_Google">Google</Link>
                
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export { Navbar_Components };