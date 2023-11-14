import React, { useState } from "react";
import Layout from "./../../components/Layout/Layout";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import toast from "react-hot-toast";
import "../../styles/AuthStyles.css";
import { useAuth } from "../../context/auth";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [auth, setAuth] = useAuth(); 

    const location = useLocation();
    const navigate = useNavigate();

    // Use a ref to check if navigation has been performed
    const isNavigatedRef = React.useRef(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
        const res = await axios.post("http://localhost:3050/api/v1/auth/login", {
            email,
            password,
        });

        if (res.data.success && !isNavigatedRef.current) {
            toast.success(res.data.message);

            setAuth({
                ...auth,
                user: res.data.user,
                token: res.data.token,
            });    

            localStorage.setItem("auth", JSON.stringify(res.data));

            //Set the ref to true to prevent further navigation
            isNavigatedRef.current = true;
        {
            //console.log(location.state);
            navigate(location.state || "/");
        }
            return;
        } else if (!isNavigatedRef.current) {
            toast.error(res.data.message);
        }
        } catch (error) {
        console.log(error);
        toast.error("Something went wrong");
        }
    };


    
    return (
    <Layout title="Login">
        <div className="form-container " style={{ minHeight: "90vh" }}>
        <form onSubmit={handleSubmit}>
            <h4 className="title">LOGIN FORM</h4>

            <div className="mb-3">
            <input
                type="email"
                autoFocus
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-control"
                id="exampleInputEmail1"
                placeholder="Enter Your Email "
                required
            />
            </div>
            <div className="mb-3">
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Enter Your Password"
                required
            />
            </div>
            <div className="mb-3">
            <button
                type="button"
                className="btn forgot-btn"
                onClick={() => {
                navigate("/forgot-password");
                }}
            >
                Forgot Password
            </button>
            </div>

            <button type="submit" className="btn btn-primary">
            LOGIN
            </button>
        </form>
        </div>
    </Layout>
    );
};

export default Login;