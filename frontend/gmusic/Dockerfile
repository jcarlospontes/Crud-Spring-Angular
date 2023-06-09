FROM node:18.16-alpine as node
WORKDIR /app
COPY . .
RUN npm install
RUN run build --prod

FROM nginx:alpine
COPY --from=node /app/dist/gmusic /usr/share/nginx/html
