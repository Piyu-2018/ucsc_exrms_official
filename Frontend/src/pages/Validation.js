import * as Yup from "yup";

export const initialLoginValues = {
  username: "",
  password: "",
};

export const loginValidation = Yup.object().shape({
  username: Yup.string().required("Email or Username is Required"),
  password: Yup.string().required("Password is Required"),
});
