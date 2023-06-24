import React from "react";
import {
  ShareSocialOutline,
  BookmarkOutline,
  ChatboxEllipsesOutline,
  CaretUpOutline,
  CaretDownOutline,
} from "react-ionicons";
import "../Styles/PostCard.css";
import PillsComponent from "./PillsComponent";

const PostCard = () => {
  return (
    <div className="single-post-main">
      <div className="single-card-wrapper">
        <div className="utils-icons">
          <>
            <CaretUpOutline color={"#000000"} height="50px" width="50px" />
            <p>3241</p>
            <CaretDownOutline color={"#000000"} height="50px" width="50px" />
          </>
        </div>
        <div className="user-Details">
          <div className="user-post-details">
            <img
              src={"http://bit.ly/42Zm7tM"}
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
            <p style={{ color: "lightgray" }}>Posted by:</p>
            <p style={{ color: "#564BC8" }}>@tanaypratap</p>
          </div>

          <div className="post-data">
            <h1>Join invact for MBA</h1>
            <div className="pills">
              <PillsComponent />
              <PillsComponent />
              <PillsComponent />
              <PillsComponent />
            </div>
            <p>asdasdddddd</p>
          </div>
        </div>
      </div>
      <div className="post-icons">
        <ChatboxEllipsesOutline color={"black"} height="30px" width="30px" />

        <ShareSocialOutline color={"black"} height="30px" width="30px" />

        <BookmarkOutline color={"black"} height="30px" width="30px" />
      </div>
    </div>
  );
};

export default PostCard;
