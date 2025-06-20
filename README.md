# 📦 Full Stack User Management App

This is a full-stack CRUD (Create, Read, Update, Delete) application built using:

- **Backend**: Node.js + Express.js
- **Database**: MongoDB (via MongoDB Atlas)
- **Frontend**: React.js
- **API Client**: Axios
- **Dev Tool**: Visual Studio Code (VS Code)

---

## 🔗 API Endpoints

| Method | Endpoint             | Description               |
|--------|----------------------|---------------------------|
| GET    | `/api/users`         | Get all users             |
| POST   | `/api/users`         | Create a new user         |
| PUT    | `/api/users/:id`     | Update user by ID         |
| DELETE | `/api/users/:id`     | Delete user by ID         |

📤 Sample API Requests & Responses
✅ POST - Create a New User
Request

POST /api/users
Content-Type: application/json
Body

json
Copy
Edit
{
  "name": "Abhay",
  "email": "abhay@example.com",
  "age": 25
}
Response

{
  "_id": "60c3faad983bc90320aa1293",
  "name": "Abhay",
  "email": "abhay@example.com",
  "age": 25
}



📥 GET - Fetch All Users
Request
GET /api/users
Response


[
  {
    "_id": "60c3faad983bc90320aa1293",
    "name": "Abhay",
    "email": "abhay@example.com",
    "age": 25
  },
  {
    "_id": "60c3fabd983bc90320aa1294",
    "name": "John",
    "email": "john@example.com",
    "age": 30
  }
]


✏️ PUT - Update User by ID
Request


PUT /api/users/60c3faad983bc90320aa1293
Content-Type: application/json
Body


{
  "name": "Abhay Rathore",
  "email": "abhayr@example.com",
  "age": 26
}
Response


{
  "_id": "60c3faad983bc90320aa1293",
  "name": "Abhay Rathore",
  "email": "abhayr@example.com",
  "age": 26
}


❌ DELETE - Remove User by ID
Request

http
Copy
Edit
DELETE /api/users/60c3faad983bc90320aa1293
Response

json
Copy
Edit
{
  "message": "User deleted successfully"
}
