FROM node:14.18.1-alpine

WORKDIR /api

COPY ./package.json /api
# COPY ./../yarn.lock .

RUN yarn install

COPY ./ /api

EXPOSE 8080
CMD [ "yarn", "start" ]
