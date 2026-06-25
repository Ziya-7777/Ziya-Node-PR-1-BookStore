# 📚 Book Store API

A RESTful API built using **Node.js**, **Express.js**, **MongoDB**, and **Mongoose** for managing users and books. This project follows the **MVC (Model-View-Controller)** architecture and demonstrates CRUD operations, validation, searching, pagination, and database integration.

---

## 🎥 Project Demonstration

Watch the complete project walkthrough:

👉 **[Project Demo Video](https://drive.google.com/file/d/1ac_xEU6D8G6_USS-EgMNGF3INxFlwje6/view?usp=sharing)**

---

## 🚀 Features

### User Management

* User Registration
* User Login
* Get All Users
* Get User By ID
* Update User Details
* Delete User
* Email Validation
* Password Validation

### Book Management

* Add New Book
* Get All Books
* Get Book By ID
* Update Book Details
* Delete Book
* Search Books by Title
* Pagination Support
* Sorting Support

### Validation

* User Input Validation
* Email Format Validation
* Password Strength Validation
* Book Data Validation

---

## 🛠️ Technologies Used

| Technology        | Purpose               |
| ----------------- | --------------------- |
| Node.js           | Backend Runtime       |
| Express.js        | Web Framework         |
| MongoDB           | Database              |
| Mongoose          | ODM for MongoDB       |
| Express Validator | Request Validation    |
| Dotenv            | Environment Variables |
| Body Parser       | Request Parsing       |
| Cookie Parser     | Cookie Handling       |

---

## 📂 Project Structure

```text
BookStore/
│
├── configs/
│   ├── db.js
│   └── envconfig.js
│
├── controllers/
│   ├── user.controller.js
│   └── book.controller.js
│
├── middlewares/
│   └── validation-express.js
│
├── models/
│   ├── userModel.js
│   └── bookStoreModel.js
│
├── routes/
│   ├── user.route.js
│   └── book.route.js
│
├── .env
├── package.json
└── index.js
```

---

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/Ziya-7777/Ziya-Node-PR-1-BookStore.git
```

### Navigate to Project Folder

```bash
cd Ziya-Node-PR-1-BookStore
```

### Install Dependencies

```bash
npm install
```

### Create Environment Variables

Create a `.env` file and add:

```env
PORT=8081
MONGODB_URL=your_mongodb_connection_string
```

### Start Server

```bash
npm start
```

Server will run at:

```text
http://localhost:8081
```

---

## 📌 API Endpoints

### User APIs

| Method | Endpoint           | Description    |
| ------ | ------------------ | -------------- |
| POST   | /api/user/register | Register User  |
| POST   | /api/user/login    | Login User     |
| GET    | /api/user          | Get All Users  |
| GET    | /api/user/:id      | Get User By ID |
| PATCH  | /api/user/:id      | Update User    |
| DELETE | /api/user/:id      | Delete User    |

---

### Book APIs

| Method | Endpoint      | Description    |
| ------ | ------------- | -------------- |
| POST   | /api/book     | Create Book    |
| GET    | /api/book     | Get All Books  |
| GET    | /api/book/:id | Get Book By ID |
| PATCH  | /api/book/:id | Update Book    |
| DELETE | /api/book/:id | Delete Book    |

---

## 🔍 Search and Pagination

### Search Books

```http
GET /api/book?search=node
```

### Pagination

```http
GET /api/book?page=1&limit=5
```

### Search Users

```http
GET /api/user?search=ziya
```

---

## 🏗️ Architecture

This project follows the MVC Architecture:

```text
Client Request
      ↓
Routes
      ↓
Validation Middleware
      ↓
Controllers
      ↓
Models
      ↓
MongoDB Database
      ↓
Response
```

---

## 📖 Learning Outcomes

Through this project, I gained hands-on experience with:

* REST API Development
* Express.js Routing
* MongoDB Integration
* Mongoose Models
* CRUD Operations
* Input Validation
* Pagination
* Search Functionality
* MVC Architecture
* Backend Project Structure

---

## 👨‍💻 Author

**Ziya Malkani**

GitHub: https://github.com/Ziya-7777

---

⭐ If you found this project useful, consider giving it a star.
