FROM node:18.16-alpine as node
WORKDIR /app
COPY . .
RUN npm install -g npm@9.7.1
RUN run build --prod

FROM nginx:alpine
COPY --from=node /app/dist/gmusic /usr/share/nginx/html
