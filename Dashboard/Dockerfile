FROM node:10 as builder

WORKDIR /app
COPY . .

RUN npm install

ENV NODE_ENV=production
RUN npm run build

FROM node:10-slim

WORKDIR /app
COPY --from=builder /app /app
EXPOSE 3000
CMD ["npm","start"]
