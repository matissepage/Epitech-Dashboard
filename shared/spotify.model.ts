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
