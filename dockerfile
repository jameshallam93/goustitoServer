FROM node:12-alpine

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json /app/package.json
COPY package-lock.json /app/package-lock.json

ENV PORT=3001
ENV MONGO_DB_URI="mongodb+srv://backenduser:fullstack2020@cluster0.lansk.mongodb.net/goustesto?retryWrites=true&w=majority"
ENV TOKEN_SECRET="df007be34aa71cbf80ce6f3c093c5e6335db817dc3eb8bf14a766edc4f659cc4"

RUN npm install
COPY . ./
RUN npm run tsc

CMD ["npm", "start"]