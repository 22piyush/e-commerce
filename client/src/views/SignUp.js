import React, { useState } from 'react';
import axios from "axios";
import {toast, Toaster} from "react-hot-toast"
import { Link } from "react-router";

function SignUp() {
  const [signupData, setSignupData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    password: '',
    rePassword: '',
  });

  const processSignUp = async () => {
    toast.loading("Please wait...");
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/signup`, signupData);
      toast.dismiss();

      toast.success("Signup successful!");
      setSignupData({
        name: '',
        email: '',
        phone: '',
        address: '',
        password: '',
        rePassword: '',
      })
      console.log(response);

      setTimeout(() => {
        window.location.href = "/login"
      },2000);


    } catch (err) {
      toast.dismiss();
      toast.error(err?.response?.data?.message || "Something went wrong. Please try again.");
      console.log(err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600">
      <div className="bg-white shadow-lg rounded-lg pl-8 pr-8 pt-5 pb-10 w-full max-w-lg">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-3">Create an Account</h2>
        <div className="space-y-3">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={signupData.name}
              onChange={(e) => setSignupData({ ...signupData, name: e.target.value })}
              className="mt-2 block w-full rounded-lg focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm pt-3 pb-3 pl-2"
              style={{
                fontSize: '17px',
                boxShadow: 'rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px'
              }}
              placeholder="John Doe"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={signupData.email}
              onChange={(e) => setSignupData({ ...signupData, email: e.target.value })}
              className="mt-2 block w-full rounded-lg focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm pt-3 pb-3 pl-2"
              style={{
                fontSize: '17px',
                boxShadow: 'rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px'
              }}
              placeholder="example@example.com"
              required
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
              Phone
            </label>
            <input
              type="tel"
              name="phone"
              id="phone"
              value={signupData.phone}
              onChange={(e) => setSignupData({ ...signupData, phone: e.target.value })}
              className="mt-2 block w-full rounded-lg focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm pt-3 pb-3 pl-2"
              style={{
                fontSize: '17px',
                boxShadow: 'rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px'
              }}
              placeholder="123-456-7890"
              required
            />
          </div>
          <div>
            <label htmlFor="address" className="block text-sm font-medium text-gray-700">
              Address
            </label>
            <textarea
              name="address"
              id="address"
              value={signupData.address}
              onChange={(e) => setSignupData({ ...signupData, address: e.target.value })}
              className="mt-2 block w-full rounded-lg focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm pt-3 pb-3 pl-2"
              style={{
                fontSize: '17px',
                boxShadow: 'rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px'
              }}
              placeholder="1234 Main St, Apt 101"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={signupData.password}
              onChange={(e) => setSignupData({ ...signupData, password: e.target.value })}
              className="mt-2 block w-full rounded-lg focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm pt-3 pb-3 pl-2"
              style={{
                fontSize: '17px',
                boxShadow: 'rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px'
              }}
              placeholder="********"
              required
            />
          </div>
          <div>
            <label htmlFor="rePassword" className="block text-sm font-medium text-gray-700">
              Re-enter Password
            </label>
            <input
              type="password"
              name="rePassword"
              id="rePassword"
              value={signupData.rePassword}
              onChange={(e) => setSignupData({ ...signupData, rePassword: e.target.value })}
              className="mt-2 block w-full rounded-lg focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm pt-3 pb-3 pl-2"
              style={{
                fontSize: '17px',
                boxShadow: 'rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px'
              }}
              placeholder="********"
              required
            />
          </div>
          <button
            className="w-full py-3 px-4 text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-300 transition ease-in-out duration-300"
            onClick={() => processSignUp()}
          >
            Sign Up
          </button>
          <div>
            <p className=' text-black-600 '>Already have an account <Link to="/login" className=' text-red-500 cursor-pointer'><b>Login here!</b></Link></p>
          </div>
        </div>
      </div>
      <Toaster/>
    </div>
  );
}

export default SignUp;
