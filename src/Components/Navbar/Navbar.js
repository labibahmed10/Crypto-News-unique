import React, { useState } from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { MenuAlt2Icon, XIcon } from "@heroicons/react/solid";

function CustomLink({ children, to, ...props }) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <div>
      <Link style={{ color: match ? "#53B8BB" : "black" }} to={to} {...props}>
        {children}
      </Link>
    </div>
  );
}

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 flex justify-between items-center py-5 px-5 bg-[#fafafa] font-mono relative">
      <h1 className="md:text-xl text-normal">
        <Link to="/">CRYPTO NEWS</Link>
      </h1>

      <div onClick={() => setOpen(!open)} className="md:hidden  w-5 cursor-pointer">
        {open ? <XIcon></XIcon> : <MenuAlt2Icon></MenuAlt2Icon>}
      </div>

      <div
        className={`flex flex-col md:flex-row  md:mx-0 absolute md:static md:right-0 right-10 bg-slate-400 p-3 md:bg-transparent duration-500 ${
          open ? "top-8" : "right-[-200px]"
        }  `}
      >
        <CustomLink className="mr-3 p-3 md:text-xl" to="/home">
          Home
        </CustomLink>
        <CustomLink className="mr-3 p-3 md:text-xl" to="/coins">
          Coins
        </CustomLink>
        <CustomLink className="mr-3 p-3 md:text-xl" to="/about">
          About
        </CustomLink>
        <CustomLink className="p-3 md:text-xl" to="/contact">
          Contact
        </CustomLink>
      </div>
    </header>
  );
};

export default Navbar;
