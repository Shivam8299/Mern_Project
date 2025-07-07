import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function Login() {
  const [currentState, setCurrentState] = useState("Login");
  const [show, setShow] = useState(false)

  const onSubmitHandler = (event) =>{
    event.preventDefault()
  }
  return (
    <form onSubmit={onSubmitHandler} className="flex flex-col item-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800">
      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        <p className="prata-regular text-3xl">{currentState}</p>
        <hr className="border-none h-[1.5px] w-8 bg-gray-800 " />
      </div>
      {currentState === "Login" ? (
        ""
      ) : (
        <input
          placeholder="Name"
          type="text"
          className="w-full px-3 py-2 border border-gray-800 outline-none"
          required
        />
      )}
      <input
        placeholder="Email"
        type="email"
        className="w-full px-3 py-2 border border-gray-800 outline-none"
        required
      />
      <div className="flex border  border-gray-800 items-center">
        <input
        placeholder="Password"
        type={show ? "text" :"password"  }
        className="w-full px-3 py-2 outline-none"
        required
      /> <p className="px-2 py-2 cursor-pointer"> 
      {show ?  <FaEye size="22"  onClick={()=>setShow(!show)} /> : <FaEyeSlash size="22" onClick={()=>setShow(!show)}  /> }
     
      </p>
      </div>
      <div className="w-full flex justify-between text-sm mt-[-8px]">
        <p className="cursor-pointer">Forgot your password?</p>
        {currentState === "Login" ? (
          <p
            onClick={() => setCurrentState("Sign up")}
            className="cursor-pointer"
          >
            Create account
          </p>
        ) : (
          <p
            onClick={() => setCurrentState("Login")}
            className="cursor-pointer"
          >
            Login Here
          </p>
        )}
      </div>
      <button className="bg-black text-white font-light w-full sm:w-[45%] m-auto active:bg-gray-800  px-4 py-2 mt-4 ">
        {currentState === "Login" ? "Sing In" : "Sign Up"}
      </button>
    </form>
  );
}

export default Login;
