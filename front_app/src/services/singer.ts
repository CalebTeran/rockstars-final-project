import { setSingers } from "../features/musicSlice";
import { setLoading } from "../features/loaderSlice";
import { AppDispatch } from "../app/store";
import { Singer } from "../models/singer";

export const getSingers = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await fetch("http://3.218.67.164:9018/v1/singer");

    if (response.status !== 200) return "";

    const singers: Singer[] = await response.json();
    dispatch(setSingers(singers));
  } catch (err) {
    throw err;
  } finally {
    dispatch(setLoading(false));
  }
};
