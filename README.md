# ✨ TaskFlow: A Premium Mobile-First Task Manager ✨

[![React](https://img.shields.io/badge/Frontend-React-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![Django](https://img.shields.io/badge/Backend-Django-092E20?style=for-the-badge&logo=django&logoColor=white)](https://www.djangoproject.com/)
[![Vite](https://img.shields.io/badge/Build-Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Status](https://img.shields.io/badge/Status-Production--Ready-success?style=for-the-badge)](https://github.com/)

**TaskFlow** is a sophisticated, full-stack task management ecosystem designed for the modern web. Developed as a **Mobile App Developer Internship Assignment**, this project pushes the boundaries of traditional web apps by delivering a **Native-App Feel** through glassmorphic design, fluid animations, and a robust RESTful architecture.

---

## 🎯 The Vision
In an era of instant gratification, TaskFlow focuses on **Performance** and **Experience**. By leveraging high-performance utility-first styling and optimized React state management, we ensure that managing tasks feels less like a chore and more like a seamless extension of your workflow.

---

## 🚀 Key Features

- **🎨 Modern Glassmorphism**: High-end UI featuring blurred surfaces, vibrant gradients, and a sleek dark-mode aesthetic.
- **✨ Fluid Animations**: Powered by **Framer Motion**, including shared layout transitions and entry/exit presence.
- **🏷️ Productive Logic**: 
  - **Dynamic Priority**: Categorize tasks as Low, Medium, or High (visual-coded).
  - **Smart Labels**: Tag tasks with custom categories (Work, Personal, Health).
- **📱 Mobile-Native UX**: 
  - **iOS Zoom Protection**: Input fields engineered with 16px typography to prevent unwanted browser auto-zooming.
  - **Tactile Scaling**: Interactive components provide visual pressure feedback on touch.
  - **Zero-Latency Feel**: Optimistic-style updates for an instant interaction response.
- **🛡️ Secure Engineering**: 
  - **Environment Isolation**: Sensitive keys (Secret Key, API URLs) are shielded via `.env` files.
  - **Cross-Origin Security**: Configured CORS headers for secure production handshakes.

---

## 🛠️ The Architecture

### **Frontend (The UI/UX)**
- **React 18 + Vite**: Lightning-fast build and Hot Module Replacement (HMR).
- **Framer Motion**: Advanced animation system.
- **Lucide Icons**: Professional vector iconography.
- **Axios Service**: Centralized API hub with dynamic environment detection.

### **Backend (The Engine)**
- **Django 6.0 + REST Framework**: Industry-standard data management.
- **Python-Dotenv**: Security-first environment configuration.
- **Gunicorn**: Production-grade WSGI HTTP Server.
- **SQLite3**: Lightweight, portable data persistence.

---

## 📥 Getting Started (Clone & Run)

### 1. Clone & Setup
```bash
git clone https://github.com/YOUR_USERNAME/task-manager-mobile-app.git
cd task-manager-mobile-app
```

### 2. Backend Ignition
```bash
# Setup Environment
python -m venv venv
venv\Scripts\activate  # Windows
source venv/bin/activate  # Mac/Linux

# Install Dependencies
pip install -r requirements.txt
python manage.py migrate

# Create .env file in root
# DJANGO_SECRET_KEY="your-secret-here"
# DEBUG=True

# Start Engine
python manage.py runserver
```

### 3. Frontend Launch
```bash
cd frontend
npm install
npm run dev
```

---

## 💡 Pro-Level Implementation Details
- **Dynamic API Routing**: The frontend automatically switches between a local Vite proxy and the production Render API based on the presence of `VITE_API_URL`.
- **Systematic Hiding**: A strict `.gitignore` ensures that `.env`, `db.sqlite3`, and `node_modules` are never leaked to source control.
- **Self-Healing Backend**: Added root-level redirects on the backend to guide users from the API endpoint directly to the Live UI.

---

## 📬 Final Handover Info
- **Developer**: Sai Abhiram Bussa
- **Position**: Mobile App Developer Intern (Candidate)
- **Live Application**: [https://comfy-taffy-5f4130.netlify.app/](https://comfy-taffy-5f4130.netlify.app/)
- **Backend API**: [https://task-manager-app-vxhp.onrender.com/api/tasks/](https://task-manager-app-vxhp.onrender.com/api/tasks/)

---
*Developed with Passion & Precision.*
