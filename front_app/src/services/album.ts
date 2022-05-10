import { setAlbums } from "../features/musicSlice";
import { setLoading } from "../features/loaderSlice";
import { AppDispatch } from "../app/store";
import { Singer } from "../models/singer";

export const getAlbums = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await fetch('');
    //`${enviroment}/albums`
    if (response.status !== 200) return "";

    const albums: any = await response.json();
    console.log(albums.results);
    dispatch(setAlbums(albums));
  } catch (err) {
    throw err;
  } finally {
    dispatch(setLoading(false));
  }
};
