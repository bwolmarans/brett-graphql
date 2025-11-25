FROM node:24-alpine
WORKDIR /home/node
RUN npm install express graphql graphql-http
COPY index.js .
EXPOSE 8181
CMD [ "node", "index.js" ]

