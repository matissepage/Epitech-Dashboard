FROM node:14.18.1-alpine

ARG BUILD_CONTEXT_DIR
ARG WORKDIR_ARG
ARG PORT_ARG
ARG TYPE

WORKDIR /${WORKDIR_ARG}

# Cache the dependencies
COPY yarn.lock .
COPY ./${BUILD_CONTEXT_DIR}/package.json .

RUN yarn install
RUN if [ "${TYPE}" = "react" ]; then yarn global add react-scripts; fi
RUN if [ "${TYPE}" = "nest" ]; then yarn global add @nestjs/cli; fi

COPY ./${BUILD_CONTEXT_DIR}/ .

EXPOSE ${PORT_ARG}

CMD [ "yarn", "start" ]
