import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Signup from "../pages/SignUp";
import Login from "../pages/Login";
import Products from "../pages/Products";
import Products_Details from "../pages/Products_Details";
import Login_Google from "../pages/Login_Google";



const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>

            <Route path="signup" element={<Signup />} />
            <Route path="login" element={<Login />} />
            <Route path="Login_Google" element={<Login_Google/>} />

            <Route path="" element={<Products />} />
            <Route path="/productdetails/:id" element={<Products_Details />} />


            {/* Private Route */}
            {/* <Route element={<Private_Routes />}>
            </Route> */}
        </Route>
    )
)


const Router_App = () => {


    return <RouterProvider router={router} />
}


export { Router_App }