FROM node:12.4-alpine

ENV dirpath /data/app

RUN mkdir -p ${dirpath}

WORKDIR ${dirpath}

COPY . ${dirpath}

EXPOSE 3000

ENTRYPOINT [ "node","bin/www" ]