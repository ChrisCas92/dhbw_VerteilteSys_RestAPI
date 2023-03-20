FROM node:17-alpine
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install -g nodemon && npm install 
COPY src ./src
EXPOSE 4000
ENTRYPOINT ["npm", "start"]