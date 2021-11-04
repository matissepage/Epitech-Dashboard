FROM node:14.18.1-alpine

WORKDIR /client


COPY ./package*.json ./
# COPY ./../yarn.lock .

RUN yarn install

COPY ./ .

EXPOSE 3000
CMD [ "yarn", "start" ]
