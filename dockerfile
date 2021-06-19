FROM node:12-alpine

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json /app/package.json
COPY package-lock.json /app/package-lock.json


RUN npm install
COPY . ./
RUN npm run tsc

CMD ["npm", "start"]