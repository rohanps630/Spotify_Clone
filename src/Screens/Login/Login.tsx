import React from "react";
import "./Login.css";
import { loginUrl } from "../../Service";
import { Spotify } from "../../assets";

export default function Login() {
  return (
    <div className="login">
      <img
        src={Spotify}
        alt="Spotify logo"
      />
      <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
    </div>
  );
}
