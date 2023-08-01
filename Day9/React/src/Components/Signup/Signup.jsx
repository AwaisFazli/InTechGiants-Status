import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { TextField, Button } from "@mui/material";
import "./Signup.css";
import axios from "axios";

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  password: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
});

const Signup = () => (
  <div className="Signupcontainer">
    <div className="Signupform-wrapper">
      <div className="Signupform">
        <h1>Signup</h1>
        <Formik
          initialValues={{
            firstName: "",
            password: "",
            confirmPassword: "",
            email: "",
          }}
          validationSchema={SignupSchema}
          onSubmit={(values) => {
            axios
              .post("http://localhost:8000/seller/signup/", values)
              .then((response) => {
                console.log("Response from server:", response.data);
              })
              .catch((error) => {
                console.error("Error:", error);
              });
          }}
        >
          {({ errors, touched, setFieldValue }) => (
            <Form>
              <TextField
                name="firstName"
                label="Name"
                variant="standard"
                error={Boolean(errors.firstName && touched.firstName)}
                helperText={
                  errors.firstName &&
                  touched.firstName &&
                  String(errors.firstName)
                }
                onChange={(event) => {
                  setFieldValue("firstName", event.target.value);
                }}
              />
              <TextField
                name="email"
                label="Email"
                variant="standard"
                error={Boolean(errors.email && touched.email)}
                helperText={
                  errors.email && touched.email && String(errors.email)
                }
                onChange={(event) => {
                  setFieldValue("email", event.target.value);
                }}
              />
              <TextField
                name="password"
                label="Password"
                variant="standard"
                type="password"
                error={Boolean(errors.password && touched.password)}
                helperText={
                  errors.password && touched.password && String(errors.password)
                }
                onChange={(event) => {
                  setFieldValue("password", event.target.value);
                }}
              />
              <TextField
                name="confirmPassword"
                label="Confirm Password"
                variant="standard"
                type="password"
                error={Boolean(
                  errors.confirmPassword && touched.confirmPassword
                )}
                helperText={
                  errors.confirmPassword &&
                  touched.confirmPassword &&
                  String(errors.confirmPassword)
                }
                onChange={(event) => {
                  setFieldValue("confirmPassword", event.target.value);
                }}
              />
              <br />
              <Button type="submit" variant="contained">
                Submit
              </Button>
            </Form>
          )}
        </Formik>
      </div>
      <div className="Signupimage-section">
        <div className="Signupimage-text"></div>
      </div>
    </div>
  </div>
);

export default Signup;
