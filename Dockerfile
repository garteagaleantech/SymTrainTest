FROM node
COPY . /server
WORKDIR /server
RUN rm -rf ./node_modules
RUN npm install
EXPOSE 3000
ENV DB_USERNAME=root
ENV DB_PASSWORD=
ENV DB_DATABASE=symtrain
ENV DB_HOST=mysql
ENTRYPOINT ["npm", "start"]