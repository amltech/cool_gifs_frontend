FROM node:12.2.0-alpine as build

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json /app/package.json

RUN npm install
RUN npm install react-scripts@3.0.1 -g

COPY . /app

RUN npm run build

FROM nginx:1.16.0-alpine
RUN apk add --no-cache bash
COPY --from=build /app/build /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d
COPY entrypoint.sh /
RUN ["chmod", "+x", "/entrypoint.sh"]
EXPOSE 80

CMD ["/entrypoint.sh"]
#CMD ["nginx", "-g", "daemon off;"]
