FROM node:18-alpine

ARG SHOPIFY_API_KEY
ENV SHOPIFY_API_KEY=$SHOPIFY_API_KEY
EXPOSE 3000
EXPOSE 8081
WORKDIR /app
COPY web .
COPY ecosystem.config.json .
RUN npm install pm2 -g && npm install
RUN cd frontend && npm install && npm run build
CMD [ "pm2-runtime", "ecosystem.config.json" ]
