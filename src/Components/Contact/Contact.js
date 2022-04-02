import React from "react";
import { Link, Outlet } from "react-router-dom";

const Contact = () => {
  return (
    <section className="px-4 pt-20 pb-24 mx-auto max-w-7xl md:px-2 h-[66.2vh]">
      <div className="flex flex-col justify-center items-center">
        <h1 className=" font-mono text-xl text-center md:text-3xl ">Currently We have now two offices,</h1>

        <div className="flex justify-center items-center">
          <Link to="BdAddress" className="  py-1 px-3 text-white mt-3 mx-1 bg-cyan-500 w-auto sm:mb-0">
            BD Address
          </Link>
          <Link to="UkAddress" className="  py-1 px-3 text-white mt-3 mx-1 bg-cyan-500 w-auto sm:mb-0">
            UK Address
          </Link>
        </div>
      </div>

      <div className="md:pt-52 pt-20">
        <Outlet></Outlet>
      </div>
    </section>
  );
};

export default Contact;
