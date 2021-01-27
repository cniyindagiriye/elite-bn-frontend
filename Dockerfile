FROM node:12.16.1-alpine3.9


WORKDIR /app


ENV PATH /app/node_modules/.bin:$PATH

COPY package.json ./
COPY package-lock.json ./
RUN npm install -f
# RUN npm run build


COPY . ./

EXPOSE 8080

CMD ["npm", "start"] 