# Oauth2

For all authentication providers you want to use, you have to fill ```.env``` in ```apps/api/```.

**.env**
```sh
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
GOOGLE_CALLBACK_URL=http://localhost:3000/auth/redirect
GITHUB_CLIENT_ID=
GITHUB_CLIENT_SECRET=
GITHUB_CALLBACK_URL=http://localhost:3000/auth/github/redirect
SPOTIFY_CLIENT_ID=
SPOTIFY_CLIENT_SECRET=
SPOTIFY_CALLBACK_URL=http://localhost:3000/auth/spotify/redirect
```

[Google auth](https://console.cloud.google.com/apis/dashboard)
[Github auth](https://github.com/settings/applications/)
[Spotify auth](https://developer.spotify.com/dashboard/applications/)
