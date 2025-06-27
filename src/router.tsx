import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "./layout/HomeLayout";
import HomePage from "./components/HomePage";
import RegisterPage from "./components/RegisterPage";
import LoginPage from "./components/LoginPage";
import ProfilePage from "./components/ProfilePage";



const router = createBrowserRouter([
    {
        path:"",
        element:<HomeLayout/>,
        children:[
            {
                path:"",
                element:<HomePage/>
            },
            {
                path:"/register",
                element:<RegisterPage/>
            },
            {
                path:"/login",
                element:<LoginPage/>
            },
            {
                path:"/profile",
                element:<ProfilePage/>
            },

        ]
    }
])
export default router