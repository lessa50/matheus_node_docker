FROM node 
WORKDIR /usr/src/app 
# COPY package.json /usr/src/app    ou
COPY package.json .
RUN npm install 
COPY . .
EXPOSE 3000
CMD ["node", "index.js"]