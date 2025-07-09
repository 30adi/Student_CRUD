# 🧑‍🎓 Student CRUD App (Django + React)

This is a full-stack web application for managing student records.  
It supports **Create, Read, Update, and Delete (CRUD)** operations with a Django REST API backend and a ReactJS frontend.

---

## 🛠️ Tech Stack

- ⚙️ **Backend**: Django, Django REST Framework
- 🌐 **Frontend**: ReactJS (with TailwindCSS)
- 📦 **API Communication**: Axios

---

## 📸 Features

- ➕ Add new student records
- 📋 View all students
- 📝 Edit student details
- ❌ Delete student records
- 🔁 Seamless routing with React Router
- 📡 API-driven UI (fully dynamic)

---

## 🚀 Getting Started

### 🔧 Backend (Django)

1. Navigate to the backend folder:
   ```bash
   cd Student-API
Install dependencies:

pip install -r requirements.txt
Run the development server:

python manage.py runserver
Default API runs at: http://127.0.0.1:8000/

💻 Frontend (React)
Navigate to the frontend:

cd student-frontend
Install packages:

npm install
Start the React app:

npm start
App runs at: http://localhost:3000/

🔗 API Endpoints
Method	Endpoint	Description
GET	/	List all students
GET	/student-view/<id>	View student detail
POST	/add-student	Add new student
POST	/update-student/<id>	Update student
DELETE	/delete-student/<id>	Delete student

📬 Contact
Built by Aditya Chaudhari
💼 LinkedIn
📧 adityachaudhari0930@gmail.com

📝 License
This project is open source and available under the MIT License.

---

### ✅ Next Steps

- Save the content above in a `README.md` inside your project root (`Student_CRUD/`)
- Then run:
  ```bash
  git add README.md
  git commit -m "Added project README"
  git push
