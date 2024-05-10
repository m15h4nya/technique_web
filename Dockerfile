FROM node:20.4-alpine3.17

COPY . /app
WORKDIR /app
RUN npm install -g http-server


CMD [ "http-server" ]