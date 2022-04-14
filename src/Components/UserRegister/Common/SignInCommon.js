import React from "react";
import { auth } from "../../../firebase.init";

import {
  useSignInWithFacebook,
  useSignInWithGithub,
  useSignInWithGoogle,
  useSignInWithTwitter,
} from "react-firebase-hooks/auth";
import Loading from "../Loading/Loading";

const SignInCommon = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  const [signInWithTwitter, Tuser, Tloading, Terror] = useSignInWithTwitter(auth);

  const [signInWithGithub, Guser, Gloading, Gerror] = useSignInWithGithub(auth);

  const [signInWithFacebook, Fuser, Floading, Ferror] = useSignInWithFacebook(auth);

  if (loading || Tloading || Gloading || Floading) {
    return <Loading></Loading>;
  }

  return (
    <>
      <div
        onClick={() => signInWithGoogle()}
        className="flex cursor-pointer items-center justify-between px-16 py-2 mt-5 shadow-md bg-[#F8FAFC] border border-[#39a2df]"
      >
        <img
          className="w-7 object-contain"
          src="https://developers.google.com/identity/images/g-logo.png"
          alt=""
        />
        <p>Continue With Google</p>
      </div>

      <div
        onClick={() => signInWithFacebook()}
        className="flex cursor-pointer items-center justify-between px-12 py-2 mt-5 shadow-md bg-[#F8FAFC] border border-[#39a2df]"
      >
        <img
          className="w-7 object-contain"
          src="https://e7.pngegg.com/pngimages/991/568/png-clipart-facebook-logo-computer-icons-facebook-logo-facebook-thumbnail.png"
          alt=""
        />
        <p>Continue With Facebook</p>
      </div>

      <div
        onClick={() => signInWithGithub()}
        className="flex cursor-pointer items-center justify-between px-16 py-2 mt-5 shadow-md bg-[#F8FAFC] border border-[#39a2df]"
      >
        <img
          className="w-7 object-contain"
          src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
          alt=""
        />
        <p>Continue With Github</p>
      </div>

      <div
        onClick={() => signInWithTwitter()}
        className="flex cursor-pointer items-center justify-between px-16 py-2 mt-5 shadow-md bg-[#F8FAFC] border border-[#39a2df]"
      >
        <img
          className="w-7 object-contain"
          src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c53e.png"
          alt=""
        />
        <p>Continue With Twitter</p>
      </div>
    </>
  );
};

export default SignInCommon;
