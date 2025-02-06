import React, { useState } from "react";
import axios from "axios";
import { toast, Toaster } from "react-hot-toast";
import { Link } from "react-router";

function Login() {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const processLogin = async () => {
    toast.loading("Please wait...");
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/login`,
        loginData
      );

      localStorage.setItem("e-commerce-user-token", response.data.token);

      toast.dismiss();

      toast.success("Login successful!");

      setLoginData({
        email: "",
        password: "",
      });
      console.log(response);

      setTimeout(() => {
        window.location.href = "/";
      }, 2000);

    } catch (err) {
      toast.dismiss();
      toast.error(
        err?.response?.data?.message ||
          "Something went wrong. Please try again."
      );
      console.log(err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
          Login Here !
        </h2>
        <div className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={loginData.email}
              onChange={(e) =>
                setLoginData({ ...loginData, email: e.target.value })
              }
              className="mt-2 block w-full rounded-lg focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm pt-3 pb-3 pl-2"
              style={{
                fontSize: "17px",
                boxShadow:
                  "rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px",
              }}
              placeholder="example@example.com"
              required
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={loginData.password}
              onChange={(e) =>
                setLoginData({ ...loginData, password: e.target.value })
              }
              className="mt-2 block w-full rounded-lg focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm pt-3 pb-3 pl-2"
              style={{
                fontSize: "17px",
                boxShadow:
                  "rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px",
              }}
              placeholder="********"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 px-4 text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-300 transition ease-in-out duration-300"
            onClick={() => processLogin()}
          >
            Login
          </button>
        </div>
        <div className="mt-3">
          <p className=" text-black-600 ">
            Dont have an account?{" "}
            <Link to="/signup" className=" text-red-500 cursor-pointer">
              <b>SignUp here!</b>
            </Link>
          </p>
        </div>
      </div>
        <Toaster/>
    </div>
  );
}

export default Login;
