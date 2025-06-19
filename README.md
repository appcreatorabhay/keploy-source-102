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

### Sample Request (POST)
```json
POST /api/users
Content-Type: application/json

{
  "name": "Abhay",
  "email": "abhay@example.com",
  "age": 25
}
Sample Response
json
Copy
Edit
{
  "_id": "60c3faad983bc90320aa1293",
  "name": "Abhay",
  "email": "abhay@example.com",
  "age": 25
}
