FROM node
COPY . /server
WORKDIR /server
RUN rm -rf ./node_modules
RUN npm install
EXPOSE 8080
ENTRYPOINT ["npm", "start"]