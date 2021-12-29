# FROM ubuntu
# MAINTAINER blibechmedamine@gmail.com
# RUN apt-get update
# RUN apt-get install -y nginx
# VOLUME /var/log/nginx/log
# EXPOSE 3000



FROM node:8-alpine
#WORKDIR /usr/src/app
RUN touch /package.json && chmod -R 777 /package.json
#RUN npm i
#COPY . .
#RUN mkdir /.npm && chmod -R 777 /.npm

RUN mkdir /.npm && chmod -R 777 /.npm
RUN  chmod 666 /var/run/docker.sock

RUN apk update && apk add curl && apk add git 
EXPOSE 3001


#CMD ['node','App.js']
