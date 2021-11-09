FROM node:14.18.1-alpine as builder

ARG NODE_ENV
ARG BUILD_FLAG

WORKDIR /app/builder

COPY yarn.lock .
COPY workspace.json .
COPY tsconfig.base.json .
COPY package.json .
COPY nx.json .
COPY jest.config.js .
COPY jest.preset.js .
COPY babel.config.json .
COPY .prettierrc .
COPY .prettierignore .
COPY .gitignore .
COPY .eslintrc.json .
COPY .editorconfig .
COPY .dockerignore .
COPY tools .
COPY shared .
COPY libs .

RUN mkdir dist && mkdir dist/apps

RUN yarn install
