import { Button, Box } from "@mui/material";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import { deleteAuth, tokenSelector } from "../../features/authSlice";
import { Styles } from "../../theme/types";

const LoginButton = () => {
  const token = useAppSelector(tokenSelector);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClickLogin = () => {
    if (token !== undefined) {
      dispatch(deleteAuth());
      navigate("/");
    } else {
      navigate("/login");
    }
  };

  const handleClickSignIn = () => {
    if (token !== undefined) {
      dispatch(deleteAuth());
      navigate("/");
    } else {
      navigate("/signin");
    }
  };

  const styles: Styles = {
    btnContainers: {
      display: "grid",
      gridTemplateColumns: "120px 120px",
      gridGap:"10px",
      position: "absolute",
      top: "10px",
      right: "30px",
      color:"#000000"
    },
    btnLogin: {
      backgroundColor: "#FCED22",
    },
    btnSignin: {
      backgroundColor: "#FCED22",
    },
  };

  return (
    <Box sx={styles.btnContainers}>
    <Button
      variant="contained"
      sx={styles.btnLogin}
      onClick={handleClickLogin}
      color={token !== undefined ? "error" : "success"}
    >
      {token !== undefined ? "Log out" : "Log in"}
    </Button>
    <Button
      variant="contained"
      sx={styles.btnSignin}
      onClick={handleClickSignIn}
      color={token !== undefined ? "error" : "success"}
    >
      {token !== undefined ? null: "Sign In"}
    </Button>
    </Box>
  );
};

export default LoginButton;