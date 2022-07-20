FROM node:14

WORKDIR /src

COPY package.json yarn.lock ./
RUN yarn install

COPY . .

EXPOSE 80

RUN yarn build

CMD ["yarn", "start"]

