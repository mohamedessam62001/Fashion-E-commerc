import React from "react";
import  "./index.css";
import img from "/src/Slacksimgs/slidesImg/Frame5.png";
export default function LoginDesing() {
  return (
    <div className="w-1/2 h-[80dvh] max-h-[100%] max-w-[100%] flex justify-center ">
      <img id="img" src={img} className="object-cover" />
    </div>
  );
}
