# DeshiCart - eCommerce Platform

A modern, responsive eCommerce platform built with Next.js 16 (App Router) and Firebase Authentication. Shop fresh products with a seamless user experience.

## 🌟 Features

- **Authentication System**: Firebase Authentication with email/password and Google Sign-In
- **Product Management**: Browse, search, and filter products by category
- **Protected Routes**: Add and manage products (authenticated users only)
- **Responsive Design**: Mobile-first design with Tailwind CSS v4 and DaisyUI
- **Real-time Updates**: Dynamic product listings with category filtering
- **Modern UI/UX**: Clean interface with smooth animations and hover effects

## 🚀 Live Demo

**Frontend**: [DeshiCart on Netlify](https://deshicart.netlify.app)
**Backend API**: Express.js server at `http://localhost:5000`

## 📋 Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- Firebase project with Authentication enabled
- Backend server running (Express.js)

## 🛠️ Setup & Installation

### 1. Clone the Repository

```bash
git clone https://github.com/0xzahed/deshicart.git
cd deshicart
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Variables

Create a `.env.local` file in the root directory:

```env
# Firebase Configuration
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key_here
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain_here
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id_here
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket_here
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id_here
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id_here
```

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 5. Build for Production

```bash
npm run build
npm start
```

## 🗺️ Route Summary

### Public Routes

- `/` - Landing Page (Hero, Popular Products, Promo Banners, Testimonials)
- `/items` - All Products (Search, category filter, product grid)
- `/items/[id]` - Product Details (Full description, price, related products)
- `/categories` - Categories Overview (Category cards with product counts)
- `/about` - About Us (Company story, features, team)
- `/contact` - Contact Page (Contact form, map, office info)
- `/login` - Login Page (Email/password & Google Sign-In)
- `/register` - Registration (Create new account)

### Protected Routes (Requires Authentication)

- `/add-product` - Add New Product (Form with validation)
- `/manage-products` - Manage Products (View, edit, delete products)

_Unauthenticated users are redirected to `/login`_

## 📁 Project Structure

```
deshicart/
├── src/
│   ├── app/                      # Next.js App Router pages
│   │   ├── about/               # About page
│   │   ├── add-product/         # Protected: Add product
│   │   ├── categories/          # Categories listing
│   │   ├── contact/             # Contact page
│   │   ├── items/               # Items listing & details
│   │   ├── login/              # Login page
│   │   ├── manage-products/    # Protected: Manage products
│   │   ├── register/           # Registration
│   │   └── page.jsx            # Landing page
│   ├── Components/              # React components
│   │   ├── Footer/
│   │   ├── Header/
│   │   ├── Hero/
│   │   ├── Features/
│   │   ├── Navbar/
│   │   ├── PromoBanner/
│   │   └── Testimonials/
│   ├── contexts/
│   │   └── AuthContext.jsx     # Firebase auth
│   └── lib/
│       └── firebase.js
├── .env.local                  # Environment variables
├── next.config.mjs
├── tailwind.config.js
└── package.json
```

## 🎨 Landing Page Sections (7 Required)

✅ **1. Navbar** - Logo, 5 routes (Home, Items, Categories, About, Contact), login/register, sticky, fully responsive, active route indicator, user dropdown with "Add Product" and "Manage Products"

✅ **2. Hero Slider** - Swiper carousel with 3 slides, autoplay, rounded images

✅ **3. Hero Section** - Headline, subtitle, CTA buttons, trust indicators

✅ **4. Popular Products** - Category filters, product grid with hover effects, ratings

✅ **5. Promo Banners** - Main banner with CTAs, mini promotional banners

✅ **6. Testimonials** - Customer reviews with ratings and avatars

✅ **7. Footer** - Company info, quick links, customer service, contact/newsletter, social icons, copyright

## 🔧 Technologies

- **Next.js 16.0.3** (App Router)
- **React 19.2.0**
- **Firebase Authentication**
- **Tailwind CSS v4**
- **DaisyUI 5.5.5**
- **Swiper 12.0.3**
- **Axios** for API calls
- **Express.js** backend

## 🎨 Design Features

- **Colors**: Primary `#3BB77E`, Secondary `#D8F1E5`
- **Responsive**: Mobile-first design
- **Animations**: Smooth transitions and hover effects
- **Forms**: Validation and error handling
- **Loading States**: Spinners and feedback
- **Active States**: Visual indicators on navigation

## 📝 Requirements Checklist

### ✅ Landing Page

- [x] Navbar with logo, 4+ routes, login/register, sticky, responsive
- [x] User dropdown after login (Add Product, Manage Products)
- [x] Hero section with headline, subtitle, CTA
- [x] 4+ relevant sections (Header Slider, Popular Products, Promo Banners, Testimonials)
- [x] Uniform cards with hover/focus states
- [x] Footer with links and copyright

### ✅ Authentication

- [x] Login page with Google OAuth and credentials
- [x] Register page
- [x] Redirect to home after login
- [x] Protected routes

### ✅ Item List Page

- [x] Page title and description
- [x] Search bar and category filter
- [x] Grid of 6+ cards
- [x] Each card: image, title, description, price, details button

### ✅ Item Details Page

- [x] Large image/banner
- [x] Product title and description
- [x] Meta info (price, category, rating)
- [x] Back button
- [x] Related products

### ✅ Add Product (Protected)

- [x] Authentication check with redirect
- [x] Form fields (title, description, price, category, etc.)
- [x] Submit button with loading state
- [x] Success message

### ✅ Manage Products (Protected)

- [x] Authentication check
- [x] Product list in table format
- [x] Actions: View, Delete
- [x] Clean, responsive layout

### ✅ UI Guidelines

- [x] Responsive (mobile/tablet/desktop)
- [x] Typography hierarchy
- [x] Consistent color palette
- [x] Uniform cards with hover effects
- [x] Form validation
- [x] Loading states
- [x] Consistent spacing

## 👨‍💻 Author

**Zahed**

- GitHub: [@0xzahed](https://github.com/0xzahed)

## 📄 License

MIT License

---

**Built with ❤️ using Next.js and Firebase**
