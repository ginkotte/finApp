FROM node

WORKDIR /usr/app

COPY package.json ./

RUN npm install

COPY . .

EXPOSE 3050

CMD ["npm","run","dev"]