import { setAlbums } from "../features/musicSlice";
import { setLoading } from "../features/loaderSlice";
import { AppDispatch } from "../app/store";
import { Singer } from "../models/singer";

export const getAlbums = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await fetch("http://3.218.67.164:9018/v1/albums");

    if (response.status !== 200) return "";

    const albums: Singer[] = await response.json();
    dispatch(setAlbums(albums));
  } catch (err) {
    throw err;
  } finally {
    dispatch(setLoading(false));
  }
};
