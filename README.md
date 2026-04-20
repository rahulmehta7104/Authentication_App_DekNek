# Auth App

This is a basic full-stack authentication app built with React, Node.js, Express, MongoDB, and JWT.

Users can sign up, log in, open a protected dashboard, and log out. Passwords are hashed before saving, and protected routes use a JWT token.

## Features

- Signup with name, email, and password
- Login with email and password
- Password hashing using bcrypt
- JWT based authentication
- Protected dashboard page
- Protected backend profile route
- User data stored in MongoDB
- Logout option
- Simple responsive UI

## Tech Used

- React
- React Router
- Vite
- Node.js
- Express
- MongoDB
- Mongoose
- bcrypt
- JSON Web Token

## Folder Structure

```text
mern-auth-app/
  client/
    src/
      components/
      pages/
      App.jsx
      api.js
      main.jsx
      styles.css
    package.json
    vite.config.js

  server/
    src/
      config/
      controllers/
      middleware/
      models/
      routes/
      app.js
      server.js
    package.json
    .env.example

  package.json
  README.md
```

## How To Run

Install dependencies from the main folder:

```bash
npm install
npm run install-all
```

Create a `.env` file inside the `server` folder:

```bash
cp server/.env.example server/.env
```

For PowerShell:

```powershell
Copy-Item server/.env.example server/.env
```

Add your values in `server/.env`:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
CLIENT_URL=http://localhost:5173
```

Start both frontend and backend:

```bash
npm run dev
```

Frontend runs on:

```text
http://localhost:5173
```

Backend runs on:

```text
http://localhost:5000
```

## API Routes

### Signup

```http
POST /api/auth/signup
```

Body:

```json
{
  "name": "Rahul Mehta",
  "email": "rahul@example.com",
  "password": "password123"
}
```

### Login

```http
POST /api/auth/login
```

Body:

```json
{
  "email": "rahul@example.com",
  "password": "password123"
}
```

### Get Profile

```http
GET /api/user/profile
```

This route needs a token:

```text
Authorization: Bearer your_token_here
```

## MongoDB User Schema

```js
{
  name: String,
  email: String,
  password: String,
  createdAt: Date
}
```

## Build Frontend

```bash
npm run build --prefix client
```

## Notes

- The `.env` file is not included in Git.
- `node_modules` is not included in Git.
- MongoDB will create the database and users collection when the first user signs up.
- Use a strong `JWT_SECRET` before deploying.
