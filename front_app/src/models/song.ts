import { Album } from "./album";
import { Singer } from "./singer";

export interface Song {
  _id: string;
  name: string;
  duration: string;
  image: string;
  isSingle:boolean;
  authors: Array<Singer>;
  file: string;
  stock: number;
  price: number;
}
