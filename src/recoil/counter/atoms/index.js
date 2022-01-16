import { atom } from "recoil";
import COUNTER_KEY from "../keys";

const counterAtom = atom({
  key: COUNTER_KEY,
  default: 0,
});

export default counterAtom;
