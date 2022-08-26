import * as Yup from "yup";

export const initialLoginValues = {
  username: "",
  password: "",
};

export const loginValidation = Yup.object().shape({
  username: Yup.string().required("Email or Username is Required"),
  password: Yup.string().required("Password is Required"),
});

export const initialAssignValues = {
  name: "",
  description: "",
  contribution: "",
};

export const assignValidation = Yup.object().shape({
  name: Yup.string().required("Assignment name is Required"),
  description: Yup.string().required("Description is Required"),
  contribution: Yup.string().required("Contribution is Required"),
});
