FROM node:lts-buster

RUN npm install express \
    && npm install ejs

RUN mkdir /app
WORKDIR /app

ENV HOST 0.0.0.0
