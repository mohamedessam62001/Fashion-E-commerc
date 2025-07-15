import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import img from "../Slacksimgs/Logo/LogoSlacksl.svg"

export default function LandingPage() {
  const [toggle, setToggle] = useState(false);
  return (
    <header className="container mx-auto">
      <nav className="bg-white shadow dark:bg-gray-50">
        <div className="container flex items-center justify-between  p-6 mx-auto text-gray-600 capitalize dark:text-gray-300">
          <button className="btn btn-md block  text-white sm:hidden md:block lg:hidden " onClick={() => setToggle(!toggle)}>
            {toggle ? <MdClose /> : <GiHamburgerMenu className="hover:bg-amber-50 transition-all duration-200 " />}
          </button>
            <div><img src={img} className="w-[3rem] h-[3rem]"  />
            </div>
          <Navbar />
        </div>
      </nav>
    </header>
  );
}
