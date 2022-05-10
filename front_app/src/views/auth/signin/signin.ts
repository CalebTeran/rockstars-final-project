import * as Yup from "yup";
import { store } from "../../../app/store";
import { fetchAuthSignin } from "../../../services/auth";
import { sha512 } from "js-sha512";

export interface SigninDTO {
  password: string;
  email: string;
  userName: string;
}

export const validationSchema: Yup.SchemaOf<SigninDTO> = Yup.object({
  email: Yup.string()
    .required("Email field is required")
    .email("Email field must be a valid email"),
  userName: Yup.string().required("User field is required"),
  password: Yup.string().required("Password field is required"),
});

export const initialValues: SigninDTO = {
  email: "",
  password: "",
  userName: "",
};

export const signinUser = (values: SigninDTO) => {
  const user: SigninDTO = {
    email: values.email,
    userName: values.userName,
    password: sha512(values.password),
  };
  store.dispatch(fetchAuthSignin(user));
};
