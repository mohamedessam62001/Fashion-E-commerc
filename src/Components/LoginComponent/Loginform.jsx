import { Field, Form, Formik } from "formik";
import React from "react";

export default function Loginform() {
  const initialValues = { email: "", password: "" };
  return (
    <div className="w-1/2 h-[80dvh] max-h-[100%] max-w-[100%] bg-amber-900">
      <Formik initialValues={initialValues}>
        <Form className="">
          <Field
            type="email"
            name="email"
            className="input text-[#808080] "
            placeholder="Sales ID number"
          />
          <Field
            type="password"
            name="password"
            className="input text-[#808080] "
            placeholder="Sales ID number"
          />
        </Form>
      </Formik>
    </div>
  );
}
