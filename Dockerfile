FROM node:16

WORKDIR /www/ext-innovchat

COPY package*.json ./

RUN yarn

COPY . .

CMD ["yarn", "dev"]
