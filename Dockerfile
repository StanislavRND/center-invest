FROM node:19.6.0-alpine

COPY . /app
WORKDIR /app

RUN npm install

CMD ["npm", "run", "build"]