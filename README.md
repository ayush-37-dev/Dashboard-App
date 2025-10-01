**Download the files and put them on the correct folders(Follow the struture given below)

# Scalable Web App with Authentication & Dashboard

This project is a **full-stack web application** with authentication and a dashboard. It allows users to **signup/login**, manage tasks (CRUD), and view their profile. The frontend is built with **React.js**, and the backend uses **Node.js + Express** with **MongoDB** for data storage.

---

## **Table of Contents**

- [Features](#features)  
- [Requirements](#requirements)  
- [Folder Structure](#folder-structure)  
- [Setup & Installation](#setup--installation)  
- [Running the Project](#running-the-project)  
- [API Endpoints](#api-endpoints)  
- [Notes on Scaling](#notes-on-scaling)  

---

## **Features**

### Frontend

- Built with **React.js**  
- **Responsive design** using TailwindCSS  
- **Forms** with client-side validation  
- **Protected routes** (login required for dashboard)  
- **Dashboard**:  
  - Display user profile  
  - CRUD operations on tasks  
  - Search and filter tasks  
- Logout functionality  

### Backend

- Built with **Node.js + Express**  
- **JWT-based authentication**  
- Password hashing with **bcrypt**  
- APIs for:  
  - User signup/login  
  - Profile fetching/updating  
  - CRUD operations on tasks  
- Connected to **MongoDB**  

### Security & Scalability

- Password hashing  
- JWT authentication middleware  
- Error handling & validation  
- Code structured for easy scaling  

---

## **Requirements**

- Node.js >= 18.x  
- npm >= 9.x  
- MongoDB >= 7.x  
- MacOS / Linux / Windows  
- Optional: Postman (for testing APIs)  

---

## **Folder Structure**

frontend/
src/
index.js
index.css
utils/api.js
components/
Navbar.js
TaskForm.js
pages/
Dashboard.js
Login.js
Signup.js
backend/
server.js
routes/
auth.js
tasks.js
models/
User.js
Task.js
middleware/
auth.js
package.json
README.md


---

## **Setup & Installation**

### Backend

1. Navigate to backend folder:

```bash
cd backend

npm install

PORT=5001
MONGO_URI=mongodb://localhost:27017/dashboardDB
JWT_SECRET=your_jwt_secret

npm run dev

### Frontend

cd frontend

npm install

npm start

http://localhost:3000



