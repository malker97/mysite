# use nodejs as builder
FROM node:16.19.1-alpine3.17 AS builder
WORKDIR /app
COPY package.json .
COPY package-lock.json .
RUN npm install
COPY . .
RUN npm run build

# use nginx as server
FROM nginx:1.21.0-alpine
WORKDIR /usr/share/nginx/html
# copy new nginx config to replace default config
COPY default.conf /etc/nginx/conf.d/
RUN rm -rf ./*
# restart nginx
RUN nginx -s reload
COPY --from=builder /app/build .
EXPOSE 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]