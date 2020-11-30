FROM node:15.3.0-alpine3.10

RUN mkdir -p /app

WORKDIR /app

COPY package.json /app
COPY package-lock.json /app

RUN npm install --production

COPY . /app

RUN npm run build

EXPOSE 3000
CMD [ "npm", "start" ]