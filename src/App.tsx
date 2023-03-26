import React, { useEffect, useState } from "react";
import { Login } from "./Screens/Login";
import "./App.css";
import { getTokenFromUrl } from "./Service/spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Screens/Player/Player";
import { useDataLayerValue } from "./Context/DataLayer";
import { Playlist, Playlists, User } from "./Types";

const spotify = new SpotifyWebApi();

function App() {
  const [{ user, token }, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;
    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });
      console.log("[token]", token);
      spotify.setAccessToken(_token);
      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user: user as unknown as User,
        });
      });
      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists as unknown as Playlists,
        });
      });
      spotify.getPlaylist("2IK4GimCzi9s4C0aU9ouWX").then((playlist) => {
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discoverWeekly: playlist as unknown as Playlist,
        });
      });
    }
  }, []);

  return (
    <div className="App">
      {token ? <Player spotify={spotify} /> : <Login />}
    </div>
  );
}

export default App;
