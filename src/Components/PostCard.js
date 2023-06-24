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

const PostCard = ({item}) => {
  return (
    <div className="single-post-main" key={item.item}>
      <div className="single-card-wrapper">
        <div className="utils-icons">
          <>
            <CaretUpOutline color={"#5348C6"} height="50px" width="50px" />
            <p>{item.upvotes - item.downvotes}</p>
            <CaretDownOutline color={"#5348C6"} height="50px" width="50px"/>
          </>
        </div>
        <div className="user-Details">
          <div className="user-post-details">
            <img
              src={item.picUrl}
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
            <p style={{ color: "#564BC8" }}>{`@${item.name}`}</p>
            <p style={{ color: "lightgray" }}>{item.createdAt.slice(0, 10)}</p>
          </div>

          <div className="post-data">
            <h2>{item.post}</h2>
            <div className="pills">
              {item.tags.map((item , index) => <PillsComponent key={index} item={item}/>)}
            </div>
            <p>{item.postDescription}</p>
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
