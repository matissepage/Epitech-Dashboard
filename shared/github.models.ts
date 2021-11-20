export type GithubFollower = {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  html_url: string;
  type: string;
  site_admin: boolean;
};

export type GithubProfil = {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  html_url: string;
  type: string;
  site_admin: boolean;
  twitter_username?: string;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: string;
  created_at: Date;
  updated_at: Date;
  bio?: string;
}

export type GithubRepo = {
  id: number;
  node_id: string;
  name: string;
  full_name: string;
  private: boolean;
  owner: {
    login: string;
    avatar_url: string;
    html_url: string;
  };
  html_url: string;
  description: string;
  language: string;
  topics: string[];
  license: {
    key: string;
    name: string;
  };
  stargazers_count: number;
};
