import { Album } from "./album";

export interface Singer {
  _id: string;
  stageName: string;
  name: string;
  albums: Array<Album>;
  image: string;
  nationality: string;
}
