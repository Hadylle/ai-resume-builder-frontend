import { useState } from 'react';
import { Link } from 'react-router-dom';


import { motion } from 'framer-motion';

import Lottie from 'lottie-react';
import cvAnimation from '../assets/cvAnimation.json';


const SignInSignUpPage = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [slide, setSlide] = useState(0);
  const benefits = [
    { title: "Smart CV Analysis", desc: "Get structure & content insights" },
    { title: "Job Matching", desc: "Match percentage & missing skills" },
    { title: "PDF Export", desc: "Download polished, ATS-ready CVs" }
  ];

  return (
    <>
    

      <div className="min-h-screen flex flex-col lg:flex-row bg-white">
        {/* Left side */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="w-full lg:w-1/2 bg-blue-50 flex flex-col items-center justify-center px-8 py-12 text-center"
        >
          <Lottie animationData={cvAnimation} loop className="w-3/4 max-w-md mb-6" />

          <div className="w-full max-w-sm">
            <h2 className="text-2xl font-bold mb-2">{benefits[slide].title}</h2>
            <p className="text-gray-600 mb-4">{benefits[slide].desc}</p>
            <div className="flex justify-center space-x-2">
              {benefits.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setSlide(i)}
                  className={`w-3 h-3 rounded-full transition ${
                    i === slide ? "bg-blue-600" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right side */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="w-full lg:w-1/2 flex items-center justify-center px-6 py-16 bg-white"
        >
          <div className="w-full max-w-md">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
              {isSignUp ? "Sign Up to CVAI" : "Welcome Back"}
            </h3>

            <div className="space-y-4">
              {/* Google Sign-In */}
              <button
                type="button"
                className="w-full flex items-center justify-center border border-gray-300 rounded-md py-2 hover:bg-gray-50 transition"
                onClick={() => alert("Google Sign-In flow")}
              >
                <img src="icons/google.svg" alt="Google" className="w-5 h-5 mr-2" />
                Continue with Google
              </button>

              <div className="relative text-center my-4">
                <span className="bg-white px-3 text-gray-500">or</span>
                <div className="absolute inset-0 top-1/2 border-t border-gray-300" />
              </div>

              <form className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <input type="email" placeholder="you@example.com"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Password</label>
                  <input type="password" placeholder="••••••••"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                {isSignUp && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
                    <input type="password" placeholder="••••••••"
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  </div>
                )}
                <button type="submit" className="w-full bg-[#3B82F6] text-white py-2 rounded-md hover:bg-blue-600 transition">
                  {isSignUp ? "Create Account" : "Login"}
                </button>
              </form>

              <div className="mt-6 text-center text-sm text-gray-600">
                {isSignUp ? (
                  <>Already have an account?{" "}
                    <button onClick={() => setIsSignUp(false)} className="text-blue-600 font-medium underline">
                      Sign In
                    </button>
                  </>
                ) : (
                  <>Don’t have an account?{" "}
                    <button onClick={() => setIsSignUp(true)} className="text-blue-600 font-medium underline">
                      Sign Up
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      
    </>
  );
};

export default SignInSignUpPage;
