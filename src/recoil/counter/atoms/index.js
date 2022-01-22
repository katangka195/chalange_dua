import { atom } from "recoil";
import { HARGA_KEY, COUNTER_KEY, JUMLAH_KEY } from "../keys";

const counterAtom = atom({
  key: COUNTER_KEY,
  default: 0,
});

const Harga = atom({
  key: HARGA_KEY,
  default: 125.0,
});

const Jumlah = atom({
  key: JUMLAH_KEY,
  default: [],
});

const Logic = atom({
  key: JUMLAH_KEY,
  default: false,
});

const List = atom({
  key: "yas",
  default: {
    judul: "sneaker company",
    title: "Fall Limited Edition sneaker",
    nilai: 12,
  },
});

export default counterAtom;
export { Harga };
export { Jumlah };
export { Logic };
export { List };
