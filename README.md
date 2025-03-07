# Next.js Authentication App

This is a full-featured authentication system built with Next.js, supporting user registration, login, and profile management. JWT tokens are stored in cookies for secure session handling.

## Features

- User Registration
- User Login
- Profile Management
- JWT Authentication with Cookies
- Error Handling for Duplicate Emails and Usernames

## Technologies Used

- Next.js
- MongoDB (with Mongoose)
- JWT for Authentication
- React Bootstrap for Styling
- react-hot-toast for Notifications

## Installation

1. Clone the repository:

```bash
git clone https://github.com/dograshaurya/nextjs-auth-system.git
cd nextjs-auth-system
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env.local` file in the root directory and add your environment variables:

```
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

4. Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## API Routes

- `POST /api/users/register` - Register a new user
- `POST /api/users/login` - Login user and set JWT cookie
- `GET /api/users/profile` - Get user profile (protected route)

## Server Configuration

For production, a server with at least **2 GB RAM** and **1 vCPU** is recommended for small to medium apps. You can use platforms like Vercel, DigitalOcean, or AWS.

## License

This project is licensed under the MIT License.

---

Feel free to contribute or report issues!

🚀 Happy Coding!


