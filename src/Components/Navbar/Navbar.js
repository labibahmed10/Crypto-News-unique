import React, { useState } from "react";
import { Link } from "react-router-dom";

import { MenuAlt2Icon, XIcon } from "@heroicons/react/solid";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="flex justify-between py-6 px-5 bg-[#fafafa] font-mono relative">
      <h1 className="md:text-xl text-normal">CRYPTO NEWS</h1>

      <div onClick={() => setOpen(!open)} className="md:hidden w-5 cursor-pointer">
        {open ? <XIcon></XIcon> : <MenuAlt2Icon></MenuAlt2Icon>}
      </div>

      <ul
        className={`flex flex-col md:flex-row md:block mx-auto md:mx-0 absolute md:static right-10 bg-slate-400 p-2 md:bg-transparent ${
          open ? "top-8" : "right-[-200px]"
        } duration-300 `}
      >
        <Link className="mr-3 p-2 md:text-xl" to="/home">
          Home
        </Link>
        <Link className="mr-3 p-2 md:text-xl" to="/coins">
          Coins
        </Link>
        <Link className="mr-3 p-2 md:text-xl" to="/about">
          About
        </Link>
        <Link className="p-2 md:text-xl" to="/contact">
          Contact
        </Link>
      </ul>
    </header>
  );
};

export default Navbar;
