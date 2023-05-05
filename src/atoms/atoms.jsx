import { atom } from "recoil";

export const nameState = atom({
  key: "nameState",
  default: "",
});

export const emailState = atom({
  key: "emailState",
  default: "",
});

export const dateState = atom({
  key: "dateState",
  default: "",
});

export const mobileState = atom({
  key: "mobileState",
  default: "",
});

export const passwordState = atom({
  key: "passwordState",
  default: "",
});

export const nameErrorState = atom({
  key: "nameErrorState",
  default: "",
});

export const emailErrorState = atom({
  key: "emailErrorState",
  default: "",
});

export const mobileErrorState = atom({
  key: "mobileErrorState",
  default: "",
});

export const passErrorState = atom({
  key: "passErrorState",
  default: "",
});

export const registeredState = atom({
  key: "registeredState",
  default: false,
  
});

export const createState = atom({
  key: "createState",
  default: true
})

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
