import { atom } from "recoil";

export const tweetInputState = atom({
  key: "tweetInputState",
  default: "",
});

export const tweetListState = atom({
  key: "tweetListState",
  default: [],
});

export const popupState = atom({
  key: "popupState",
  default: false,
});

export const popupState1 = atom({
  key: "popupState1",
  default: false,
});

export const popupState2 = atom({
  key: "popupState2",
  default: false,
});

export const popupState3 = atom({
  key: "popupState3",
  default: false,
});
