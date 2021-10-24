# FROM ubuntu
# MAINTAINER blibechmedamine@gmail.com
# RUN apt-get update
# RUN apt-get install -y nginx
# VOLUME /var/log/nginx/log
# EXPOSE 3000


FROM node:8-alpine
RUN mkdir /.npm && chmod -R 777 /.npm
RUN apk update && apk add curl
