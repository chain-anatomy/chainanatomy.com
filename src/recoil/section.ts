import { atom } from "recoil";

export const sectionAtom = atom<number>({
  key: "section",
  default: 0,
});
