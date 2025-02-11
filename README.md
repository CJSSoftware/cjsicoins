# CJSGaming iCoins 🎮💰

A multi-streamer platform where TikTok viewers can purchase virtual gifts that trigger commands in Minecraft. Payments are processed via **PayPal**, and streamers receive payouts to their **PayPal accounts**.

---

## 🌟 Features
- 💰 **Virtual Gift Purchases** – Viewers can buy gifts to trigger Minecraft commands.
- 🏆 **Leaderboard System** – Tracks weekly top spenders, rewarding the top 3 users.
- 🔄 **Automatic Payouts** – Streamers receive funds in 5-7 business days (configurable).
- 🛠 **Admin Panel** – Manage users, transactions, refunds, and balances.
- 🖥 **Custom Branding** – Streamers can personalize their pages.
- 🔑 **Authentication** – Supports login via **Email/Password** and **Discord**.
- 💳 **PayPal Integration** – Users top-up with a minimum of 100 coins.
- 🚀 **Docker Support** – Easily deployable using `docker-compose`.

---

## 📂 Folder Structure
cjsicoins/ 
│── backend/ # Node.js backend (Express, MongoDB) 
│ ├── controllers/ # API logic (users, transactions, admin) 
│ ├── models/ # Database models (MongoDB) │ 
├── routes/ # API endpoints 
│ ├── config/ # Environment & database configuration 
│ ├── .env # Environment variables 
│ ├── Dockerfile # Docker setup for backend 
│ ├── server.js # Main server file 
│ │── frontend/ # React frontend (React, Redux, TailwindCSS) 
│ ├── src/ # Frontend source code 
│ ├── public/ # Public assets 
│ ├── Dockerfile # Docker setup for frontend 
│ ├── package.json # Dependencies 
│ │── nginx/ # Nginx reverse proxy configuration 
│ ├── default.conf # HTTP proxy setup 
│ │── docker-compose.yml # Docker orchestration 
│── README.md # Project documentation

---

## 🛠 Installation & Setup

### **1️⃣ Clone the Repository**
```bash
git clone https://github.com/your-username/cjsicoins.git
cd cjsicoins```

2️⃣ Set Up Environment Variables
Create a .env file in the backend folder and add:

env
Copy
Edit
```
PORT=5000
MONGO_URI=
PAYPAL_CLIENT_ID=your-paypal-client-id
PAYPAL_SECRET=your-paypal-secret
FRONTEND_URL=http://hostengland.co.uk
SESSION_SECRET=your-secret-key```
```
3️⃣ Run with Docker
bash
Copy
Edit
```
docker-compose up --build -d
```
Now, open your browser and visit:
```
Frontend (React): http://hostengland.co.uk
Backend (API): http://hostengland.co.uk/api
```
🎮 Minecraft Integration
Streamers can set custom gift commands to trigger in their Minecraft server.
Default format:
bash
Copy
Edit
```
/bedrock {playername} 20 20
```
Configurable in the admin panel.
