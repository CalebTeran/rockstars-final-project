import { Genre } from "./genre";
import { Singer } from "./singer";
import { Song } from "./song";

export interface Album {
  _id: string;
  name: string;
  type: string;
  virtual_price : string;
  physical_price: string;
  created_at: string;
  image: string;
  file: string;
  duration: string;
  stock: number;
  genres: string;
}
