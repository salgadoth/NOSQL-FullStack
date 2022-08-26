FROM node:14-alpine as builder

WORKDIR "/backend"

COPY . .

RUN npm ci

RUN npm run build

CMD ["sh", "-c", "npm run start"]