import React from "react";
import MiddleThird from "./MiddleThirdPost.module.css";
import { useRecoilValue } from "recoil";
import { tweetListState } from "../atoms/atoms";

import {FaRegComment} from 'react-icons/fa'
import {FaRetweet} from 'react-icons/fa'
import {AiOutlineHeart} from 'react-icons/ai'
import {MdOutlinePoll} from 'react-icons/md'
import {FiShare} from 'react-icons/fi'

export default function MiddleThirdPost() {
  const tweetPost = useRecoilValue(tweetListState)

  return (
    <>
      {tweetPost.map((ele, i)=>(
        <div key={i} className={MiddleThird.mainDiv}>
        <div className={MiddleThird.secondDiv}>
          <img
            src="https://pbs.twimg.com/profile_images/1497864299/ani_mic_logo_400x400.jpg"
            alt="ANI"
            className={MiddleThird.aniImg}
          />
          <h4 style={{ marginTop: "0", marginLeft: "1rem" }}>ANI</h4>
          <span>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Twitter_Verified_Badge.svg/800px-Twitter_Verified_Badge.svg.png"
              alt="blue-tick"
              className={MiddleThird.verified}
            />
          </span>
          <span style={{ marginLeft: "5px" }}>@ANI</span>
          <span style={{ marginLeft: "5px" }}> - 1 minutes ago</span>
        </div>
        <div>
          <p style={{marginLeft:'6rem', fontSize:'1rem'}}>
            {ele}
          </p>
        </div>
        <div className={MiddleThird.reactIcon}>
          <span style={{ gap: "1rem", padding: "10px" }}><FaRegComment/></span>
          <span style={{ gap: "1rem", padding: "10px" }}><FaRetweet/></span>
          <span style={{ gap: "1rem", padding: "10px" }}><AiOutlineHeart/></span>
          <span style={{ gap: "1rem", padding: "10px" }}><MdOutlinePoll/></span>
          <span style={{ gap: "1rem", padding: "10px" }}><FiShare/></span>
        </div>
      </div>
      ))}
    </>
  );
}





