import React from "react";
import { useSetRecoilState } from "recoil";
import { authModalState, setAuthModalState } from "../../atoms/authModalAtom";

const Login = () => {
  const setAuthModalState = useSetRecoilState(authModalState);

  const handleClick = (type) => {
    setAuthModalState((prev) => ({ ...prev, type: type }));
  };

  return (
    <form className="space-y-6 px-6 py-4">
      <h3 className="text-xl font-medium text-white">Sign in to LeetClone</h3>
      <div>
        <label
          htmlFor="email"
          className="text-sm font-medium block mb-2 text-gray-300"
        >
          Your Email
        </label>
        <input
          type="text"
          name="email"
          id="email"
          className="border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-600 border-gray-5-- placeholder-gray-400 text-white"
          placeholder="name@company.com"
        />
      </div>
      <div>
        <label
          htmlFor="password"
          className="text-sm font-medium block mb-2 text-gray-300"
        >
          Your Password
        </label>
        <input
          type="Password"
          name="Password"
          id="Password"
          className="border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-600 border-gray-5-- placeholder-gray-400 text-white"
          placeholder="********"
        />
      </div>
      <button
        type="submit"
        className="w-full text-white focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-brand-orange hover:bg-brand-orange-s"
      >
        Login
      </button>
      <button
        onClick={() => handleClick("forgotPassword")}
        className="flex w-full justify-end"
      >
        <a
          href="#"
          className="text-sm block text-brand-orange hover:underline w-full text-right"
        >
          Forgot Password?
        </a>
      </button>
      <div className="text-sm font-medium text-gray-300">
        Not Registered?
        <a
          onClick={() => handleClick("register")}
          href="#"
          className="text-blue-700 hover:underline px-1"
        >
          Create Account
        </a>
      </div>
    </form>
  );
};

export default Login;