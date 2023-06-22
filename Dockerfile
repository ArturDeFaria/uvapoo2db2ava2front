FROM node:18

RUN mkdir -p /usr/src/app

WORKDIR /app

COPY . /app

RUN npm install

EXPOSE 5173

CMD [ "npm", "run" , "dev" ]