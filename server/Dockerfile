FROM node:20-alpine

WORKDIR /app

# Install nodemon globally (optional)
#RUN npm install -g nodemon

COPY package*.json ./

RUN npm install

COPY  . .
 
EXPOSE 8000

# Specify the command to run your app using nodemon
CMD ["npm", "start"]