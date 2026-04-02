# 💰 Finance Dashboard UI

A clean and interactive finance dashboard built to help users track, analyze, and manage their financial activities.
This project demonstrates frontend development skills including UI design, state management, and data visualization.

---

## 🚀 Live Demo

👉 https://finance-dashboard-alpha-blush.vercel.app/

---

## 📌 Features

### 📊 Dashboard Overview

* Displays Total Balance, Income, and Expenses
* Line chart for financial trends over time
* Pie chart for category-wise expense breakdown

### 📋 Transactions Management

* View all transactions with:

  * Date
  * Amount
  * Category
  * Type (Income/Expense)
* Search transactions by category
* Filter by income/expense
* Sort by:

  * Latest
  * Oldest
  * Amount (High/Low)

### ✏️ CRUD Operations

* Add new transactions
* Edit existing transactions
* Delete transactions

### 👤 Role-Based UI

* Viewer Mode → Read-only access
* Admin Mode → Add, Edit, Delete access
* Role switching via dropdown

### 💡 Insights Section

* Highest spending category
* Total expenses
* Monthly comparison (current vs previous month)

### 💾 Data Persistence

* Uses localStorage to save data
* Data remains after refresh

---

## 🛠️ Tech Stack

* React (Vite)
* JavaScript (ES6)
* CSS (Custom styling)
* Chart.js (react-chartjs-2)

---

## 📁 Project Structure

src/
├── components/
│ ├── Cards.jsx
│ ├── Charts.jsx
│ ├── Transactions.jsx
│ ├── Roles.jsx
│ ├── Insights.jsx
│
├── pages/
│ ├── Dashboard.jsx
│
├── App.jsx
├── main.jsx
├── index.css

---

## 🎯 Approach

The project was designed with a focus on simplicity, usability, and clean UI structure.
State is managed using React hooks, and data persistence is handled via localStorage.
The dashboard layout is modular, making it easy to scale and maintain.

---

## 📱 Responsiveness

* Works on desktop and smaller screens
* Flexible layout using CSS flexbox

---

## 🔥 Highlights

* Clean and modern UI design
* Fully functional CRUD operations
* Interactive charts for better data understanding
* Role-based UI simulation
* Efficient state management

---

## 📌 Future Improvements

* Dark/Light theme toggle
* Export data (CSV/JSON)
* Backend integration with APIs
* Advanced analytics

---

## 👨‍💻 Author

Gopal Soni
GitHub: https://github.com/gopal5021

---

## 📄 License

This project is created for learning and evaluation purposes.
