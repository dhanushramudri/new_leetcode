import React, { useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";
import { authModalState, setAuthModalState } from "../../atoms/authModalAtom";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/firebase";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const Navigate = useNavigate();
  const setAuthModalState = useSetRecoilState(authModalState);

  const handleClick = (type) => {
    setAuthModalState((prev) => ({ ...prev, type: type }));
  };
  const [inputs, setInputs] = useState({ email: "", password: "" });
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const handleInputChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleLogin = async (e) => {
    e.preventDefault();
    // alert(inputs.password);
    if (!inputs.email || !inputs.password) alert("Please fill all the fields");
    try {
      const newUser = await signInWithEmailAndPassword(
        inputs.email,
        inputs.password
      );

      if (!newUser) return;
      Navigate("/");
    } catch (error) {
      console.log(error.message);
      alert(error.message);
    }
  };
  useEffect(() => {
    if (error) alert(error.message);
  });
  // console.log(user, "user");
  return (
    <form className="space-y-6 px-6 py-4" onSubmit={handleLogin}>
      <h3 className="text-xl font-medium text-white">Sign in to LeetClone</h3>
      <div>
        <label
          htmlFor="email"
          className="text-sm font-medium block mb-2 text-gray-300"
        >
          Your Email
        </label>
        <input
          onChange={handleInputChange}
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
          onChange={handleInputChange}
          type="password"
          name="password"
          id="password"
          className="border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-600 border-gray-5-- placeholder-gray-400 text-white"
          placeholder="********"
        />
      </div>
      <button
        onClick={() =>
          signInWithEmailAndPassword(inputs.email, inputs.password)
        }
        type="submit"
        className="w-full text-white focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-brand-orange hover:bg-brand-orange-s"
      >
        {loading ? "Loading" : "Login"}
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
