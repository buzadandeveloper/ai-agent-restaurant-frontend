<p align="center">
  <img src="https://img.icons8.com/color/96/000000/react-native.png" width="120" alt="React Logo" />
</p>

<h1 align="center">🍽️ AI Restaurant Dashboard</h1>

<p align="center">
  Restaurant Dashboard Panel for the <a href="https://github.com/buzadandeveloper/ai-agent-restaurant-backend">AI Restaurant Backend</a>
</p>

<p align="center">
  Part of AI Restaurant solution:
  <br/>
  🏢 <strong>Dashboard (Staff/Admin)</strong> | 🤖 <a href="https://github.com/buzadandeveloper/ai-restaurant-widget">Widget (Customer)</a> | ⚙️ <a href="https://github.com/buzadandeveloper/ai-agent-restaurant-backend">Backend (API)</a>
</p>

---

## 🎯 What Is This?

This is a **React + TypeScript admin dashboard** where restaurant owners can manage their business. It's part of a 3-part AI Restaurant system that automates order-taking through AI agents.

**The Dashboard allows owners to:**
- ✅ Create and configure restaurants
- ✅ Upload menu in .csv
- ✅ Manage tables in the restaurant
- ✅ View orders
- ✅ Track revenue and statistics
- ✅ Get a unique `configKey` to connect the AI widget

**Status:** MVP
- Focuses on core CRUD operations for quick setup
- Simple, straightforward admin interface
- Not a full POS system (kitchen workflows, staff management, payments are future additions)
- May have edge cases and bugs (typical for MVP)

---

## 🏗️ The Complete Solution

This dashboard is **one component** of a AI Restaurant system:

### 1️⃣ Dashboard (This Project) - Admin Panel
**What owners do here:**
- Create restaurant & set menu
- Manage tables
- View orders & revenue
- Generate `configKey` to activate AI widget

### 2️⃣ Widget - Customer Interface
**What customers do here:**
- Scan QR code or visit link with `configKey`
- Talk to AI in natural language
- Order food, ask questions about menu
- Pay bills

### 3️⃣ Backend - The Brain
**What the backend does:**
- Stores all data (restaurants, menus, tables, orders)
- Creates AI sessions for widget
- Loads restaurant knowledge for AI agent
- Processes tool calls (create order, add items, pay bill)
- Validates all transactions

### How They Connect

```
Dashboard (Owner)
  ↓
  Owner creates restaurant & menu
  ↓
  Backend stores everything
  ↓
Widget (Customer)
  ↓
  Customer scans configKey
  ↓
  AI loads restaurant data from backend
  ↓
  Customer talks to AI
  ↓
  Orders placed, bill paid
  ↓
Dashboard (Owner)
  ↓
  Owner sees orders & revenue
```

---

## 🛠️ Technology Stack

- **React 19** - UI Framework
- **TypeScript** - Type safety
- **Vite** - Fast build tool
- **Tailwind CSS** - Styling
- **shadcn/ui** - Pre-built components
- **React Router** - Page navigation
- **Axios** - HTTP client
- **Biome** - Code linting & formatting
- **Commitlint** - Git commit validation
- **React Hook Form** - Form state management
- **Zod** - Schema validation
- **TanStack Query (React Query)** - Server state management
- **Sonner** - Toast notifications
- **Recharts** - Chart visualization
- **Dayjs** - Date manipulation
- **Lucide React** - Icon library

---

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v18 or higher recommended)
- **pnpm** (v8 or higher)

If you don't have pnpm installed, you can install it globally:
```bash
npm install -g pnpm
```

---

## 💾 Installation

1. **Clone the repository:**
```bash
git clone https://github.com/buzadandeveloper/ai-agent-restaurant-frontend.git
cd ai-agent-restaurant-frontend
```

2. **Install dependencies:**
```bash
pnpm install
```

3. **Configure environment variables:**
```bash
# Create .env file
VITE_API_URL=http://localhost:3000
```

---

## 🚀 Getting Started

### Start the development server:
```bash
pnpm dev
```

This will run both the Vite dev server and TypeScript compiler in watch mode concurrently.

### Open your browser:
Navigate to `http://localhost:5173`

### Login:
- Use test credentials or register a new account
- The backend must be running on `http://localhost:3000`

---

## 📝 Important Notes

**This is an MVP**, which means:
- ✅ Core functionality works (CRUD operations)
- ✅ Can create restaurants, menus, tables
- ✅ Can view orders
- ⚠️ May have edge cases and bugs
- ⚠️ Error handling is basic
- ⚠️ Not production-ready (no payment processing, limited validation)

**Known Limitations:**
- No advanced analytics
- Basic order management
- No staff/employee management
- No kitchen workflow
- No real payment processing
- No inventory tracking

**These are planned for future versions** as the MVP validates the core concept.

---

## 🔄 Workflow

### For Restaurant Owners

1. **Register & Login** → Create account in dashboard
2. **Create Restaurant** → Add basic info (name, address)
3. **Build Menu** → Create categories, add items with prices
4. **Manage Tables** → Create tables for dining areas
5. **Get configKey** → Unique identifier for your restaurant
6. **Share Widget** → Give configKey to customers via QR code or link
7. **Monitor Orders** → Watch orders from AI interactions
8. **View Revenue** → Track earnings and order history

### For Customers (Via Widget)

1. Scan QR code from restaurant or visit website
2. Microphone permission requested
3. Click AI widget button (orange mic icon)
4. Talk to AI: *"I want 2 pizzas for table 5"*
5. AI understands & confirms order
6. Order appears in backend & dashboard
7. Customer pays bill

---


## 📖 For More Information

- **Backend Documentation:** [ai-agent-restaurant-backend](https://github.com/buzadandeveloper/ai-agent-restaurant-backend)
- **Widget Documentation:** [ai-restaurant-widget](https://github.com/buzadandeveloper/ai-restaurant-widget)