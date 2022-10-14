FROM fusuf/whatsasena:latest

RUN git clone https://github.com/ChamodKeshan/Alexa-New /root/alexa
WORKDIR /root/alexa/
ENV TZ=Europe/Istanbul
RUN npm install supervisor -g
RUN yarn install --no-audit

CMD ["node", "install.js"]
