import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const Login = () => {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [isLogin, setisLogin] = useState(false);

  const handleLogin = async () => {
    let response = await axios.get(`/login/${username}`);
    console.log(response.data.data);
    if (response.data.success) {
      if (response.data.data.password === password) {
        setisLogin(true);
        toast.success("Login Succesfully");
      } else {
        toast.error("You are a new user .Please Sign-Up First");
      }
    } else {
      toast.error("Something Went wrong");
    }
    setusername("");
    setpassword("");
  };

  return (
    <div>
      <ToastContainer />
      <div className="flex justify-center bg-blue-50">
        <div className="w-full max-w-xs my-20">
          <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                for="username"
              >
                Username
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Username"
                autoComplete="off"
                value={username}
                onChange={(e) => {
                  setusername(e.target.value);
                }}
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                for="password"
              >
                Password
              </label>
              <input
                className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="******************"
                autoComplete="off"
                value={password}
                onChange={(e) => {
                  setpassword(e.target.value);
                }}
              />
              <p className="text-red-500 text-xs italic">
                Please enter password.
              </p>
            </div>
            <div className="flex items-center justify-between">
              <button
                onClick={() => {
                  handleLogin();
                }}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Sign In
              </button>
              <a
                className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                href="#"
              >
                Forgot Password?
              </a>
            </div>
          </form>
          <p className="text-center text-gray-500 text-xs">
            &copy;2023 RS Corp. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
