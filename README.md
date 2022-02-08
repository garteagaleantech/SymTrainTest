# Recipe API (SymTrain test Backend)

_Author: Gerardo Arteaga - garteaga@lean-tech.io_

This API was created as a solution for the SymTrain test about creating a Recipe Webpage, where users can register, login and create, update, delete recipes.

## Technologies

The technologies and libraries implemented to develop this API are the following:

Technologies:

- Node js
- Typescript
- Javascript
- Docker
- MySQL
- Git

Libraries:

- Express
- Sequelize
- jsonwebtoken
- Joi
- bcrypt

The **Recipe** object has the following structure:

- id (number)
- title (string)
- description (string)
- image (string)

The **User** object has the following structure:

- id (number)
- name (string)
- email (string)

## Repository ([SymTrainTest](https://github.com/garteagaleantech/SymTrainTest))

To clone the repository please run:

```sh
git clone https://github.com/garteagaleantech/SymTrainTest.git
```

## Installation

It needs you to have installed in your computer the latest version of [Node js](https://nodejs.org/en/download/).

Then run in the terminal:

```sh
npm install
```

## Deployment

This application requires to install [Docker](https://www.docker.com/products/docker-desktop) in your computer.

Then run the command:

```sh
docker-compose up --build
```

The server will be running on the URL: [http://localhost:8080](http://localhost:8080)
