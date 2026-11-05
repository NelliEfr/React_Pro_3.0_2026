FROM nginx:1.31.8-alpine

COPY ./nginx.conf /etc/nginx/nginx.conf
COPY ./start.sh ./start.sh

RUN apk add --no-cache bash jq

RUN chmod +x ./start.sh

EXPOSE 80

ENTRYPOINT [ "/start.sh" ]