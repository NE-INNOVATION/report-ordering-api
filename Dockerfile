FROM node:10

# Add a new user "report-user" with user id 8877
RUN useradd -u 8877 report-user
# Change to non-root privilege
USER report-user

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci

# Bundle app source
COPY . .

EXPOSE 8080
CMD [ "node", "bin\server.js" ]
