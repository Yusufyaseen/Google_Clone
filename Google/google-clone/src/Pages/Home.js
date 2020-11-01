import React, { useEffect, useState } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import AppsIcon from "@material-ui/icons/Apps";
import { Avatar } from "@material-ui/core";
import Search from "./Search";
function Home() {
  const [seed, setSeed] = useState(0);

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 50000));
  }, []);
  return (
    <div className="home">
      <div className="home__header">
        <div className="home__headerLeft">
          <a href={"https://about.google/"}>About</a>
          <a href={"https://store.google.com/regionpicker"}>Store</a>
        </div>
        <div className="home__headerRight">
          <Link to="/gmail">Gmail</Link>
          <a href={"https://www.google.com.eg/imghp?hl=ar&tab=wi&ogbl"}>
            Images
          </a>
          <a href="https://about.google/intl/ar/products/?tab=wh">
            <AppsIcon />
          </a>
          <Avatar
            className="ava"
            src={`https://avatars.dicebear.com/api/male/${seed}.svg`}
          />
        </div>
      </div>
      <div className="home__body">
        <img
          src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
          alt=""
        />
        <div className="home__inputContainer">
          <Search />
        </div>
      </div>
    </div>
  );
}

export default Home;
