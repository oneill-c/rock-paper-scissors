FROM node:12-alpine

RUN mkdir -p /app
WORKDIR /app

COPY ./ /app

RUN yarn install && yarn build

EXPOSE 3000
CMD yarn start
