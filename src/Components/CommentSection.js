import React from "react";
import "../Styles/Comment.css";
import { HeartOutline, ChatboxEllipsesOutline, ShareSocialOutline } from "react-ionicons";

const CommentSection = ({ item, username }) => {
  const currentDate = new Date();
  return (
    <>
      <div className="comment-head-main">
        <img
          src={item?.picUrl}
          alt=""
          srcSet=""
          width={"50px"}
          height={"50px"}
          style={{
            borderRadius: "50%",
            backgroundSize: "cover",
            objectFit: "cover",
          }}
        />
        <div className="comment-user-detail">
          <div className="user-head">
            <p>Posted by:</p>

            <p style={{ color: "#564BC8" }}>{`@${item?.username}`}</p>

            <p>
              {Math.floor(
                (currentDate.getTime() - new Date(item?.createdAt).getTime()) /
                (1000 * 60)
              )}{" "}
              Mins
            </p>
          </div>
          <div className="user-head">
            <p>Replying To:</p>

            <p style={{ color: "#564BC8" }}>{`@${username}`}</p>
          </div>
          <p className="comment">{item.comment}</p>
        </div>
      </div>
      <div className="post-icons">

        <HeartOutline color={"black"} height="30px" width="30px" />
        <ChatboxEllipsesOutline color={"black"} height="30px" width="30px" />

        <ShareSocialOutline color={"black"} height="30px" width="30px" />


      </div>
    </>
  );
};

export default CommentSection;
