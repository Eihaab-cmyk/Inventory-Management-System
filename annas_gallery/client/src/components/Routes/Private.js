import React, { useState, useEffect } from "react";
import { useAuth } from "../../context/auth";
import { Outlet } from "react-router-dom";
import axios from "axios";
import Spinner from "./Spinner";


const PrivateRoute = () => {
    const [ok, setOk] = useState(false);
    const [auth, setAuth] = useAuth(); 
    
    useEffect(() => {
    const authCheck = async () => {
        try {
        const storedAuth = JSON.parse(localStorage.getItem("auth"));

        if (storedAuth?.token) {

            setAuth({
                user: storedAuth.user,
                token: storedAuth.token,
            });
                
            // Log headers before making the request
            const headers = { Authorization: storedAuth.token };
            console.log("Request Headers:", headers);

            // Make an authenticated request with the token
            const res = await axios.get("http://localhost:3050/api/v1/auth/user-auth", {
            headers,
            });
            console.log(res.data);
            if (res.data && res.data.ok) {
                setOk(true);
            } else {
                setOk(false);
            }
        } else {
            setOk(false);
        }
        } catch (error) {
        console.error("Error during authentication check:", error);
        setOk(false);
        }
    };

    //console.log("auth:", auth);
    //console.log("auth?.token:", auth?.token);

    if (auth?.token) {
        //console.log("hello");
        authCheck();
    }
    }, [auth?.token, setAuth]);

    return ok ? <Outlet /> : <Spinner  path=""/>;
};
    
    export default PrivateRoute;