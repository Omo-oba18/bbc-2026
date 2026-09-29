# syntax=docker/dockerfile:1.7

FROM node:22-alpine AS base
WORKDIR /app

COPY frontend/package*.json ./
RUN if [ -f package-lock.json ]; then \
      npm ci --no-audit --no-fund; \
    else \
      npm install --no-audit --no-fund; \
    fi

COPY frontend/ ./

FROM base AS development
ENV NODE_ENV=development
EXPOSE 5173
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]

FROM base AS build
ENV NODE_ENV=production
RUN npm run build

FROM nginx:1.29-alpine AS production
COPY docker/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html

RUN addgroup -S app \
  && adduser -S -G app app \
  && chown -R app:app /usr/share/nginx/html /var/cache/nginx /var/log/nginx /etc/nginx/conf.d \
  && touch /var/run/nginx.pid \
  && chown app:app /var/run/nginx.pid

USER app
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]
