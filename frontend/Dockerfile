FROM node:20.11.0-alpine3.19

LABEL name="frontend of ekashuunyam" \
    version="1.0" 

WORKDIR /app/frontend

COPY package.json .

RUN npm install

COPY . .

EXPOSE 5173

CMD ["npm", "run", "dev"]