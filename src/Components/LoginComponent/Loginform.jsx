import axios from "axios";
import { Field, Form, Formik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Loginform() {
  const Navigate = useNavigate()
  const initialValues = { email: "", password: "" };
  const handleRegister = (values) => {
    let domain = "http://localhost:1337";
    let endPoint = "/api/auth/local";
    let url = domain + endPoint;
    axios.post(url,{
      // username:"mohamed",
       identifier:values.email,
      password:values.password,
    }).then((res)=>{
      console.log(res.data);
      // Navigate("/")
    })

  };

  return (
    <div className="w-full   container h-[80dvh]  flex flex-col items-center justify-center  ">
      <Formik initialValues={initialValues} onSubmit={handleRegister}>
        <Form className="flex flex-col  items-center justify-center h-[80%] w-[40%] max-sm:h-[80%] container max-sm:w-[90%]  max-md:h-[80%]  max-md:w-[100%]  max-lg:h-[80%]  max-lg:w-[80%] gap-[1rem] bg-[#c2c2c2] rounded-2xl ">
          <h1 className="text-3xl text-black ">Good to see you again.</h1>
          <p className="text-[1rem] text-black">
            Please log in to your account.
          </p>
          <Field
            type="email"
            name="email"
            className="input input-neutral text-[#4C4C4B] "
            placeholder="Enter You Email"
          />
          <Field
            type="password"
            name="password"
            className="input input-neutral text-[#4C4C4B] "
            placeholder=" Enter You Password"
          />
          <div className="flex">
            <button type="Submit" onClick={()=>{Navigate("/")}} className="btns text-black btn-neutral w-[200px]  ">
              Login
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
}
