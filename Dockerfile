FROM node

WORKDIR /usr/src/coderland-photo-store
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm","start"]