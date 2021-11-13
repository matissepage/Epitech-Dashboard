[![CI-api](https://github.com/EpitechPromo2024/B-DEV-500-MPL-5-1-dashboard-clement.bolin/actions/workflows/ci-api.yml/badge.svg)](https://github.com/EpitechPromo2024/B-DEV-500-MPL-5-1-dashboard-clement.bolin/actions/workflows/ci-api.yml)
[![CI-client](https://github.com/EpitechPromo2024/B-DEV-500-MPL-5-1-dashboard-clement.bolin/actions/workflows/ci-client.yml/badge.svg)](https://github.com/EpitechPromo2024/B-DEV-500-MPL-5-1-dashboard-clement.bolin/actions/workflows/ci-client.yml)
# Dashboard

## How to build app:

#### With Docker:

```sh
docker build -t dashboard:nx-base .
```

```sh
docker-compose up
```

#### Without Docker:

```sh
yarn install && yarn run app:start
