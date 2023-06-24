import React, { useContext } from "react";
import "../Styles/SideNavbar.css";
import { PostContext } from "../Context/PostContext";
import { HomeOutline, RocketOutline, BookmarkOutline,PersonOutline } from "react-ionicons";

const SideNavbar = () => {
  const { userData } = useContext(PostContext);
  return (
    <div className="sideNav-main">
      <div className="nav-item">
        <h2>
          <HomeOutline
            color={'#000000'}
            height="20px"
            width="20px"
          />Home</h2>
        <h2> <RocketOutline
            color={'#000000'}
            height="20px"
            width="20px"
          />Explore</h2>
        <h2> <BookmarkOutline
            color={'#000000'}
            height="20px"
            width="20px"
          />Bookmark</h2>
        <h2> <PersonOutline
            color={'#000000'}
            height="20px"
            width="20px"
          />Profile</h2>
      </div>
      <div className="user-login-main">
        <img
          src={userData.picUrl}
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

        <div className="user-login-Detail">
          <p>{userData.name}</p>
          <p>@{userData.username}</p>
        </div>
      </div>
    </div>
  );
};

export default SideNavbar;
