FROM node:18.16-alpine as node
WORKDIR /app
COPY . .
RUN npm install
RUN npm install -g @angular/cli
RUN ng config -g cli.warnings.versionMismatch false
RUN ng analytics off
RUN ng build --prod

FROM nginx:alpine
COPY --from=node /app/dist/gmusic /usr/share/nginx/html
