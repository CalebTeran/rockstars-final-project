import * as Yup from "yup";
import { store } from "../../../app/store";
import { fetchAuth } from "../../../services/auth";

export interface LoginDTO {
  password: string;
  username: string;
}

export const validationSchema: Yup.SchemaOf<LoginDTO> = Yup.object({
  username: Yup.string()
    .required("The field user is required"),
  password: Yup.string().required("Field password is required "),
});

export const initialValues: LoginDTO = {
  username: "",
  password: "",
};

export const loginUser =  (values: LoginDTO) => {
  const user: LoginDTO = {
    username: values.username,
    password: values.password,
  };
  store.dispatch(fetchAuth(user));
};
