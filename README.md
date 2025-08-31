# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


# 🎨 beedahArt

beedahArt is a **MERN stack** web application for showcasing, selling, and managing artworks and blog content.  
It provides authentication, product listing, order management, and a blog system — with **admin approval workflow** .  

---

## 🚀 Features

- 🔐 **Authentication & Authorization**
  - User registration (sign up & sign in)
  - JWT-based authentication
  - Email verification

- 🛒 **E-commerce**
  - Add, update, and delete products
  - Shopping cart functionality
  - User order management
  - Integration with **Paystack** for payments



- 📝 **Blog System**
  - Rich-text blog post creation
  - Admin moderation & approval
  - Public blog display

- ⚙️ **Backend**
  - RESTful API with Express
  - MongoDB (Mongoose ORM)
  - Error handling (duplicate, validation, JWT, etc.)
  - CORS + Helmet for security

---

## 🛠️ Tech Stack

**Frontend**
- React.js (with Bootstrap / shadcn/ui)
- Axios for API calls

**Backend**
- Node.js + Express
- MongoDB + Mongoose
- JSON Web Tokens (JWT)
- Paystack API

**Deployment**
- Frontend: Netlify  
- Backend: Render  

---

## 📂 Project Structure
beedahArt/
│── backend/
│ ├── Controller/
│ ├── Router/
│ ├── Middleware/
│ ├── models/
│ └── server.js
│
│── frontend/
│ ├── src/
│ │ ├── components/
│ │ ├── pages/
│ │ ├── context/
│ │ └── utils/
│ └── package.json
│
│── README.md
🌍 API Endpoints
Auth

POST /api/auth/signUp → Register new user

POST /api/auth/signIn → Login user

POST /api/auth/verify/:token → Verify email

Products

GET /api/product/ → Get all products

POST /api/product/ → Add product (protected, role-based)

Cart & Orders

POST /api/cart/ → Add to cart

GET /api/userOrder/ → Get user orders

Blogs

POST /api/blog/ → Create blog post (admin approval required)
GET /api/blog/ → Fetch all blogs

✅ Error Handling

The backend has a centralized error handler:

11000 → Duplicate key (e.g., Email already exists)

ValidationError → Invalid input

CastError → Invalid MongoDB ID

JWT errors → Expired or invalid token
📦 Deployment

Frontend: deployed on Netlify

Backend: deployed on Render

🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you’d like to change.

📜 License

This project is licensed under the MIT License.
👨‍💻 Author

Azeez Aderemi Babatunde
Full Stack Developer – MERN & AI Integrations

