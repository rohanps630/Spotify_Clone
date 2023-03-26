import React from "react";
import { Search } from "@mui/icons-material";
import "./Header.css";
import { useDataLayerValue } from "../../Context/DataLayer";
import { Avatar } from "@mui/material";
import SpotifyWebApi from "spotify-web-api-js";

interface Props {
  spotify: SpotifyWebApi.SpotifyWebApiJs;
}

function Header({ spotify }: Props) {
  const [{ user }, dispatch] = useDataLayerValue();

  return (
    <div className="header">
      <div className="header__left">
        <Search />
        <input placeholder="Search for Artists, Songs, or Albums" type="text" />
      </div>
      <div className="header__right">
      <Avatar src={user?.images?.[0]?.url} alt={user?.display_name} />
        <h4>{user?.display_name}</h4>
      </div>
    </div>
  );
}

export default Header;
