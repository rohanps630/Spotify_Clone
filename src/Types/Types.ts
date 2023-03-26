export interface Artist {
  id: string;
  href: string;
  name: string;
  type: string;
}

export interface Track {
  id: string;
  name: string;
  album: {
    id: string;
    name: string;
    href: string;
    release_date: string;
    images: Image[]
  };
  artists: Artist[];
}

export interface Item {
  added_at: string;
  video_thumbnail: {url: string | null};
  track: Track;
}

export interface Image {
  height: string | null;
  width: string | null;
  url: string | undefined;
}

export interface User {
  display_name: string;
  email: string;
  images?: Image[];
}

export interface Playlist {
  id: string;
  name: string;
  description: string;
  images?: Image[];
  tracks?: { 
    items: Item[];
    total: number | null;
  };
}

export interface Playlists {
  items: Playlist[] | null;
}

export interface State {
  user: User | null;
  token: string | null;
  playlists: Playlists;
  discoverWeekly: Playlist | null;
  playing: boolean;
  item: Track | null;
}

export interface Action {
  type: string;
  user?: User | null;
  token?: string;
  playlists?: Playlists;
  discoverWeekly?: Playlist | null;
}
