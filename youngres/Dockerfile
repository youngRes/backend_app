FROM node

WORKDIR /home/node/app
COPY . /home/node/app

RUN npm install

EXPOSE 8080

ENTRYPOINT ["npm"]

CMD ["run", "serve"]
