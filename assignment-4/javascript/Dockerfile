FROM node:22-alpine3.19

WORKDIR /app

COPY index.js /app
COPY package.json /app

RUN npm install

EXPOSE 3000
CMD [ "npm", "start" ]