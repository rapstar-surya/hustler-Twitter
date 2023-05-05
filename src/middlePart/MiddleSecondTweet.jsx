import React from "react";
import MiddleSecond from "./MiddleSecondTweet.module.css";
import { BsImage } from "react-icons/bs";
import { AiOutlineFileGif } from "react-icons/ai";
import { FaPollH } from "react-icons/fa";
import { BsEmojiSmile } from "react-icons/bs";
import { AiOutlineSchedule } from "react-icons/ai";
import { ImLocation } from "react-icons/im";
import { useRecoilState } from "recoil";

import { tweetInputState, tweetListState } from "../atoms/atoms";

export default function MiddleSecondTweet() {
  const [input, setInput] = useRecoilState(tweetInputState);
  const [list, setList] = useRecoilState(tweetListState);

  const handleTweet = () =>{
    if (input.trim() !== '') {
      const newList = [input, ...list]
      setList(newList)
      setInput('')
    }
  }

  return (
    <div className={MiddleSecond.middleMainDiv}>
      <div className={MiddleSecond.firstMiddleDiv}>
        <img
          src="https://randomuser.me/api/portraits/thumb/men/9.jpg"
          alt="profileImage"
          className={MiddleSecond.MiddleProfileImg}
        />
        <input
          value={input} onChange={(e)=>setInput(e.target.value)}
          placeholder="Whats happening?"
          className={MiddleSecond.MiddleTextarea}
        />
      </div>

      <div style={{ display: "flex" }}>
        <div className={MiddleSecond.reactIcon}>
          <div style={{ gap: "1rem", padding: "10px" }}>
            <BsImage title="Media"/>
          </div>
          <div style={{ gap: "1rem", padding: "10px" }}>
            <AiOutlineFileGif title="GIF"/>
          </div>
          <div style={{ gap: "1rem", padding: "10px" }}>
            <FaPollH title="Poll"/>
          </div>
          <div style={{ gap: "1rem", padding: "10px" }}>
            <BsEmojiSmile title="Emoji"/>
          </div>
          <div style={{ gap: "1rem", padding: "10px" }}>
            <AiOutlineSchedule title="Schedule"/>
          </div>
          <div style={{ gap: "1rem", padding: "10px" }}>
            <ImLocation title="Location"/>
          </div>
        </div>
        <span className={MiddleSecond.tweetBtn}>
          <button onClick={handleTweet} className={MiddleSecond.btn}>
            Tweet
          </button>
        </span>
      </div>
    </div>
  );
}
