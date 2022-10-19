import * as React from "react";
import { useFormik } from "formik";
import * as yup from "yup";

import "./login.scss";

//
export interface loginProps {}

//
const schema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().trim().required(),
});

const arr_label = [
  { name: "email", title: "Email" },
  { name: "password", title: "Password" },
] as const;
type Label = typeof arr_label[number]["name"];
const initialValues: { [label in Label]: string } = {
  email: "",
  password: "",
};

//
function login({}: loginProps) {
  //
  const { handleSubmit, getFieldProps, errors } = useFormik({
    initialValues,
    validationSchema: schema,
    onSubmit: (data) => console.log(data),
  });

  //
  const onSubmit = () => {
    handleSubmit();
  };

  //
  return (
    <div className="login sign">
      <div className="login_contain sign_contain">
        <div></div>

        <div>
          {arr_label.map((item, ix) => (
            <div key={ix} className="sign_part">
              <div className="sign_label">{item.title}</div>

              <input
                className="sign_ip"
                type={item.name === "password" ? "password" : "text"}
                {...getFieldProps(item.name)}
                placeholder={`Your ${item.title}`}
              />

              {errors[item.name] && (
                <div className="sign_error">{errors[item.name]}</div>
              )}
            </div>
          ))}
        </div>

        <div>
          <button className="sign_submit" type="button" onClick={onSubmit}>
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
}

export default login;
