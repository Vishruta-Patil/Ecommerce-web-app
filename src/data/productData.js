import { v4 as uuidv4 } from "uuid";

import shoe from "assets/shoe.jpg";
import shoe_1 from "assets/shoe_1.jpg";
import shoe_2 from "assets/shoe_2.jpg";
import shoe_3 from "assets/shoe_3.jpg";
import shoe_4 from "assets/shoe_4.jpg";
import shoe_5 from "assets/shoe_5.jpg";

export const ProductData = [
  {
    id: uuidv4(),
    name: "KSL 01",
    price: 2000,
    img: shoe_1,
    template: 2,
    type: "sneakers",
  },
  {
    id: uuidv4(),
    name: "KSW 01",
    price: 1999,
    img: shoe_3,
    template: 3,
    type: "sneakers",
  },
  {
    id: uuidv4(),
    name: "Royal S 01",
    price: 6000,
    img: shoe_4,
    template: 3,
    type: "loafers",
  },
  {
    id: uuidv4(),
    name: "KSL 01",
    price: 2000,
    img: shoe_2,
    template: 4,
    type: "sneakers",
  },
  {
    id: uuidv4(),
    name: "KSW 01",
    price: 7500,
    img: shoe,
    template: 2,
    type: "sneakers",
  },
  {
    id: uuidv4(),
    name: "Royal S 01",
    price: 5000,
    img: shoe_5,
    template: 2,
    type: "loafers",
  },
];
