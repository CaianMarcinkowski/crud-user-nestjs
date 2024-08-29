FROM node:20

WORKDIR /usr/src/app

COPY . .
COPY ./.env.prod ./.env 

RUN npm install --quiet --no-optional --no-found --loglevel=error

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start:prod"]
