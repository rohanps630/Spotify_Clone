import { Action, State } from "./Types";

export const initialState: State = {
  user: null,
  token: null,
  playlists: {
    items: null
  },
  discoverWeekly: null,
  playing: false,
  item: null,
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user ?? null,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token ?? null,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists ?? {
          items: null
        },
      };
    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discoverWeekly: action.discoverWeekly ?? null,
      };
    default:
      return state;
  }
};

export default reducer;
