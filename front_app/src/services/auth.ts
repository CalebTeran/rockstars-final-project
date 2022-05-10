import { AppDispatch } from "../app/store";
import { setAuth } from "../features/authSlice";
import { setLoading } from "../features/loaderSlice";
import { LoginDTO } from "../views/auth/login/login";
import { SigninDTO } from "../views/auth/signin/signin";

export const fetchAuth = (user: LoginDTO) => async (dispatch: AppDispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await fetch("http://3.218.67.164:9018/v1/token/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    if (response.status !== 200) return "";

    const userAuth = await response.json();
    userAuth.userName = user.username;
    dispatch(setAuth(userAuth));
  } catch (err) {
    throw err;
  } finally {
    dispatch(setLoading(false));
  }
};

export const fetchAuthSignin = (user: SigninDTO) => async (dispatch: AppDispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await fetch("http://3.218.67.164:9018/v1/users/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    if (response.status !== 200) return "";

    const userAuth = await response.json();
    dispatch(setAuth(userAuth));
  } catch (err) {
    throw err;
  } finally {
    dispatch(setLoading(false));
  }
};

export const fetchUserProfile = (user: SigninDTO) => async (dispatch: AppDispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await fetch("http://3.218.67.164:9018/v1/token/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    if (response.status !== 200) return "";

    const userAuth = await response.json();
    dispatch(setAuth(userAuth));
  } catch (err) {
    throw err;
  } finally {
    dispatch(setLoading(false));
  }
};