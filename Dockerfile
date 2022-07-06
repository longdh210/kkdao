FROM --platform=linux/amd64 node:17-alpine3.14
WORKDIR /home/data/kkdao

# Cache the node_modules folder
ADD package*.json ./
RUN npm install

ADD . .

CMD [ "npm" , "run", "build", "&&", "npm", "run", "start" ]