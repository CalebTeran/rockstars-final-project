import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import { Formik } from "formik";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../../app/hooks";
import { tokenSelector } from "../../../features/authSlice";
import { initialValues, loginUser, validationSchema } from "./login";
import './login.css'

const Login = () => {
  const navigate = useNavigate();
  const token = useAppSelector(tokenSelector);
  console.log("token",token)
  

  useEffect(() => {
    if (token !== undefined) navigate("/");
  }, [navigate, token]);
  console.log("Token>>", token)
  return (
    <Box className="loginRoot">
      <Paper className="imgLogin" >
        <img alt="" src={require("../../../assets/loginbg3.jpg")} width="100%" height="100%"></img>
      </Paper>
      <Paper className="loginContainer" >
        <img alt="" src={require("../../../assets/enroute.jpg")} width="120px" height="120px"></img>
        <Formik
          initialValues={initialValues}
          onSubmit={loginUser}
          validationSchema={validationSchema}>
          {({ handleChange, handleSubmit, errors, values }) => (
            <form onSubmit={handleSubmit}>
              <Box className="loginForm">
                <Typography className="title" variant="h3">
                  Welcome Rockstar
                </Typography>
                <Box className="inputsContainer">
                  <TextField
                    error={Boolean(errors.username)}
                    onChange={handleChange}
                    label="Username"
                    name="username"
                    helperText={errors.username}
                  />
                  <TextField
                    error={Boolean(errors.password)}
                    onChange={handleChange}
                    label="Password"
                    name="password"
                    type="password"
                    helperText={errors.password}
                  />
                  <Box>
                    <Button variant="contained" style={{backgroundColor:"#FCED22", color:"#000", marginTop:"10px"}} type="submit">
                      Log in !
                    </Button>
                  </Box>
                </Box>
              </Box>
            </form>
          )}
        </Formik>
      </Paper>
    </Box>
  );
};

export default Login;
