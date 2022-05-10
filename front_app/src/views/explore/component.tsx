import { useDispatch } from "react-redux";
import { useEffect } from "react";

import { Grid, Button, Avatar, Box, Typography } from "@mui/material";
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import { albumsSelector, singersSelector } from "../../features/musicSlice";
import { useAppSelector } from "../../app/hooks";
import { Styles } from "../../theme/types";
import { getSingers } from "../../services/singer";
import { getAlbums } from "../../services/album";
import AlbumCard from "../../components/cards/album/component";
import SingerCard from "../../components/cards/singer/component";

const Explore = () => {
  const dispatch = useDispatch();

  const singers = useAppSelector(singersSelector);
  const albums = useAppSelector(albumsSelector);

  useEffect(() => {
    dispatch(getSingers());
    dispatch(getAlbums());
  }, [dispatch]);

  const styles: Styles = {
    title: {
      textAlign:"center",
      fontWeight: "Bold",
      width: "500px",
      padding: "20px,10px",
    },
    subtitleInfo: {
      textAlign:"center",
      fontWeight: "600",
      padding: "10px 30px",
      color: "gray",
    },
    subtitle: {
      fontWeight: "600",
      padding: "10px 0",
      color: "gray",
    },
    albumsContainer: {
      width: "100%",
    },
    albumsList: {
      width: "100%",
      display: "flex",
      overflowX: "auto",
      gap: "60px",
      paddingBottom: "20px",
    },
    singerContainer: {
      width: "100%",
    },
    singerList: {
      width: "100%",
      display: "flex",
      overflowX: "auto",
      gap: "60px",
      paddingBottom: "20px",
    },
    infoContainer: {
      width: "100%",
      display: "flex",
      overflowX: "auto",
      gap: "30px",
      paddingLeft: "20px",
    },
    imageInfo: {
      margin:"auto",
      width: "18%",
      height: "90%",
    },
    musicBtn: {
      margin: "20px 15px",
      width: "85%",
      height: "25%",
    },
  };

  return (
    <>
      <Box sx={styles.infoContainer}>
      <Avatar alt="currentAlbum" src={require("../../assets/enroute.jpg")} sx={styles.imageInfo} />
      <Box>
      <Typography variant="h2" sx={styles.title}>
        My Author info.
      </Typography>
      <Typography variant="h6" sx={styles.subtitleInfo}>
        Albums authors sales: 321,399. ~ Reproduction quantity: 933,994.
      </Typography>
        <Box sx={styles.musicBtn}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={8}>              
              <Button sx={{width: "100%"}} variant="outlined" startIcon={<PlayCircleIcon />}>
                Play music
              </Button>
            </Grid>
            <Grid item xs={6} md={4}>
              <FavoriteIcon />
              <ShoppingCartIcon />          
            </Grid>
          </Grid>
        </Box>
      </Box>
        
      </Box>
      <Box sx={styles.albumsContainer}>
        <Typography variant="h5" sx={styles.subtitle}>
          Lastest albums.
        </Typography>
        <Box sx={styles.albumsList}>
          {albums.map((album) => (
            <AlbumCard
              {...album}
              key={`album-${album._id}`}
              duration={album.duration}
            />
          ))}
        </Box>
        <Box sx={styles.singersContainer}>
          <Typography variant="h5" sx={styles.subtitle}>
            Lastest authors added.
          </Typography>
          <Box sx={styles.singerList}>
            {singers.map((singer) => (
              <SingerCard {...singer} key={`singer-${singer._id}`} />
            ))}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Explore;
