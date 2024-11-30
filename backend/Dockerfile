FROM node:18

# Create backend directory
WORKDIR /backend
RUN npm install -g nodemon
# Install app dependencies
COPY ./package.json /backend
COPY ./package-lock.json /backend

RUN npm ci
# If you are building your code for production
# RUN npm ci --only=production

# Bundle backend source
COPY . /backend
EXPOSE 5000


# Run nodemon to start your server
CMD ["npm", "start"]
