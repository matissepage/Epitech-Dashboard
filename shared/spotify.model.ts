export interface SpotifyArtist {
  external_urls: {
    spotify: string;
  };
  followers: {
    href: unknown;
    total: number;
  };
  genres: string[];
  href: string;
  id: string;
  images: {
    height: number;
    url: string;
    width: number;
  }[];
  name: string;
  popularity: number;
  type: 'track' | 'artist';
  uri: string;
};

export interface SpotifyTrack {
  album: {
    artists: {
      external_urls: {
        spotify: string;
      },
      href: string;
      id: string;
      uri: string;
    }[];
    available_markets: string[];
    external_urls: {
      spotify: string;
    };
    href: string;
    id: string;
    images: {
      height: number;
      url: string;
      width: number;
    }[];
    name: string;
    release_date: string;
    total_tracks: string;
    uri: string;
  };
  artists: {
    external_urls: {
      spotify: string;
    };
    id: string;
    name: string;
    uri: string;
  }[];
  duration_ms: Date;
  explicit: string;
  external_urls: {
    spotify: string;
  };
  name: string;
  popularity: number;
  track_number: number;
  uri: string;
};
