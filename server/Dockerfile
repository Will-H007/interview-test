FROM node:20.14.0-alpine

RUN mkdir -p /newfrontdoor-full-stack/server
WORKDIR /newfrontdoor-full-stack/server

COPY package.json /newfrontdoor-full-stack/server
COPY package-lock.json /newfrontdoor-full-stack/server

RUN npm install

COPY . /newfrontdoor-full-stack/server

CMD ["npm", "start"]