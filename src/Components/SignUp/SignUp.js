import React from "react";
import { Link } from "react-router-dom";
import SignInCommon from "../UserRegister/Common/SignInCommon";

const SignUp = () => {
  return (
    <div>
      <div className=" h-[80vh] flex justify-center items-center ">
        <div className=" py-6 px-8  shadow-xl w-96 h-auto">
          <h1 className="text-center pb-8 text-2xl ">Sign Up</h1>

          <form action="">
            <div className="mb-2">
              <label className="block pb-1" htmlFor="email">
                Email:
              </label>
              <input
                className="border-2 rounded-md border-[#39a2df] px-5 py-2 w-full focus:outline-0"
                type="email"
                name="email"
                id="email"
                placeholder="Email here"
              />
            </div>
            <div className="mb-2">
              <label className="block pb-1" htmlFor="password">
                Password:
              </label>
              <input
                className="border-2 rounded-md border-[#39a2df] px-5 py-2 w-full focus:outline-0"
                type="password"
                name="password"
                placeholder="Type Password"
                autoComplete="false"
              />
            </div>
            <div className="mb-2">
              <label className="block pb-1" htmlFor="password">
                Confirm Password:
              </label>
              <input
                className="border-2 rounded-md border-[#39a2df] px-5 py-2 w-full focus:outline-0"
                type="password"
                name="password"
                placeholder="Confirm Password"
                autoComplete="false"
              />
            </div>

            <button
              type="submit"
              className="block mt-8 w-full py-2
         px-4 bg-[#42a0d6] rounded-md text-white hover:bg-[#3a8cbb]"
            >
              Sign Up
            </button>

            <p className="text-md my-2 text-gray-600 text-center">
              Already registered?
              <Link className="underline text-[#39a2df] ml-1" to="/login">
                login
              </Link>
            </p>
            <SignInCommon></SignInCommon>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
