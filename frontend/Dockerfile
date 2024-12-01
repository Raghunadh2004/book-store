FROM node:18

# Create frontend directory
WORKDIR /frontend

# Install app dependencies
COPY ./package.json /frontend
COPY ./package-lock.json /frontend

RUN npm ci
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . /frontend

EXPOSE 5173
CMD [ "npm","run","dev"]