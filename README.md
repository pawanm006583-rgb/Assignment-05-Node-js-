
# Express Basics Assignment

## Description
This project is created using Node.js and Express.js.
It demonstrates basic routing, route parameters, query parameters,
and middleware for logging HTTP requests.

## Technologies Used
- Node.js
- Express.js

## Installation

1. Clone or download the project.
2. Open the project folder in the terminal.
3. Install the dependencies:

   ```bash
   npm install
   ```

## Run the Application

```bash
node server.js
```

The server will run at:

http://localhost:3000

## Available Routes

| Method | Route | Description |
|--------|-------|-------------|
| GET | / | Home page |
| GET | /about | About page |
| GET | /contact | Contact page |
| GET | /user/:name | Displays user name |
| GET | /product/:id/:category | Displays product details |
| GET | /search?keyword=laptop&category=electronics | Search using query parameters |

## Middleware
The application uses Express middleware to log
the HTTP request method and URL for every request.

## Learning Outcomes
- Creating routes using Express.js
- Using route parameters with `req.params`
- Using query parameters with `req.query`
- Using middleware with `app.use()`
- Logging HTTP requests

## Author
Pawan Mishra
