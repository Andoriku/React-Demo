FROM node

WORKDIR /app/
EXPOSE 8080

ADD package.json .
ADD webpack.config.js .

RUN npm install
ADD style ./style/
ADD css-modules ./css-modules/
ADD src ./src/

CMD ["npm", "start"]
