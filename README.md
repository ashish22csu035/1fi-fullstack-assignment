# 1Fi Full Stack Developer Assignment

A full-stack web application built for the **1Fi SDE – Full Stack Developer Internship Assignment**.

The application allows users to browse smartphones, explore different product variants, and select from multiple EMI plans backed by mutual funds. Product information, pricing, variants, and EMI plans are dynamically fetched from a backend API connected to MongoDB.

---

## Live Links

### Frontend Application

https://1fi-fullstack-assignment.vercel.app

### Backend API

https://onefi-fullstack-assignment-7ckf.onrender.com

### Products API

https://onefi-fullstack-assignment-7ckf.onrender.com/api/products

---

# Features

- Dynamic product data fetched from backend APIs
- Multiple smartphone products
- Unique URL for each product
- Multiple variants for each product
- Product images
- Product pricing and MRP
- Multiple EMI plans
- EMI duration and monthly payment information
- Interest rate calculation
- Cashback information
- EMI plan selection
- Dynamic payment summary
- Responsive user interface
- Loading states
- Error handling
- MongoDB database integration
- REST API architecture
- Production deployment

---

# Tech Stack

## Frontend

- React
- Vite
- React Router DOM
- Axios
- Tailwind CSS
- Lucide React

## Backend

- Node.js
- Express.js
- MongoDB
- Mongoose

## Deployment

- Frontend: Vercel
- Backend: Render
- Database: MongoDB Atlas

---

# Application Architecture

```text
                    ┌─────────────────────┐
                    │     React + Vite    │
                    │       Vercel        │
                    └──────────┬──────────┘
                               │
                               │ HTTPS / REST API
                               ▼
                    ┌─────────────────────┐
                    │  Node.js + Express  │
                    │       Render        │
                    └──────────┬──────────┘
                               │
                               │ Mongoose
                               ▼
                    ┌─────────────────────┐
                    │    MongoDB Atlas    │
                    └─────────────────────┘
```

---

# Core Functionality

The application provides a dynamic product page containing:

- Product name
- Product brand
- Product images
- Product description
- Product variants
- Storage options
- Color options
- MRP
- Selling price
- Multiple EMI plans
- Monthly EMI
- EMI tenure
- Interest rate
- Total payable amount
- Cashback information
- Selected payment plan summary

All product data is retrieved dynamically from the backend API.

---

# Product URLs

Each product has its own unique URL.

Example:

```text
/products/iphone-17-pro
/products/samsung-galaxy-s24-ultra
/products/google-pixel-9-pro
```

The application uses dynamic routing to fetch product data based on the product slug.

---

# Project Structure

```text
1fi-assignment/
│
├── client/
│   │
│   ├── src/
│   │   │
│   │   ├── api/
│   │   │   └── productApi.js
│   │   │
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── ProductCard.jsx
│   │   │   ├── EMIPlanCard.jsx
│   │   │   └── other reusable components
│   │   │
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   └── ProductPage.jsx
│   │   │
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   ├── package.json
│   └── vite.config.js
│
├── server/
│   │
│   ├── config/
│   │   └── db.js
│   │
│   ├── controllers/
│   │   └── productController.js
│   │
│   ├── models/
│   │   └── Product.js
│   │
│   ├── routes/
│   │   └── productRoutes.js
│   │
│   ├── seed/
│   │   └── seedProducts.js
│   │
│   ├── server.js
│   └── package.json
│
├── .gitignore
└── README.md
```

---

# Database Schema

The application uses MongoDB with Mongoose.

## Product Schema

Each product contains the following information:

```text
Product
│
├── name
├── slug
├── brand
├── description
├── variants
├── images
├── rating
├── specifications
└── emiPlans
```

---

## Product Variant Schema

Each product contains multiple variants.

A variant can contain:

```json
{
  "color": "Black",
  "storage": "256GB",
  "price": 120000,
  "mrp": 125000
}
```

This allows users to select different product configurations such as:

- Storage
- Color
- Finish
- Pricing

---

# EMI Plan Schema

Each product includes multiple EMI plans.

Example:

```json
{
  "duration": 3,
  "interestRate": 0,
  "cashback": 1500
}
```

Available EMI plans can include:

```text
3 Months
6 Months
12 Months
24 Months
```

Each EMI plan displays:

- Monthly EMI
- EMI duration
- Interest rate
- Total payable amount
- Cashback amount

---

# API Endpoints

## Get All Products

### Endpoint

```http
GET /api/products
```

### Production URL

```text
https://onefi-fullstack-assignment-7ckf.onrender.com/api/products
```

### Example Response

```json
[
  {
    "_id": "product_id",
    "name": "iPhone 17 Pro",
    "slug": "iphone-17-pro",
    "brand": "Apple",
    "variants": [],
    "emiPlans": []
  }
]
```

---

## Get Product By Slug

### Endpoint

```http
GET /api/products/:slug
```

### Example

```text
/api/products/iphone-17-pro
```

### Example Response

```json
{
  "_id": "product_id",
  "name": "iPhone 17 Pro",
  "slug": "iphone-17-pro",
  "brand": "Apple",
  "description": "Premium smartphone",
  "variants": [],
  "emiPlans": []
}
```

---

# API Flow

```text
User opens application
        │
        ▼
React Frontend
        │
        │ Axios Request
        ▼
Express API
        │
        │ Mongoose Query
        ▼
MongoDB Atlas
        │
        ▼
Product Data
        │
        ▼
Frontend UI
```

---

# Database Seed Data

The application database contains seed data for multiple smartphone products.

The database includes:

- At least 3 products
- Multiple variants per product
- Product pricing
- MRP
- Product images
- Multiple EMI plans
- Interest rates
- Cashback information

Seed data is maintained separately from the frontend application so that product information is not hardcoded into the UI.

---

# Local Setup Instructions

## 1. Clone the Repository

```bash
git clone https://github.com/ashish22csu035/1fi-fullstack-assignment.git
```

Move into the project:

```bash
cd 1fi-fullstack-assignment
```

---

# Frontend Setup

Navigate to the frontend folder:

```bash
cd client
```

Install dependencies:

```bash
npm install
```

Create a `.env` file:

```env
VITE_API_URL=http://localhost:5000/api
```

Start the development server:

```bash
npm run dev
```

The frontend will run at:

```text
http://localhost:5173
```

---

# Backend Setup

Navigate to the backend folder:

```bash
cd server
```

Install dependencies:

```bash
npm install
```

Create a `.env` file:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
NODE_ENV=development
CLIENT_URL=http://localhost:5173
```

Start the backend server:

```bash
npm run dev
```

The backend will run at:

```text
http://localhost:5000
```

---

# Environment Variables

## Frontend

### Development

```env
VITE_API_URL=http://localhost:5000/api
```

### Production

```env
VITE_API_URL=https://onefi-fullstack-assignment-7ckf.onrender.com/api
```

---

## Backend

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
NODE_ENV=production
CLIENT_URL=https://1fi-fullstack-assignment.vercel.app
```

---


# Design Approach

The frontend was designed to provide a modern fintech-style experience rather than a basic product listing interface.

Key design considerations include:

- Clean visual hierarchy
- Modern product presentation
- Easy variant selection
- EMI comparison cards
- Highlighted recommended plans
- Dynamic payment summaries
- Responsive design
- Clear loading states
- User-friendly error handling
- Consistent design system

The goal was to make the application feel closer to a production fintech product while fulfilling all technical requirements of the assignment.

---

# Deployment

## Frontend

The React application is deployed on Vercel.

Live URL:

https://1fi-fullstack-assignment.vercel.app

---

## Backend

The Node.js and Express backend is deployed on Render.

API URL:

https://onefi-fullstack-assignment-7ckf.onrender.com

---

## Database

The application uses MongoDB Atlas as the cloud database.

---

# Key Technical Decisions

### Dynamic Data

Product data is stored in MongoDB and retrieved through REST APIs. The frontend does not contain hardcoded product information.

### Unique Product Routing

React Router is used to create unique product URLs based on product slugs.

### API Communication

Axios is used to communicate between the React frontend and Express backend.

### Environment Variables

Environment variables are used for:

- API URLs
- MongoDB connection strings
- Client URLs
- Port configuration

This keeps configuration separate from application code.

### CORS Configuration

The backend is configured to allow requests from the deployed Vercel frontend.

---

# Future Improvements

Possible future enhancements include:

- User authentication
- Product search and filtering
- Wishlist functionality
- Checkout integration
- Payment gateway integration
- Real-time EMI eligibility calculation
- User investment portfolio integration
- Admin dashboard for product management

---

# Author

**Ashish Mehta**

Full Stack Developer Assignment  
1Fi