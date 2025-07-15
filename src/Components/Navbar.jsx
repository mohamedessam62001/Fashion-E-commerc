// import React, { useState } from "react";
import { RiUserLine } from "react-icons/ri";
import { Link } from "react-router-dom";

export default function Navbar() {
  const links =[
    { name: "Home", path: "/" },
    { name: "About", path: "/About" },
    { name: "Contact", path: "/Contact" },
    { name: "Blog", path: "/Blog" },
  ];

  return (
    <ul className=" hidden lg:block   max-w-max">
      {links.map((links) => (
        <Link
          key={links.path}
          to={links.path}
          className="text-gray-950 transition-colors duration-200 transform dark:text-gray-950 border-b-2 hover:border-b-cyan-800 mx-1.5 sm:mx-6"
        >
          {links.name}
        </Link>
      ))}
    </ul>
  );
}

