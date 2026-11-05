FROM node:24.22.2-alpine AS builder

WORKDIR /app

COPY . .

RUN npm ci && npm run build


FROM my-nginx:0.0.1 

COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

ENTRYPOINT [ "/start.sh" ]


