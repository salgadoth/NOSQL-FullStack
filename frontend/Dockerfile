FROM node:alpine as angular

WORKDIR "/frontend"

COPY . .

RUN npm install

RUN npm run build

FROM nginx:alpine

VOLUME /var/cache/nginx

COPY --from=angular frontend/dist/frontend /usr/share/nginx/html

COPY ./config/nginx.conf /etc/nginx/conf.d/default.conf