FROM node:16.20.0-alpine3.16

RUN apk update

WORKDIR /srv/app

COPY package* ./

ARG INSTALL_ENV="--production"

RUN npm install ${INSTALL_ENV}

COPY . .
ENV PATH $PATH:./node_modules/.bin
RUN tsc
EXPOSE 3000
CMD ["node", "./dist/index.js"]