import React, { useEffect, useState } from "react";
import middleFourth from "./MiddleFourthPost.module.css";

import { FaRegComment } from "react-icons/fa";
import { FaRetweet } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
import { MdOutlinePoll } from "react-icons/md";
import { FiShare } from "react-icons/fi";

export default function MiddleFourthPost() {
  const [list, setList] = useState([]);

  async function handleData() {
    try {
      const res = await fetch("/tweets.json");
      const data = await res.json();
      setList(data);
    } catch (error) {
      alert(error.message);
    }
  }

  useEffect(() => {
    handleData();
  }, []);

  function handleLike(id) {
    setList((prevTweets) =>
      prevTweets.map((tweet) =>
        tweet.id === id
          ? {
              ...tweet,
              likeCount: tweet.liked
                ? tweet.likeCount - 1
                : tweet.likeCount + 1,
              liked: !tweet.liked,
            }
          : tweet
      )
    );
  }

  return (
    <div>
      <>
        {list.map((ele, i) => (
          <div key={ele.id} className={middleFourth.mainDiv}>
            <div className={middleFourth.secondDiv}>
              <img
                src="https://randomuser.me/api/portraits/thumb/women/3.jpg"
                alt="profile-pic"
                className={middleFourth.aniImg}
              />
              <h4 style={{ marginTop: "0", marginLeft: "1rem" }}>
                {ele.tweetedBy.name}
              </h4>
              <span>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Twitter_Verified_Badge.svg/800px-Twitter_Verified_Badge.svg.png"
                  alt="blue-tick"
                  className={middleFourth.verified}
                />
              </span>
              <span style={{ marginLeft: "5px" }}>@userName</span>
              <span className={middleFourth.createdAtTime}>
                {" "}
                - {ele.createdAt}
              </span>
            </div>
            <div>
              <p className={middleFourth.para}>{ele.content}</p>
              <img
                src={ele.image}
                alt="post-image"
                className={middleFourth.postImage}
              />
            </div>
            <div className={middleFourth.reactIcon}>
              <span style={{ gap: "1rem", padding: "10px" }}>
                <FaRegComment title="Reply" /> {ele.commentCount}
              </span>
              <span style={{ gap: "1rem", padding: "10px" }}>
                <FaRetweet title="Retweet" /> {ele.reTweetsCount}
              </span>

              <span style={{ gap: "1rem", padding: "10px" }}>
                <AiOutlineHeart
                  title="Like"
                  onClick={() => handleLike(ele.id)}
                  className={ele.liked ? middleFourth.liked : ""}
                /> {ele.likeCount}
              </span>

              <span style={{ gap: "1rem", padding: "10px" }}>
                <MdOutlinePoll title="View" /> {ele.reTweetsCount}
              </span>
              <span style={{ gap: "1rem", padding: "10px" }}>
                <FiShare title="Share" /> {ele.commentCount}
              </span>
            </div>
          </div>
        ))}
      </>
    </div>
  );
}
