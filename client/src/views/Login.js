import React, { useState } from 'react';

function Login() {
  const [loginData, setLoginData] = useState({
     email: '',
     password: '',
   });
 
   const handleSubmit = (e) => {
     e.preventDefault();

 
     alert("Login Successful!");
     console.log("Form Data:", loginData);
   };
 
   return (
     <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600">
       <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg">
         <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Login Here !</h2>
         <form onSubmit={handleSubmit} className="space-y-6">
           
           <div>
             <label htmlFor="email" className="block text-sm font-medium text-gray-700">
               Email
             </label>
             <input
               type="email"
               name="email"
               id="email"
               value={loginData.email}
               onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
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
             <label htmlFor="password" className="block text-sm font-medium text-gray-700">
               Password
             </label>
             <input
               type="password"
               name="password"
               id="password"
               value={loginData.password}
               onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
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
             type="submit"
             className="w-full py-3 px-4 text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-300 transition ease-in-out duration-300"
           >
            Login
           </button>
         </form>
       </div>
     </div>
   );
 }

export default Login