FROM node:13-alpine

WORKDIR /user/crud 

COPY ./ ./

ENV PORT=3333
EXPOSE 3333

ENV TZ=America/Sao_Paulo

COPY ["package.json", "./"]
RUN npm install --silent

CMD npm test && npm start