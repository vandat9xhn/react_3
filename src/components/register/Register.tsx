import * as React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import "./Register.scss";

//
export interface RegisterProps {}

//
const schema = yup.object({
  first_name: yup.string().trim().required(),
  last_name: yup.string().trim().required(),
  email: yup.string().email().required(),
  password: yup.string().trim().required(),
});

const arr_label = [
  { name: "first_name", title: "First name" },
  { name: "last_name", title: "Last name" },
  { name: "email", title: "Email" },
  { name: "password", title: "Password" },
] as const;
type Label = typeof arr_label[number]["name"];
const defaultValues: { [label in Label]: string } = {
  first_name: "",
  last_name: "",
  email: "",
  password: "",
};

//
function Register({}: RegisterProps) {
  //
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues,
    resolver: yupResolver(schema),
  });

  //
  const onSubmit = () => {
    handleSubmit((data) => {
      console.log(data);
    })();
  };

  //
  return (
    <div className="Register sign">
      <div className="Register_contain sign_contain">
        <div></div>

        <div>
          {arr_label.map((item, ix) => (
            <div key={ix} className="sign_part">
              <div className="sign_label">{item.title}</div>

              <input
                className="sign_ip"
                type={item.name === "password" ? "password" : "text"}
                {...register(item.name)}
                placeholder={`Your ${item.title}`}
              />

              {errors[item.name] && (
                <div className="sign_error">{errors[item.name].message}</div>
              )}
            </div>
          ))}
        </div>

        <div>
          <button className="sign_submit" type="button" onClick={onSubmit}>
            Create Account
          </button>
        </div>
      </div>
    </div>
  );
}

export default Register;
