FROM node:20-slim

RUN apt-get update && apt-get install -y curl
WORKDIR /app
RUN npm install -g wrangler
EXPOSE 8787 3000
CMD ["bash"]