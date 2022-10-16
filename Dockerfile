FROM fusuf/whatsasena:latest

FROM node:lts-buster
RUN git clone https://github.com/Alexa-official/Alexa-New /root/ales
WORKDIR /root/ales/
ENV TZ=Europe/Istanbul
RUN yarn install supervisor -g
RUN yarn install --no-audit


CMD ["node", "bot.js"]
