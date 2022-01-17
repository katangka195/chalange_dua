import { atom } from "recoil";
import { HARGA_KEY, COUNTER_KEY } from "../keys";

const counterAtom = atom({
  key: COUNTER_KEY,
  default: 0,
});

const Harga = atom({
  key: HARGA_KEY,
  default: 125.0,
});

export default counterAtom;
export { Harga };
