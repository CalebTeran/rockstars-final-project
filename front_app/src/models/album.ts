import { Genre } from "./genre";
import { Singer } from "./singer";

export interface Album {
  _id: string;
  name: string;
  duration: string;
  type: Array<string>;
  virtualPrice: number;
  physicalPrice: number;
  createdAt: Date;
  image: string;
  author: Singer;
  genre: Array<Genre>;
  stock: number;
}
