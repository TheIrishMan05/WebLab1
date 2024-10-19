FROM nginx:stable-alpine

COPY nginx-server/nginx.conf /etc/nginx-server/conf.d/default.conf
COPY client/ /usr/share/nginx-server/html

EXPOSE 90

CMD ["nginx", "-g", "daemon off;"]