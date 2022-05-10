import "./App.css";

import { useEffect, useMemo } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { Box } from "@mui/system";

import { useAppSelector } from "./app/hooks";
import { useAdmin } from "./hooks/admin";

import { tokenSelector } from "./features/authSlice";

import AdminSong from "./views/admin/song/component";
import AdminAlbum from "./views/admin/album/component";
import AdminSinger from "./views/admin/singer/component";
import AdminGenre from "./views/admin/genre/component";
import Explore from "./views/explore/component";
import Albums from "./views/albums/component";
import Songs from "./views/songs/component";
import Login from "./views/auth/login/component";
import Signin from "./views/auth/signin/component";

import { Styles } from "./theme/types";
import LoginButton from "./components/loginBtn/component";
import Menu from "./components/menu/menu";

const App = () => {  
  const token = useAppSelector(tokenSelector);
  const location = useLocation();
  const navigate = useNavigate();
  const { isAdmin } = useAdmin();

  
  useEffect(() => {
    const publicPaths = ["/login","/signin", "/", "/albums", "/songs"];
    const publicPath = publicPaths.some((path) => path === location.pathname);
    if (token === undefined && !publicPath) navigate("/");

    if (!isAdmin && !publicPath) navigate("/");
  }, [location, navigate, token, isAdmin]);

  const haveBar = useMemo(() => location.pathname !== "/login", [location]);
  const styles: Styles = {
    root: {
      display: "grid",
      height: "100%",
      gridTemplateColumns: haveBar ? "200px auto" : "auto",
    },
    container: {
      display: "flex",
      flexDirection: "column",
      padding: "40px",
      overflow: "hidden",
    },
  };
  return (
    <Box sx={styles.root}>
    {haveBar && <Menu />}
    <Box sx={styles.container}>
      {haveBar && <LoginButton />}
      <Routes>
        <Route path="/" element={<Explore />} />
        <Route path="/albums" element={<Albums />} />
        <Route path="/songs" element={<Songs />} />
        <Route path="/admin/albums" element={<AdminAlbum />} />
        <Route path="/admin/songs" element={<AdminSong />} />
        <Route path="/admin/singers" element={<AdminSinger />} />
        <Route path="/admin/genres" element={<AdminGenre />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </Box>
  </Box>
  );
};

export default App;
