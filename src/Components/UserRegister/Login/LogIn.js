import React, { useRef } from "react";
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { auth } from "../../../firebase.init";
import SignInCommon from "../Common/SignInCommon";
import Loading from "../Loading/Loading";

const LogIn = () => {
  const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);

  const [sendPasswordResetEmail, sending, Perror] = useSendPasswordResetEmail(auth);

  const navigate = useNavigate();
  const location = useLocation();

  const from = location?.state?.from?.pathname || "/";

  const emailRef = useRef("");
  const passwordRef = useRef("");

  if (loading || sending) {
    <Loading></Loading>;
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    if (!email || !password) {
      toast.error(`Please Fill Up The Form!`, {
        position: "top-center",
        autoClose: 2000,
      });
      return;
    }
    await signInWithEmailAndPassword(email, password);
  };

  const handleResetPassword = async () => {
    const email = emailRef.current.value;
    if (!email) {
      return;
    }
    await sendPasswordResetEmail(email);
    toast.success("Verification Sent to Your Mail", {
      position: "top-center",
      autoClose: 2000,
    });
  };

  if (user) {
    navigate(from, { replace: true });
  }

  return (
    <div>
      <div className=" h-[80vh] flex justify-center items-center">
        <div className=" py-6 px-8 shadow-xl w-96 h-auto bg-white">
          <h1 className="text-center pb-8 text-2xl ">Log In</h1>

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

            {error ? <p className="text-red-500">{error?.message}</p> : ""}

            <input
              type="submit"
              value="LogIn"
              className="block mt-5 w-full py-2 cursor-pointer
         px-4 bg-[#42a0d6] rounded-md text-white hover:bg-[#3a8cbb]"
            ></input>

            <p className="text-md my-2 text-gray-600 text-center">
              New in Crypto News?
              <Link className="underline text-[#39a2df] ml-1" to="/signup">
                Sign Up
              </Link>
            </p>

            <button onClick={handleResetPassword} className="hover:underline text-[#39a2df] mx-auto block ">
              Forgot Your Password?
            </button>

            <SignInCommon></SignInCommon>
          </form>
        </div>
      </div>
      <ToastContainer theme="dark"></ToastContainer>
    </div>
  );
};

export default LogIn;
