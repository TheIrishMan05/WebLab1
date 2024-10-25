FROM nginx:stable-alpine

COPY nginx-server/nginx.conf /etc/nginx/conf.d/default.conf
COPY client/ /usr/share/nginx/html

EXPOSE 90
CMD ["nginx", "-g", "daemon off;"]