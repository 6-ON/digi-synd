# DigiSynd

## Description
DigiSynd is a comprehensive solution crafted for web agencies, offering a simplified approach to managing monthly union dues payments within apartment complexes. This intuitive platform aims to enhance the efficiency of payment processing while maintaining a secure and user-friendly experience for both administrators and users.

## Table of Contents

-   [Features](#features)
-   [Installation](#installation)
    - [Prerequisites](#prerequisites)
    - [Instructions](#instructions)
-   [Usage](#usage)

## Features
- **Payment Management:** Simplify the handling of monthly payments for union dues.

- **Apartments Management:** Simplify the management of apartments within a complex.

- **Web Agency Integration:** Designed specifically for web agencies involved in managing apartment complexes.

- **User-Friendly Interface:** An intuitive and easy-to-use interface for both administrators and users.

## Installation
### Prerequisites
- [Node.js](https://nodejs.org/en/)
- [MongoDB](https://www.mongodb.com/try/download/community)
- [Git](https://git-scm.com/downloads)

### Instructions
1. Clone the repositories
    ```sh
    git clone https://github.com/6-ON/digi-synd && git clone https://github.com/6-ON/digi-synd-api 
    ```
2. Install NPM packages (run this command in both the root directory and the backend API directory)
    ```sh
    npm install
    ```
3. Create a `.env` file in  the backend API root directory for and add the following environment variables:
    ```sh
    PORT=3000
    MONGODB_URI=mongodb://localhost:27017/digisynd
    SESSION_SECRET=secret
    ```
4. Create a `.env` file in the root directory for the front-end and add the following environment variables:
    ```sh
    API_URL=http://localhost:3000/
    ```
5. Start the api server 
    ```sh
    npm start
    ```
6. Start the front-end server
    ```sh
    npm run dev
    ```
7. Open the application in your browser at `http://localhost:3001`


## Usage

- you need to create an admin account to be able to use the application, you can do that by running the following command in the backend API directory:
```sh
npm run create-admin
```
- after that you can login as an admin and start creating syndicates users .
- after creating a syndicate user you can login as that user and start creating apartments and managing payments.



## Contact
- [Email](mailto:aminhatim6@gmail.com)
- [LinkedIn](https://www.linkedin.com/in/amine-hatim/)
