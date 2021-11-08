# FROM dashboard:nx-base AS builder

# ARG NODE_ENV
# # ARG BUILD_FLAG

# WORKDIR /app/builder
# COPY . .
# # RUN npx nx serve client

# EXPOSE 3000

# CMD [ "npx", "nx", "serve", "client" ]

FROM dashboard:nx-base

ARG NODE_ENV
# ARG BUILD_FLAG

WORKDIR /app/builder
COPY . .
# RUN npx nx serve client

EXPOSE 3000

CMD [ "npx", "nx", "serve", "client" ]

# FROM nginx:1.19.2

# WORKDIR /usr/share/nginx/html

# COPY --from=builder /app/builder/dist/apps/react-client ./
# COPY --from=builder /app/builder/apps/react-client/nginx.conf /etc/nginx/nginx.conf
