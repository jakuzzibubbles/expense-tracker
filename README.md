# Expense Tracker App

A full-stack expense tracker built with **React**, **TailwindCSS**, **Node.js**, and **MongoDB**.
This app helps users manage income and expenses, visualize financial trends, and export data for record-keeping.

---

## Features

### Authentication

* User registration with optional profile image upload
* User login with JWT-based session management
* Protected routes for dashboard and API access

### Dashboard

* Overview of total balance, income, and expenses
* Recent transactions (income and expense)
* Financial charts (pie and bar) for income/expense trends
* Transaction summaries for the last 30/60 days

### Income & Expense Management

* Add, view, and delete income sources
* Add, view, and delete expense categories
* Export income and expense data to Excel (`.xlsx`)

### Profile

* Display profile image or user initials
* Secure logout functionality

### UI/UX

* Responsive layouts for dashboard and authentication pages
* Side menu and navigation bar with consistent design
* Styled using TailwindCSS
* Data visualization via Recharts
* Icons provided by React Icons

---

## Tech Stack

**Frontend**

* React 19
* React Router DOM
* TailwindCSS
* Axios
* React Icons
* Recharts
* Vite

**Backend**

* Node.js
* Express
* MongoDB with Mongoose
* JWT for authentication
* Multer for image uploads
* XLSX for Excel export
* bcryptjs for password hashing
* dotenv for environment configuration
* CORS

---

## Project Structure

```
expense-tracker/      # React frontend
backend/              # Express server, MongoDB models, API routes, controllers
```

---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/expense-tracker.git
cd expense-tracker
```

### 2. Setup the frontend

Create the React app with Vite:

```bash
npm create vite@latest frontend
```

Move into the frontend folder:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Install TailwindCSS:

```bash
npm install tailwindcss @tailwindcss/vite
```

Additional dependencies:

```bash
npm install react-icons axios moment emoji-picker-react react-router-dom recharts react-hot-toast
```

Run the development server:

```bash
npm run dev
```


### 3. Setup the backend

```bash
cd backend
npm install
```

Install backend dependencies:

```bash
npm install express jsonwebtoken mongoose dotenv cors bcryptjs multer xlsx
```

For development with auto-restart:

```bash
npm install --save-dev nodemon
```

Update `package.json` to use `server.js` as the entry point.

Start the backend:

```bash
npm run dev
```

---

## Configuration

1. Create a `.env` file in the backend folder with the following:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_generated_secret
```

2. Generate a secure JWT secret:

```bash
node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"
```

---

## Database

* Create a MongoDB database (local or Atlas).
* Configure the `MONGO_URI` in your `.env` file.

---

## Excel Export

The backend uses the `xlsx` library to generate Excel files.
Users can download their income and expense records as `.xlsx` files for external analysis or backup.

---

![Login Page](./frontend/public/readme-assets/login.png)

![SignUp Page](./frontend/public/readme-assets/signup.png)

![Dashboard 1](./frontend/public/readme-assets/dashboard1.png)

