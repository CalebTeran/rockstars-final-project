import {
  Collapse,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import AlbumIcon from "@mui/icons-material/Album";
import { NavButton } from "./types";
import { useMemo, useState } from "react";
import { Styles } from "../../theme/types";
import { useNavigate } from "react-router-dom";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import MicExternalOnIcon from "@mui/icons-material/MicExternalOn";

const Menu = () => {
  const [adminOpen, setAdminOpen] = useState(false);
  const navigate = useNavigate();
  const toggleAdminMenu = () => {
    setAdminOpen((actualValue) => !actualValue);
  };

  
  
  const Buttons: NavButton[] = useMemo(
    () => [
      {
        text: "Enroute Music",
        icon: <img src={require("../../enroute.jpg") } alt="logo" width={25} height={25} />,
        onClick: () => navigate("/"),
      },
      {
        text: "Songs",
        icon: <MusicNoteIcon />,
        onClick: () => navigate("/songs"),
      },
      {
        text: "Albums",
        icon: <AlbumIcon />,
        onClick: () => navigate("/albums"),
      },
    ],
    [navigate]
  );

  const adminButtons: NavButton[] = useMemo(
    () => [
      {
        text: "Genre",
        icon: <LibraryMusicIcon />,
        onClick: () => navigate("/admin/genres"),
      },
      {
        text: "Songs",
        icon: <FormatListBulletedIcon />,
        onClick: () => navigate("/admin/songs"),
      },
      {
        text: "Singers",
        icon: <MicExternalOnIcon />,
        onClick: () => navigate("/admin/singers"),
      },
      {
        text: "Albums",
        icon: <LibraryBooksIcon />,
        onClick: () => navigate("/admin/albums"),
      },
    ],
    [navigate]
  );

  const styles: Styles = useMemo(
    () => ({
      drawerContainer: {
        width: "200px",
      },
      drawerItem: {
        width: "200px",
      },
    }),
    []
  );

  return (
    <Drawer anchor="left" variant="permanent" sx={styles.drawerContainer}>
      <List>
        {Buttons.map((button, index) => (
          <ListItem
            button
            key={`NavButton-${button.text}-${index}`}
            onClick={button.onClick}
            sx={styles.drawerItem}
          >
            <ListItemIcon>{button.icon}</ListItemIcon>
            <ListItemText primary={button.text} />
          </ListItem>
        ))}
        <ListItem button onClick={toggleAdminMenu} sx={styles.drawerItem}>
          <ListItemIcon>
            <AdminPanelSettingsIcon />
          </ListItemIcon>
          <ListItemText primary="Admin" />
          {adminOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={adminOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {adminButtons.map((button, index) => (
              <ListItem
                button
                key={`NavButton-${button.text}-${index}`}
                onClick={button.onClick}
                sx={styles.drawerItem}
              >
                <ListItemIcon>{button.icon}</ListItemIcon>
                <ListItemText primary={button.text} />
              </ListItem>
            ))}
          </List>
        </Collapse>
      </List>
    </Drawer>
  );
};

export default Menu;
