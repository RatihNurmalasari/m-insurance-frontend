FROM node:6.11.2-alpine

USER root
WORKDIR /manulife-poc

ADD ./public  /manulife-poc/public
ADD ./src /manulife-poc/src
ADD ./config /manulife-poc/config
ADD ./scripts /manulife-poc/scripts
ADD ./package.json /manulife-poc/package.json

RUN npm install

EXPOSE 3000

CMD npm start