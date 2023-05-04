import { atom } from "recoil";

export const tweetInputState = atom({
    key: 'tweetInputState',
    default: "",
});

export const tweetListState = atom({
    key: 'tweetListState',
    default: [],
});
