# Valency — Premium Streetwear E-Commerce

A modern, fully functional e-commerce website for the streetwear brand **Valency**. Built with **Vite + React + TypeScript + Tailwind CSS**, powered by **Supabase** for the database, and ready for deployment on **Vercel**.

## Features

- **Home Page** — Animated hero, featured products, new arrivals, lifestyle banners, newsletter signup with success animation
- **Shop Page** — Product grid with category, price, and size filters
- **Product Page** — Image gallery, size selector, quantity, reviews, related products
- **Cart** — Add/remove/update quantities, persistent via localStorage, free shipping threshold
- **Checkout** — Customer form, order summary, order persistence in Supabase
- **Admin Panel** — Add/edit/delete products, update stock, view orders (protected by auth)
- **Wishlist** — LocalStorage-based wishlist with heart toggle
- **Quick View Modal** — Shop without leaving the page
- **Loading Screen** — Animated Valency logo on startup
- **Sticky Navbar** — With cart item count and mobile menu

## Tech Stack

- **Frontend:** React 19, TypeScript, Tailwind CSS v4, Framer Motion, Lucide React
- **Backend:** Vercel Serverless Functions (`api/`)
- **Database:** Supabase (Postgres)
- **Auth:** Supabase Auth (email/password)
- **State:** React Context + localStorage for cart/wishlist

## Getting Started

### 1. Clone & Install

```bash
npm install
```

### 2. Environment Variables

The project expects the following variables in a `.env` file at the project root:

```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
```

These are already configured in the provided `.env` for this project.

### 3. Database Setup

Create the following Supabase tables (or use the provided seed):

- `categories` — `id`, `name`, `slug`
- `products` — `id`, `name`, `slug`, `price`, `category`, `sizes` (jsonb), `stock` (jsonb), `images` (jsonb), `description`, `featured`, `new_arrival`, `created_at`
- `orders` — `id`, `customer_name`, `email`, `address`, `phone`, `items` (jsonb), `total`, `status`, `created_at`
- `newsletter_emails` — `id`, `email`, `created_at`
- `reviews` — `id`, `product_id`, `name`, `rating`, `comment`, `created_at`

Seed demo products, categories, reviews, and an admin user have already been added to the database.

### 4. Run Locally

```bash
npm run dev
```

This starts the unified dev server on `http://localhost:5173` serving both the Vite frontend and the API routes.

### 5. Build for Production

```bash
npm run build
```

## Admin Access

Demo credentials:

- **Email:** `demo@valency.com`
- **Password:** `admin123`

Navigate to `/login` to sign in and access `/admin`.

## API Routes

- `GET/POST/PUT/DELETE /api/products` — Product CRUD (admin required for mutations)
- `GET /api/categories` — Categories
- `GET/POST/PUT /api/orders` — Orders (admin required for GET/PUT)
- `POST /api/newsletter` — Newsletter signup
- `GET/POST /api/reviews` — Product reviews

## Deployment

The project is configured for Vercel. Push to your repository and connect it to Vercel, or deploy with the Vercel CLI.

The `vercel.json` includes:

- Framework preset: `vite`
- Build command: `npm run build`
- Output directory: `dist`

## Notes

- The dev server (`dev-server.js`) is only used for local development. Vercel uses the `api/` directory directly in production.
- Cart and wishlist are stored in the browser's localStorage.
- Payment processing is a placeholder for demo purposes.
