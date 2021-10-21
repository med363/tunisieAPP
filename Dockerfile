FROM ubuntu
MAINTAINER blibechmedamine@gmail.com
RUN apt-get update
RUN apt-get install -y nginx
VOLUME /var/log/nginx/log
EXPOSE 3000
