import { Album } from "./album";
import { Payment } from "./payment";
import { Song } from "./song";

export interface Order {
    _id: string;
    total: string;
    subtotal: string;
    createdAt: string;
    updatedAt: string;
    needShipment: boolean;
    albums: Array<Album>;
    albumsId: Array<Album>;
    songsId: Array<Song>;
    payment: Payment;
    userId: string;
  }
  