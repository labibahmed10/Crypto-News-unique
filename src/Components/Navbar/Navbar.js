import React, { useState } from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { MenuAlt2Icon, XIcon } from "@heroicons/react/solid";

function CustomLink({ children, to, ...props }) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <div>
      <Link style={{ color: match ? "#6dd6e4" : "black" }} to={to} {...props}>
        {children}
      </Link>
    </div>
  );
}

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 flex justify-between items-center py-5 px-5 bg-[#f5f5f5] font-mono relative">
      <h1 className="md:text-xl text-normal">
        <Link to="/">CRYPTO NEWS</Link>
      </h1>

      <div onClick={() => setOpen(!open)} className="md:hidden  w-5 cursor-pointer">
        {open ? <XIcon></XIcon> : <MenuAlt2Icon></MenuAlt2Icon>}
      </div>

      <div
        className={`flex flex-col md:flex-row  md:mx-0 absolute md:static md:right-0 right-4 bg-slate-400 p-3 md:bg-transparent duration-500 ${
          open ? "top-11" : "top-[-400px]"
        }  `}
      >
        <CustomLink className="mr-3 p-3 md:text-xl text-lg" to="/home">
          Home
        </CustomLink>
        <CustomLink className="mr-3 p-3 md:text-xl text-lg" to="/coins">
          Coins
        </CustomLink>
        <CustomLink className="mr-3 p-3 md:text-xl text-lg" to="/about">
          About
        </CustomLink>
        <CustomLink className="p-3 md:text-xl text-lg" to="/contact">
          Contact
        </CustomLink>
        <CustomLink className="p-3 md:text-xl text-lg" to="/login">
          Login
        </CustomLink>
      </div>
    </header>
  );
};

export default Navbar;
