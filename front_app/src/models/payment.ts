export interface Payment {
    _id: string;
    status: Array<string>;
    paymentMethod: Array<string>;
    createdAt: Date;
  }