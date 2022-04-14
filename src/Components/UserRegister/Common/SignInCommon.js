import React from "react";

const SignInCommon = () => {
  return (
    <div>
      <div className="flex cursor-pointer items-center justify-evenly py-3 mt-5 shadow-md bg-[#F8FAFC] border border-[#39a2df]">
        <img
          className="w-7 object-contain"
          src="https://developers.google.com/identity/images/g-logo.png"
          alt=""
        />
        <p>Sign In with Google</p>
      </div>
      <div className="flex cursor-pointer items-center justify-evenly py-3 mt-5 shadow-md bg-[#F8FAFC] border border-[#39a2df]">
        <img
          className="w-7 object-contain"
          src="https://e7.pngegg.com/pngimages/991/568/png-clipart-facebook-logo-computer-icons-facebook-logo-facebook-thumbnail.png"
          alt=""
        />
        <p>Sign In with Facebook</p>
      </div>
      <div className="flex cursor-pointer items-center justify-evenly py-3 mt-5 shadow-md bg-[#F8FAFC] border border-[#39a2df]">
        <img
          className="w-7 object-contain"
          src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
          alt=""
        />
        <p>Sign In with Google</p>
      </div>
    </div>
  );
};

export default SignInCommon;
