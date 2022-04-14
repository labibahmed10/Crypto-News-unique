import React, { useRef, useState } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { auth } from "../../../firebase.init";
import SignInCommon from "../Common/SignInCommon";

const SignUp = () => {
  const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth);

  const [accepted, setAccepted] = useState(false);

  const emailRef = useRef("");
  const passwordRef = useRef("");
  const confrimPassRef = useRef("");

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const confirmPass = confrimPassRef.current.value;

    // if (!email || !password || !confirmPass) {
    //   toast.warn("Please Fill Up The Form!", {
    //     position: "top-center",
    //   });
    //   return;
    // }
    console.log(password, confirmPass);

    if (password !== confirmPass) {
      toast.error("Password did not matched!", {
        position: "top-center",
        autoClose: 2000,
      });
      return;
    } else {
      await createUserWithEmailAndPassword(email, password);
      navigate("/login");
    }
  };

  return (
    <>
      <div className=" h-[80vh] flex justify-center items-center">
        <div className=" py-6 px-8 shadow-xl w-96 h-auto bg-white">
          <h1 className="text-center pb-8 text-2xl ">Sign Up</h1>

          <form action="" onSubmit={handleSubmit}>
            <div className="mb-2">
              <label className="block pb-1" htmlFor="email">
                Email:
              </label>
              <input
                ref={emailRef}
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
                ref={passwordRef}
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
                ref={confrimPassRef}
                className="border-2 rounded-md border-[#39a2df] px-5 py-2 w-full focus:outline-0"
                type="password"
                name="conpassword"
                placeholder="Confirm Password"
                autoComplete="false"
              />
            </div>

            <input
              onClick={() => setAccepted(!accepted)}
              className="h-4 w-4 mr-1 mt-2"
              type="checkbox"
              name="checkbox"
              id="checkbox"
            />
            <label htmlFor="checkbox">Accept Crypto news Terms & Condition?</label>

            <button
              disabled={!accepted}
              type="submit"
              className={`block mt-3 w-full py-2
         px-4  rounded-md text-white  ${accepted ? "bg-[#42a0d6] hover:bg-[#3a8cbb]" : "bg-slate-300"} `}
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
      <ToastContainer theme="dark"></ToastContainer>
    </>
  );
};

export default SignUp;
