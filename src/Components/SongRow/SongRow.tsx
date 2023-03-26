import React from "react";
import { Track } from "../../Types";
import "./SongRow.css";

interface Props {
  track: Track;
}

function SongRow({ track }: Props) {
  return (
    <div className="songRow">
      <img src={track.album.images[0].url} alt="" className="songRow__album" />
      <div className="songRow__info">
        <h1>{track.name}</h1>
        <p>
          {track.artists.map((artist) => artist.name).join(", ")} -{" "}
          {track.album.name}
        </p>
      </div>
    </div>
  );
}

export default SongRow;
