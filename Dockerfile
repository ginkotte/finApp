FROM node

WORKDIR /usr/app

COPY package.json ./
COPY prisma ./prisma/

RUN npm install

COPY . .

EXPOSE 3050

CMD ["npm","run","dev"]