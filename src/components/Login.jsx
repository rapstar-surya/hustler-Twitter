import React from "react";
import styles from "./Login.module.css";
import { getUsers } from "../utils/localStorage";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FcGoogle } from "react-icons/fc";
import { BsApple } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  function handleSubmit(values, { setSubmitting, setErrors }) {
    const users = getUsers();
    const details = users.find(
      (user) => user.email === values.email && user.password === values.password
    );

    if (details) {
      const user = users.map((user) => {
        if (user.email === values.email) {
          user.isLogin = true;
        }
        return user;
      });
      localStorage.setItem("users", JSON.stringify(user));
      localStorage.setItem("isLogin", JSON.stringify(true));
      navigate("/home");
    } else {
      setErrors({
        email: "Invalid email or password",
        password: "Invalid email or password",
      });
    }
    setSubmitting(false);
  }

  return (
    <div className={styles.Logcontainer}>
      <div className={styles.formContainer}>
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={Yup.object().shape({
            email: Yup.string()
              .email("Invalid email address")
              .required("Email is required"),
            password: Yup.string()
              .required("Password is required")
              .matches(
                /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,20}$/,
                "Password should be 8 to 20 characters and include at least 1 number, 1 letter and 1 special character"
              ),
          })}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className={styles.formLog}>
              <BsTwitter style={{ color: "white" }} />

              <h2 className={styles.headSign}>Sign in to twitter</h2>

              <button className={styles.btn}>
                <FcGoogle />
                Sign in with Google
              </button>
              <button className={styles.btn}>
                <BsApple />
                Sign in with Apple
              </button>

              <span className={styles.hr} />

              <Field
                type="email"
                name="email"
                placeholder="Email"
                className={styles.inputlog}
              />
              <ErrorMessage
                name="email"
                component="span"
                className={styles.errMsg}
              />

              <Field
                type="password"
                name="password"
                placeholder="Password"
                className={styles.inputlog}
              />
              <ErrorMessage
                name="password"
                component="span"
                className={styles.errMsg}
              />

              <button
                className={styles.btn}
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Logging in..." : "Login"}
              </button>

              <button className={styles.btnd}>Forgot password?</button>
              <p className={styles.noAcc}>
                Don't have an account?
                <span
                  onClick={() => navigate("/register")}
                  className={styles.signup}
                >
                  Sign up
                </span>
              </p>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
