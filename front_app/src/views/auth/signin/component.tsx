import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import { Formik } from "formik";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../../app/hooks";
import { tokenSelector } from "../../../features/authSlice";
import { initialValues, signinUser, validationSchema } from "./signin";
import './signin.css'

const Signin = () => {
  const navigate = useNavigate();
  const token = useAppSelector(tokenSelector);

  useEffect(() => {
    if (token !== undefined) navigate("/");
  }, [navigate, token]);

  return (
    <Box className="signinRoot">
    <Paper className="signinContainer" >
      <img alt="" src={require("../../../assets/enroute.jpg")} width="120px" height="120px"></img>
      <Formik
        initialValues={initialValues}
        onSubmit={signinUser}
        validationSchema={validationSchema}>
        {({ handleChange, handleSubmit, errors, values }) => (
          <form onSubmit={handleSubmit}>
            <Box className="signinForm">
              <Typography className="title" variant="h3">
                Welcome Rockstar
              </Typography>
              <Box className="inputsContainer">
                <TextField
                  error={Boolean(errors.userName)}
                  onChange={handleChange}
                  label="Username"
                  name="username"
                  helperText={errors.userName}
                />
                 <TextField
                  error={Boolean(errors.email)}
                  onChange={handleChange}
                  label="Email"
                  name="email"
                  type="email"
                  helperText={errors.email}
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
    <Paper className="imgSignin" >
      <img alt="" src={require("../../../assets/loginbg2.jpg")} width="100%" height="100%"></img>
    </Paper>
  </Box>
  );
};

export default Signin;
