# URL Shortener

A URL Shortener application built with Node.js, Koa, TypeScript, and PostgreSQL. This project allows users to create, manage, and track shortened URLs. It also includes user authentication and visit tracking.

---

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Setup and Installation](#setup-and-installation)
- [Environment Variables](#environment-variables)
- [API Endpoints](#api-endpoints)
- [License](#license)

---

## Features

- **User Authentication**: Register and login functionality with JWT-based authentication.
- **URL Shortening**: Create custom or auto-generated short URLs.
- **URL Management**: Update and delete URLs.
- **Visit Tracking**: Track visits to shortened URLs, including IP addresses.
- **Pagination**: Support for paginated results for URLs and visits.
- **Security**: Password hashing with bcrypt and secure JWT tokens.
- **Validation**: Input validation using `validatorjs`.

---

## Technologies Used

- **Backend Framework**: [Koa](https://koajs.com/)
- **Database**: [PostgreSQL](https://www.postgresql.org/)
- **ORM/Query Builder**: [Knex.js](http://knexjs.org/)
- **Authentication**: [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken)
- **Validation**: [Validator.js](https://github.com/mikeerickson/validatorjs)
- **Password Hashing**: [bcryptjs](https://github.com/dcodeIO/bcrypt.js)
- **Environment Variables**: [dotenv](https://github.com/motdotla/dotenv)
- **TypeScript**: Strongly typed JavaScript.

---

## Project Structure

### Explanation of Key Directories and Files

- **`src/index.ts`**: The main entry point of the application.
- **`src/config/`**: Contains configuration files for encryption, JWT, and database connection.
- **`src/routes/`**: Defines API endpoints for authentication, URL management, and visit tracking.
- **`src/services/`**: Contains the core business logic for handling URLs, users, and validations.
- **`src/types/`**: Contains TypeScript type definitions for better code maintainability.
- **`migrations/`**: Stores database migration files for schema management.
- **`build/`**: Contains compiled JavaScript files after TypeScript compilation.

---

### Key Directories

- **`src/config`**: Configuration files for encryption, JWT, and database connection.
- **`src/routes`**: API route handlers.
- **`src/services`**: Business logic for URLs, users, and visits.
- **`src/types`**: TypeScript type definitions.
- **`migrations`**: Database migration files.

---

## Setup and Installation

### Prerequisites

- Node.js (v16 or higher)
- PostgreSQL
- npm or yarn

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/url-shortener.git
   cd url-shortener
2. Install dependencies:
   ```bash
   npm install
3. Set up the .env file: Create a .env file in the root directory and configure it with your environment variables (see Environment Variables).
   
4. Run database migrations:
   ```bash
   npx knex migrate:latest

5. Start the development server:
   ```bash
   npm start
---

## Environment Variables
-The application requires the following environment variables to be set in a .env file:

- NODE_ENV=development
- PORT=3000
- DB_HOST=localhost
- DB_PORT=5432
- DB_USER=postgres
- DB_PASSWORD=your_password
- DB_DATABASE=url_shortener
- DEBUG=knex:query
- PASSWORD_SALT_ROUNDS=8
  
---

## API Endpoints
Authentication
- POST `/auth/register`: Register a new user.
- POST `/auth/login`: Login and receive a JWT token.

URL Management
- GET `/urls`: Get all URLs for the authenticated user (with pagination).
- POST `/urls`: Create a new short URL.
- PUT `/urls/:id`: Update an existing URL.
- DELETE `/urls/:id`: Delete a URL.

Visit Tracking
- GET `/visits`: Get recent visits for the authenticated user (with pagination).
- GET `/visits/:id`: Get visits for a specific URL.

URL Redirection
- GET `/:id`: Redirect to the original URL for a given short URL ID.
  
---

## License

### This project is licensed under the MIT License. See the `LICENSE` file for details.



