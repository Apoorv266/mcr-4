import React, { useContext } from "react";
import {
  ShareSocialOutline,
  BookmarkOutline,
  ChatboxEllipsesOutline,
  CaretUpOutline,
  CaretDownOutline,
  Bookmark,
} from "react-ionicons";
import "../Styles/PostCard.css";
import PillsComponent from "./PillsComponent";
import { PostContext } from "../Context/PostContext";
import { Link } from "react-router-dom";

const PostCard = ({ item }) => {
  const { upVoteFunc, bookMarkFunc, downVoteFunc, } = useContext(PostContext)
  const currentDate = new Date();
  return (
    <div className="single-post-main">
      <div className="single-card-wrapper">
        <div className="utils-icons">
          <>
            <CaretUpOutline color={"#5348C6"} height="50px" width="50px" onClick={() => upVoteFunc(item.postId)} />
            <p>{item.upvotes - item?.downvotes}</p>

            <CaretDownOutline color={"#5348C6"} height="50px" width="50px" onClick={() => downVoteFunc(item.postId)} />
          </>
        </div>
        <div className="user-Details">
          <div className="user-post-details">
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
            <p style={{ color: "#434549" }}>Posted by:</p>
            <p style={{ color: "#564BC8" }}>{`@${item.name}`}</p>
            <p style={{ color: "#434549" }}>{Math.floor((currentDate.getTime() - new Date(item?.createdAt).getTime()) / (1000 * 60))} Mins</p>
          </div>

          <div className="post-data">
            <h2>{item?.post}</h2>
            <div className="pills">
              {item?.tags.map((item, index) => <PillsComponent key={index} item={item} />)}
            </div>
            <p>{item?.postDescription}</p>
          </div>
        </div>
      </div>
      <div className="post-icons">
        <Link to={`/post/${item?.postId}`}>
          <ChatboxEllipsesOutline color={"black"} height="30px" width="30px" />
        </Link>
        <ShareSocialOutline color={"black"} height="30px" width="30px" />

        {!item.isBookmarked ? <BookmarkOutline color={"black"} height="30px" width="30px" onClick={() => bookMarkFunc(item?.postId)} /> :
          <Bookmark
            color={"black"} height="30px" width="30px" onClick={() => bookMarkFunc(item?.postId)} />
        }
      </div>
    </div>
  );
};

export default PostCard;
