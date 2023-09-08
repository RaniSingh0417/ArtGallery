import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const Signup = () => {
  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [confirmpassword, setconfirmpassword] = useState("");

  const handleSignup = async () => {
    if (
      username.trim() === "" ||
      email.trim() === "" ||
      password.trim() === ""
    ) {
      toast.warning("Please Enter All Information");
    } else if (password !== confirmpassword) {
      setpassword("");
      setconfirmpassword("");
      toast.error("Please enter same password for confirmation");
    }

    let response = await axios.post("/api/signupdata", {
      username,
      email,
      password,
    });
    if (response.data.success) {
      toast.success(response.data.message);
    } else {
      toast.error(response.data.message);
    }
  };
  return (
    <div>
      <ToastContainer />
      <div className=" bg-gray-100 min-h-screen flex flex-col">
        <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
            <h1 className="mb-8 text-3xl text-center">Sign up</h1>
            <input
              value={username}
              onChange={(e) => {
                setusername(e.target.value);
              }}
              type="text"
              autoComplete="off"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="fullname"
              placeholder="Username"
            />

            <input
              autoComplete="off"
              value={email}
              onChange={(e) => {
                setemail(e.target.value);
              }}
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="email"
              placeholder="Email"
            />

            <input
              autoComplete="off"
              value={password}
              onChange={(e) => {
                setpassword(e.target.value);
              }}
              type="password"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="password"
              placeholder="Password"
            />
            <input
              autoComplete="off"
              value={confirmpassword}
              onChange={(e) => {
                setconfirmpassword(e.target.value);
              }}
              type="password"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="confirm_password"
              placeholder="Confirm Password"
            />

            <button
              type="submit"
              onClick={() => {
                handleSignup();
              }}
              className="w-full text-center py-3 rounded bg-rose-500 text-white hover:bg-red-400 focus:outline-none my-1"
            >
              Create Account
            </button>

            <div className="text-center text-sm text-grey-dark mt-4">
              By signing up, you agree to the Terms of Service and
              <a
                className="no-underline border-b border-grey-dark text-grey-dark"
                href="#"
              >
                Privacy Policy
              </a>
            </div>
          </div>

          <div className="text-grey-dark mt-6">
            Already have an account?
            <a
              className="no-underline border-b border-blue text-blue"
              href="../login/"
            >
              Log in
            </a>
            .
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
