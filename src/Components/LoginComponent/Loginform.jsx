import { Field, Form, Formik } from "formik";
import React from "react";

export default function Loginform() {
  const initialValues = { email: "", password: "" };
  return (
    <div className="w-full   container h-[80dvh]  flex flex-col items-center justify-center bg-[#ffffff] ">
      <Formik initialValues={initialValues}>
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
            <button  className="btns text-black btn-neutral w-[200px]  ">Login</button>
          </div>
        </Form>
      </Formik>
    </div>
  );
}
