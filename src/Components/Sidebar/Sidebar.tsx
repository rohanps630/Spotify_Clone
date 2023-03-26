import React from "react";
import "./Sidebar.css";
import SidebarOption from "../SidebarOption/SidebarOption";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import { LibraryMusic } from "@mui/icons-material";
import { useDataLayerValue } from "../../Context/DataLayer";
import { Spotify } from "../../assets";

function Sidebar() {
  const [{ playlists }, dispatch] = useDataLayerValue();
  
  return (
    <div className="sidebar">
      <img
        className="sidebar__logo"
        src={Spotify}
        alt="Spotify logo"
      />

      <SidebarOption title="Home" Icon={HomeIcon} />
      <SidebarOption title="Search" Icon={SearchIcon} />
      <SidebarOption title="Your Library" Icon={LibraryMusic} />
      <br />
      <strong className="sidebar__title">PLAYLISTS</strong>
      <hr />
      {playlists?.items?.map((playlist) => (
        <SidebarOption key={playlist.id} title={playlist.name}/>
      ))}
    </div>
  );
}

export default Sidebar;
