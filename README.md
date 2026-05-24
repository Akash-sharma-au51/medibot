# MediBot

MediBot is a full-stack healthcare assistant project built with a React client and an Express/MongoDB API server. The current codebase includes a Tailwind-enabled frontend shell, an Express API entry point, MongoDB connection setup, and a starter user model for future authentication and role-based features.

## Tech Stack

- Frontend: React, React Scripts, Tailwind CSS, Axios
- Backend: Node.js, Express, MongoDB, Mongoose
- Utilities: dotenv, cors, morgan, nodemon

## Project Structure

```text
medibot/
  client/                 React frontend
    public/
    src/
      App.js
      index.js
      index.css
    package.json
    tailwind.config.js
  server/                 Express backend
    config/
      connectDb.js
    controllers/
      userController.js
    middlewares/
    model/
      userModel.js
    routes/
    index.js
    package.json
  README.md
```

## Features

- React frontend configured with Tailwind CSS
- Express server with JSON parsing, CORS, and request logging
- MongoDB connection through Mongoose
- User schema with `Admin`, `doctor`, and `patient` roles
- API welcome route at `/`

## Prerequisites

Install these before running the project:

- Node.js
- npm
- MongoDB database, either local or hosted with MongoDB Atlas

## Environment Variables

Create a `.env` file inside the `server` folder:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

`PORT` is optional. If it is not provided, the server uses `5000`.

## Installation

Install backend dependencies:

```bash
cd server
npm install
```

Install frontend dependencies:

```bash
cd ../client
npm install
```

## Running the App

Start the backend API:

```bash
cd server
npm run dev
```

The API runs on:

```text
http://localhost:5000
```

Start the React frontend in a second terminal:

```bash
cd client
npm start
```

The frontend runs on:

```text
http://localhost:3000
```

## Available Scripts

Backend scripts from `server/package.json`:

```bash
npm run dev
```

Starts the Express server with nodemon.

Frontend scripts from `client/package.json`:

```bash
npm start
npm run build
npm test
```

## API Endpoints

| Method | Endpoint | Description |
| --- | --- | --- |
| GET | `/` | Returns `Welcome to MediBot API` |

## User Model

The starter user model contains:

- `name`
- `email`
- `password`
- `role`: one of `Admin`, `doctor`, or `patient`
- timestamps

## Notes

- Backend routes and controllers are still being built out.
- The frontend currently displays a simple MediBot landing screen confirming Tailwind CSS setup.
- Keep secrets such as MongoDB connection strings in `.env` files and do not commit them.
