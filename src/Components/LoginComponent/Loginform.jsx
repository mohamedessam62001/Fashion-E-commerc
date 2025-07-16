import { Field, Form, Formik } from "formik";
import React from "react";

export default function Loginform() {
  const initialValues = { email: "", password: "" };
  return (
    <div className="w-1/2  container h-[80dvh] max-h-[100%] max-w-[100%] flex flex-col items-center justify-center bg-[#ffffff] ">
      <Formik initialValues={initialValues}>
        <Form className="flex flex-col  items-center justify-center w-full h-[50dvh] gap-[1rem] bg-[#ffffff] ">
    <h1 className="text-3xl text-black ">Good to see you again.</h1>
    <p className="text-[1rem] text-black">Please log in to your account.</p>
          <Field
            type="email"
            name="email"
            className="input input-neutral text-[#4C4C4B] "
            placeholder="Enter You Email"
          />
          <Field
            type="password"
            name="password"
            className="input text-[#4C4C4B] "
            placeholder=" Enter You Password"
          />
          <div className="flex">
          <button className="btn btn-neutral ">LOG IN</button>
          </div>
        </Form>
      </Formik>
    </div>
  );
}
