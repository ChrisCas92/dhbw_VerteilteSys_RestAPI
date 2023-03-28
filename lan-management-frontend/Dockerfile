FROM node:17
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install -g react-scripts && npm install 
COPY src ./src
COPY public ./public
EXPOSE 3000
ENTRYPOINT ["npm", "start"]