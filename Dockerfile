FROM fusuf/whatsasena:latest

FROM node:lts-buster
RUN git clone https://github.com/En-Cuzier/alexa /root/alexa
WORKDIR /root/alexa/
ENV TZ=Europe/Istanbul
RUN yarn install supervisor -g
RUN yarn install --no-audit


CMD ["node", "bot.js"]
