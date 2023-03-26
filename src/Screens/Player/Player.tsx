import React from "react";
import "./Player.css";
import { Sidebar, Body, Footer } from "../../Components";
import SpotifyWebApi from "spotify-web-api-js";

interface Props {
  spotify: SpotifyWebApi.SpotifyWebApiJs;
}

function Player({ spotify }: Props) {
  return (
    <div className="player">
      <div className="player__body">
        <Sidebar />
        <Body spotify={spotify} />
      </div>
      <Footer />
    </div>
  );
}

export default Player;
