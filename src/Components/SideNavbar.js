import React, { useContext } from "react";
import "../Styles/SideNavbar.css";
import { PostContext } from "../Context/PostContext";

const SideNavbar = () => {
  const { userData } = useContext(PostContext);
  return (
    <div className="sideNav-main">
      <div className="nav-item">
        <h2>Home</h2>
        <h2>Explore</h2>
        <h2>Bookmark</h2>
        <h2>Profile</h2>
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
