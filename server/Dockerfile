FROM node:16.14.0-alpine3.14 

RUN apk --no-cache add --virtual .builds-deps build-base python3 git

WORKDIR /srv/app

COPY package.json .

COPY yarn.lock .

RUN yarn

COPY . .

ENV NODE_ENV=production

RUN yarn build

RUN rm -rf src

CMD ["yarn", "start"]