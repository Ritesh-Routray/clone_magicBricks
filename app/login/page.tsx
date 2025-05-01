'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Eye, EyeOff, ArrowRight, Mail, Phone } from 'lucide-react';

export default function LoginPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [loginMethod, setLoginMethod] = useState<'email' | 'phone'>('email');
  
  const toggleForm = () => {
    setIsLogin(!isLogin);
  };
  
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl w-full">
        <div className="bg-white shadow-sm rounded-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Left Column: Form */}
            <div className="p-8">
              <div className="mb-10">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  {isLogin ? 'Welcome Back' : 'Create Your Account'}
                </h1>
                <p className="text-gray-600">
                  {isLogin ? 'Login to access your MagicBricks account' : 'Join MagicBricks to find your perfect property'}
                </p>
              </div>
              
              <form className="space-y-6">
                {isLogin && (
                  <div className="flex border border-gray-300 rounded-lg mb-6 overflow-hidden">
                    <button
                      type="button"
                      className={`flex-1 py-3 text-center font-medium ${
                        loginMethod === 'email' ? 'bg-primary-50 text-primary-700' : 'bg-white text-gray-500'
                      }`}
                      onClick={() => setLoginMethod('email')}
                    >
                      Email
                    </button>
                    <button
                      type="button"
                      className={`flex-1 py-3 text-center font-medium ${
                        loginMethod === 'phone' ? 'bg-primary-50 text-primary-700' : 'bg-white text-gray-500'
                      }`}
                      onClick={() => setLoginMethod('phone')}
                    >
                      Phone
                    </button>
                  </div>
                )}
                
                {/* Registration Form Fields */}
                {!isLogin && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="first-name" className="label">First Name</label>
                      <input 
                        type="text" 
                        id="first-name" 
                        className="input" 
                        placeholder="John"
                        required 
                      />
                    </div>
                    <div>
                      <label htmlFor="last-name" className="label">Last Name</label>
                      <input 
                        type="text" 
                        id="last-name" 
                        className="input" 
                        placeholder="Doe"
                        required 
                      />
                    </div>
                  </div>
                )}
                
                {/* Email Field */}
                {(loginMethod === 'email' || !isLogin) && (
                  <div>
                    <label htmlFor="email" className="label">Email Address</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Mail className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        className="input pl-10"
                        placeholder="you@example.com"
                      />
                    </div>
                  </div>
                )}
                
                {/* Phone Field */}
                {(loginMethod === 'phone' || !isLogin) && (
                  <div>
                    <label htmlFor="phone" className="label">Phone Number</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Phone className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        autoComplete="tel"
                        required={loginMethod === 'phone' || !isLogin}
                        className="input pl-10"
                        placeholder="+91 9876543210"
                      />
                    </div>
                  </div>
                )}
                
                {/* Password Field */}
                <div>
                  <label htmlFor="password" className="label">Password</label>
                  <div className="relative">
                    <input
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      autoComplete={isLogin ? "current-password" : "new-password"}
                      required
                      className="input pr-10"
                      placeholder={isLogin ? "Enter your password" : "Create a strong password"}
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 right-0 pr-3 flex items-center"
                      onClick={togglePasswordVisibility}
                    >
                      {showPassword ? (
                        <EyeOff className="h-5 w-5 text-gray-400" />
                      ) : (
                        <Eye className="h-5 w-5 text-gray-400" />
                      )}
                    </button>
                  </div>
                </div>
                
                {isLogin && (
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <input
                        id="remember-me"
                        name="remember-me"
                        type="checkbox"
                        className="h-4 w-4 text-primary-600 border-gray-300 rounded"
                      />
                      <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-600">
                        Remember me
                      </label>
                    </div>
                    
                    <div className="text-sm">
                      <a href="#" className="font-medium text-primary-600 hover:text-primary-500">
                        Forgot password?
                      </a>
                    </div>
                  </div>
                )}
                
                <div>
                  <button
                    type="submit"
                    className="btn btn-primary w-full flex justify-center py-3"
                  >
                    {isLogin ? 'Sign In' : 'Create Account'}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </button>
                </div>
              </form>
              
              <div className="mt-6">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-gray-500">Or continue with</span>
                  </div>
                </div>
                
                <div className="mt-6 grid grid-cols-2 gap-3">
                  <a
                    href="#"
                    className="btn btn-outline flex justify-center py-2"
                  >
                    <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24">
                      <path
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                        fill="#4285F4"
                      />
                      <path
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                        fill="#34A853"
                      />
                      <path
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                        fill="#FBBC05"
                      />
                      <path
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                        fill="#EA4335"
                      />
                    </svg>
                    Google
                  </a>
                  <a
                    href="#"
                    className="btn btn-outline flex justify-center py-2"
                  >
                    <svg className="h-5 w-5 mr-2" fill="#1877F2" viewBox="0 0 24 24">
                      <path
                        d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                      />
                    </svg>
                    Facebook
                  </a>
                </div>
              </div>
              
              <div className="mt-6 text-center">
                <p className="text-sm text-gray-600">
                  {isLogin ? "Don't have an account?" : "Already have an account?"}
                  <button
                    type="button"
                    className="ml-1 font-medium text-primary-600 hover:text-primary-500"
                    onClick={toggleForm}
                  >
                    {isLogin ? 'Sign up' : 'Sign in'}
                  </button>
                </p>
              </div>
            </div>
            
            {/* Right Column: Image */}
            <div className="relative hidden md:block">
              <div className="absolute inset-0 bg-primary-900 bg-opacity-90"></div>
              <Image
                src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Real estate"
                fill
                className="object-cover"
                sizes="50vw"
              />
              <div className="absolute inset-0 flex flex-col justify-center p-12 text-white">
                <h2 className="text-3xl font-bold mb-6">
                  {isLogin 
                    ? 'Find Your Dream Property Today' 
                    : 'Join Thousands of Happy Homeowners'
                  }
                </h2>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <div className="bg-white bg-opacity-20 p-1 rounded-full mr-3">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span>Access to thousands of verified properties</span>
                  </li>
                  <li className="flex items-center">
                    <div className="bg-white bg-opacity-20 p-1 rounded-full mr-3">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span>Save your favorite properties and searches</span>
                  </li>
                  <li className="flex items-center">
                    <div className="bg-white bg-opacity-20 p-1 rounded-full mr-3">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span>Get personalized property recommendations</span>
                  </li>
                  <li className="flex items-center">
                    <div className="bg-white bg-opacity-20 p-1 rounded-full mr-3">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span>Connect directly with property owners and agents</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}