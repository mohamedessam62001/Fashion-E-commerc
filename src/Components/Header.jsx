import React, { useState } from "react";
import Navbar from "./Navbar";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import img from "../Slacksimgs/Logo/Logo.svg"
import { RiUserLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { PiShoppingCartLight} from "react-icons/pi";

export default function Header() {
  const [toggle, setToggle] = useState(false);
  return (
    <header className="container mx-auto py-1">
      <nav className="bg-white shadow dark:bg-gray-50">
        <div className="container flex  items-center justify-between  p-6 mx-auto text-gray-600 capitalize dark:text-gray-300">
          <button className="btn btn-md block  text-white sm:hidden md:block lg:hidden " onClick={() => setToggle(!toggle)}>
            {toggle ? <MdClose className="btnn" /> : <GiHamburgerMenu className="btnn  " />}
          </button>
            <img src={img} className=""  />

          <Navbar/>
          <div className="flex justify-center gap-2">
            <Link to={"/Login"} className='text-black text-2xl cursor-pointer '><RiUserLine/></Link>
            <Link to={"/cart"}><PiShoppingCartLight className="text-black text-2xl cursor-pointer " /></Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
