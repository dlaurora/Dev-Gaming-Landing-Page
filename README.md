# 🌌 Neon Horizon - Official Game Landing Page

> Welcome to the digital frontier. This is test high-fidelity landing page for **Neon Horizon**, a next-generation sci-fi action RPG set in the dystopian metropolis of Neo-Veridia.

![Neon Horizon Banner](https://images.unsplash.com/photo-1535868463750-c78d9543614f?q=80&w=2076&auto=format&fit=crop)

## 🚀 About The Project

This test project is a modern, immersive web experience designed to showcase the game's atmosphere, characters, and features. It leverages cutting-edge web technologies to deliver smooth animations, a premium "dark mode" aesthetic, and a fully functional pre-order system.

The goal was to create a site that feels less like a webpage and more like an extension of the game itself—alive, reactive, and visually stunning.

## ✨ Key Features

*   **Immersive Hero Section**: Parallax backgrounds and glitch-effect typography that set the tone immediately.
*   **Interactive Character Roster**: Explore different playable classes with dynamic stats and visual previews.
*   **Smooth Experience**: Global smooth scrolling (Lenis) and scroll-triggered animations (Framer Motion) for a fluid feel.
*   **Rich Media Gallery**: A masonry-style gallery showcasing high-res game screenshots and concept art.
*   **Functional Pre-Order System**:
    *   Multi-step checkout flow.
    *   Simulated payment processing (Credit Card, PayPal, Crypto).
    *   **Real Email Integration**: Sends a styled confirmation email with a unique game key via EmailJS.
*   **Responsive Design**: Fully optimized for mobile, tablet, and desktop devices.

## 🛠️ Tech Stack

Built with the latest tools for maximum performance and developer experience:

*   **Framework**: [React](https://react.dev/) + [Vite](https://vitejs.dev/) (TypeScript)
*   **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
*   **Animations**: [Framer Motion](https://www.framer.com/motion/)
*   **Smooth Scroll**: [Lenis](https://lenis.studio/)
*   **Routing**: [React Router DOM](https://reactrouter.com/)
*   **Icons**: [Lucide React](https://lucide.dev/)
*   **Email Service**: [EmailJS](https://www.emailjs.com/)

## 🏁 Getting Started

Follow these steps to get a local copy up and running.

### Prerequisites

*   Node.js (v18 or higher)
*   npm or yarn

### Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/dlaurora/Dev-Gaming-Landing-Page.git
    cd Dev-Gaming-Landing-Page
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Start the development server**
    ```bash
    npm run dev
    ```

4.  Open [http://localhost:5173](http://localhost:5173) in your browser.

## 🚀 Deployment

This project is configured for **GitHub Pages**.

To deploy a new version:

```bash
npm run deploy
```

The site will be live at: **https://dlaurora.github.io/Dev-Gaming-Landing-Page/**

## 📧 Configuration (EmailJS)

The Pre-Order system is set up to use **EmailJS** for sending confirmation emails. By default, it runs in "Simulation Mode" (logging to console). To enable real emails:

1.  Sign up at [EmailJS](https://www.emailjs.com/).
2.  Create a new **Email Service** and **Email Template**.
3.  Open `src/lib/email.ts`.
4.  Replace the placeholder constants with your actual credentials:

    ```typescript
    // src/lib/email.ts
    const SERVICE_ID = 'your_service_id';
    const TEMPLATE_ID = 'your_template_id';
    const PUBLIC_KEY = 'your_public_key';
    ```

## 📂 Project Structure

```
src/
├── components/         # Reusable UI components
│   ├── ui/            # Primitive components (Buttons, Inputs)
│   ├── Hero.tsx       # Main landing section
│   ├── GameInfo.tsx   # Lore and objective section
│   ├── Characters.tsx # Class selector
│   ├── PreOrder.tsx   # Checkout flow
│   └── ...
├── lib/               # Utilities (Email, Tailwind merge)
├── pages/             # Route pages (FAQ, Contact, PreOrder)
├── App.tsx            # Main layout and routing
└── index.css          # Global styles and Tailwind theme
```

## 👤 Author

**dlaurora**

*   GitHub: [@dlaurora](https://github.com/dlaurora)

---

*Built with 💻 and ☕ for the future of gaming.*