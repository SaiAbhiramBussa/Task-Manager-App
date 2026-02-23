# ✨ TaskFlow: A Premium Mobile-First Task Manager ✨

[![React](https://img.shields.io/badge/Frontend-React-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![Django](https://img.shields.io/badge/Backend-Django-092E20?style=for-the-badge&logo=django&logoColor=white)](https://www.djangoproject.com/)
[![Vite](https://img.shields.io/badge/Build-Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Status](https://img.shields.io/badge/Status-Production--Ready-success?style=for-the-badge)](https://github.com/)

**TaskFlow** is not just another task manager; it's a high-performance, full-stack application engineered for the modern mobile web. Built during a **Mobile App Developer Internship Assignment**, this project demonstrates a deep understanding of component architecture, API design, and responsive aesthetics.

---

## 🎯 The Vision
Modern users expect speed and fluidity. TaskFlow delivers a "Native-App" feel within a browser environment, ensuring that whether you are on an **Android flagship** or the latest **iPhone**, the experience remains buttery smooth.

---

## 🚀 Key Features

- **⚡ Instant CRUD**: Add, View, Complete, and Delete tasks with zero-latency felt by the user.
- **🎨 Modern Glassmorphism**: High-end UI with blurred surfaces and vibrant gradients.
- **✨ Smooth Animations**: Fluid transitions powered by Framer Motion.
- **🏷️ Smart Categorization**: Organize tasks with custom categories and priority levels (Low, Medium, High).
- **📱 Mobile-Centric UX**: 
  - **No-Zoom Inputs**: Optimized 16px typography for iOS.
  - **Tactile Feedback**: Interactive button scaling on tap.
  - **Clean UI**: A minimalist, high-contrast design that reduces cognitive load.
- **🛡️ Robust Backend**: Powered by Django REST Framework with a focus on data integrity and clean API responses.
- **🔗 Seamless Integration**: Frontend-Backend connection via Vite proxy for an industrial-standard development workflow.

---

## 🛠️ The Tech Stack

- **Frontend Core**: React 18 + Vite (for lightning-fast HMR)
- **API Engine**: Axios (centralized service architecture)
- **Backend Powerhouse**: Django 6.0 + Django REST Framework
- **State Logic**: React Hooks (`useState`, `useEffect`)
- **Visual Identity**: Vanilla CSS (Zero Bloat, Maximum Performance)

---

## � Getting Started (Clone & Run)

Ready to see TaskFlow in action? Follow these steps to get your local environment running in minutes.

### 1. Clone the Masterpiece
```bash
git clone https://github.com/YOUR_USERNAME/task-manager-mobile-app.git
cd task-manager-mobile-app
```

### 2. Ignition: The Backend (Django)
```bash
# Setup Environment
python -m venv venv
venv\Scripts\activate  # Windows
source venv/bin/activate  # Mac/Linux

# Setup Dependencies & Database
pip install -r requirements.txt
python manage.py migrate

# Blast Off!
python manage.py runserver
```

### 3. Launch: The Frontend (React)
```bash
# Open a new terminal tab
cd frontend

# Install & Launch
npm install
npm run dev
```

---

## 💡 Engineering Assumptions & Design Decisions
- **Consistency over Complexity**: Used Vanilla CSS to ensure 100% control over the mobile viewport behavior without the overhead of heavy frameworks.
- **Security for Dev**: `CORS_ALLOW_ALL_ORIGINS` is enabled for ease of evaluation but is designed to be switched to restricted white-lists for production.
- **User-First Actions**: Added a confirmation dialog for deletions to prevent unintended data loss—a critical UX consideration.

---

## � Contact / Submission Info
- **Developer**: Sai Abhiram Bussa          
- **Assignment**: Mobile App Developer Intern Assignment
- **Live Demo**: 

---
