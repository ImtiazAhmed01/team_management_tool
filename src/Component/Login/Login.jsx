// import React from "react";
// import { useNavigate } from 'react-router-dom';
// const Login = () => {
//     const navigate = useNavigate();
//     return (
//         <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-200 to-blue-300 container">
//             <div className="flex w-[800px] shadow-lg rounded-lg overflow-hidden">
//                 {/* Left Side */}
//                 <div className="w-1/2 bg-blue-500 flex flex-col items-center justify-center p-10 text-white">
//                     <h2 className="text-2xl font-bold">Hello, Welcome!</h2>
//                     <p className="mt-2">Don't have an account?</p>
//                     <button className="mt-4 px-6 py-2 border border-white rounded-full" onClick={() => navigate("/signup")}>Register</button>
//                 </div>

//                 {/* Right Side (Login Form) */}
//                 <div className="w-1/2 bg-white p-10">
//                     <h2 className="text-xl font-bold text-gray-700 text-center">Login</h2>
//                     <div className="mt-6">
//                         <div className="relative mb-4">
//                             <input
//                                 type="text"
//                                 placeholder="Username"
//                                 className="w-full px-4 py-2 border rounded-md focus:outline-none"
//                             />
//                             <span className="absolute right-4 top-3 text-gray-400">🔒</span>
//                         </div>
//                         <div className="relative mb-4">
//                             <input
//                                 type="password"
//                                 placeholder="Password"
//                                 className="w-full px-4 py-2 border rounded-md focus:outline-none"
//                             />
//                             <span className="absolute right-4 top-3 text-gray-400">🔑</span>
//                         </div>
//                         <p className="text-right text-blue-500 text-sm cursor-pointer">Forgot Password?</p>
//                         <button className="w-full mt-4 bg-blue-500 text-white py-2 rounded-md">Login</button>
//                     </div>
//                     <p className="text-center text-gray-500 mt-4">or login with social platforms</p>
//                     <div className="flex justify-center gap-4 mt-3">
//                         <button className="p-2 border rounded-md">G</button>
//                         <button className="p-2 border rounded-md">F</button>
//                         <button className="p-2 border rounded-md">I</button>
//                         <button className="p-2 border rounded-md">L</button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Login;
import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Login = () => {
    const navigate = useNavigate();

    return (
        <motion.div
            className="flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-200 to-blue-300 container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
        >
            <motion.div
                className="flex w-[800px] shadow-lg rounded-lg overflow-hidden"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.4 }}
            >
                {/* Left Side */}
                <motion.div
                    className="w-1/2 bg-blue-500 flex flex-col items-center justify-center p-10 text-white"
                    initial={{ x: -100 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-2xl font-bold">Hello, Welcome!</h2>
                    <p className="mt-2">Don't have an account?</p>
                    <motion.button
                        className="mt-4 px-6 py-2 border border-white rounded-full transform transition duration-300 hover:scale-95 active:scale-90"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => navigate("/signup")}
                    >
                        Register
                    </motion.button>
                </motion.div>

                {/* Right Side (Login Form) */}
                <motion.div
                    className="w-1/2 bg-white p-10"
                    initial={{ x: 100 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-xl font-bold text-gray-700 text-center">Login</h2>
                    <div className="mt-6">
                        <div className="relative mb-4">
                            <input type="text" placeholder="Username" className="w-full px-4 py-2 border rounded-md focus:outline-none" />
                        </div>
                        <div className="relative mb-4">
                            <input type="password" placeholder="Password" className="w-full px-4 py-2 border rounded-md focus:outline-none" />
                        </div>
                        <p className="text-right text-blue-500 text-sm cursor-pointer">Forgot Password?</p>
                        <motion.button
                            className="w-full mt-4 bg-blue-500 text-white py-2 rounded-md"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Login
                        </motion.button>
                    </div>
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

export default Login;
