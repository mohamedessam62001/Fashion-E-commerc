import React from "react";
import Loginform from "../../Components/LoginComponent/Loginform";
import LoginDesing from "../../Components/LoginComponent/LoginDesing";

export default function LoginPage() {
  return (
    <div
      className={`
          w-full 
          h-[80dvh]
          container
          py-0.5
          mx-auto flex
          justify-center
          items-center max-[100%]`}
    >
      {/* <LoginDesing /> */}
      <Loginform />
    </div>
  );
}
