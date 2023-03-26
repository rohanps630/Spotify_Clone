import React from "react";
import "./Body.css";
import Header from "../Header/Header";
import { useDataLayerValue } from "../../Context/DataLayer";
import { PlayCircleFilled, Favorite, MoreHoriz } from "@mui/icons-material";
import SongRow from "../SongRow/SongRow";
import SpotifyWebApi from "spotify-web-api-js";

interface Props {
  spotify: SpotifyWebApi.SpotifyWebApiJs;
}

function Body({ spotify }: Props) {
  const [{ discoverWeekly }, dispatch] = useDataLayerValue();

  return (
    <div className="body">
      <Header spotify={spotify} />
      <div className="body__info">
        <img src={discoverWeekly?.images?.[0]?.url} alt="" />
        <div className="body__infoText">
          <strong>PLAYLIST</strong>
          <h2>Discover Weekly</h2>
          <p>{discoverWeekly?.description}</p>
        </div>
      </div>
      <div className="body__songs">
        <div className="body__icons">
          <PlayCircleFilled className="body__shuffle" />
          <Favorite fontSize="large" />
          <MoreHoriz />
        </div>
        {discoverWeekly?.tracks?.items?.map((item) => (
          <SongRow key={item.track.id} track={item.track} />
        ))}
      </div>
    </div>
  );
}

export default Body;
