// Define constants for the authentication endpoint, redirect URI, and client ID.
const authEndpoint = process.env.REACT_APP_AuthEndpoint!;
const redirectUri = process.env.REACT_APP_RedirectUri!;
const clientId = process.env.REACT_APP_ClientId!;

// Define an array of scopes to request from the user during authentication.
const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
].join("%20");

// Define the URL for the Spotify login page.
const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes}&response_type=token&show_dialog=true`;

/**
 * Extracts the access token from the URL hash after the user has authenticated.
 * @returns {object} An object containing the access token and other authentication data.
 */
const getTokenFromUrl = (): { [key: string]: string } =>
  window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial: { [key: string]: string }, item: string) => {
      const parts: string[] = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);
      return initial;
    }, {});

export {
  authEndpoint,
  loginUrl,
  getTokenFromUrl,
}
