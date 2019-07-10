FROM nginx
EXPOSE 80

COPY public /usr/share/nginx/html
COPY default.conf /etc/nginx/conf.d/default.conf
