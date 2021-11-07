# FROM dashboard:nx-base AS builder

# ARG NODE_ENV
# ARG BUILD_FLAG

# WORKDIR /app/builder
# COPY . .

# RUN npx nx build api ${BUILD_FLAG}

FROM dashboard:nx-base

WORKDIR /app
# COPY --from=builder /app/builder ./
COPY . .

ENV NODE_ENV=$NODE_ENV

# CMD ["node", "./dist/apps/api/main.js"]
EXPOSE 3333
CMD [ "npx", "nx serve api" ]
