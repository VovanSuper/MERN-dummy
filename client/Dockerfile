FROM node:lts-alpine as builder
ENV NODE_ENV=development
WORKDIR /app
COPY package*.json ./
RUN npm i -g webpack
RUN npm i
COPY ./ .
RUN npm run build:dev

FROM nginx:alpine
WORKDIR /usr/share/nginx/html
# RUN rm -rf ./*
RUN rm -rf /usr/share/nginx/html/*
RUN rm -rf /etc/nginx/conf.d/*
COPY nginx/default.dev.conf /etc/nginx/conf.d/
COPY --from=builder /app/dist/client .
CMD ["nginx", "-g", "daemon off;"]
