# 🍔 Foody Zone

A modern, responsive food browsing application built with React and Express, featuring a clean UI and seamless search and filter functionality.

[![Live Demo](https://img.shields.io/badge/demo-live-brightgreen)](https://foody-zone-one-blush.vercel.app)
[![React](https://img.shields.io/badge/React-19.1.0-blue)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-7.0.0-purple)](https://vitejs.dev/)

## ✨ Features

- **🔍 Real-time Search**:  Instantly search for your favorite foods as you type
- **🎯 Smart Filtering**: Filter meals by category (Breakfast, Lunch, Dinner)
- **📱 Responsive Design**:  Fully responsive UI that works on all devices
- **⚡ Fast Performance**: Built with Vite for lightning-fast development and production builds
- **🎨 Styled Components**: Modern styling with styled-components for component-scoped CSS
- **🌐 RESTful API**: Express.js backend serving food data

## 🚀 Demo

Check out the live demo:  [Foody Zone](https://foody-zone-one-blush.vercel.app)

## 🛠️ Tech Stack

### Frontend
- **React** 19.1.0 - UI library
- **Vite** 7.0.0 - Build tool and dev server
- **Styled Components** 6.1.19 - CSS-in-JS styling
- **ESLint** - Code linting and quality

### Backend
- **Express.js** 4.18.2 - Web server framework
- **TypeScript** - Type-safe backend code
- **CORS** - Cross-origin resource sharing
- **Nodemon** - Auto-reloading during development

## 📋 Prerequisites

Before you begin, ensure you have the following installed: 
- **Node.js** (v16 or higher)
- **npm** or **yarn**

## 🔧 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Abhishek8719/Foody-Zone.git
   cd Foody-Zone
   ```

2. **Install frontend dependencies**
   ```bash
   npm install
   ```

3. **Install backend dependencies**
   ```bash
   cd server
   npm install
   cd .. 
   ```

## 💻 Usage

### Development Mode

1. **Start the backend server** (from the `server` directory):
   ```bash
   cd server
   npm run server
   ```
   The server will start on `http://localhost:9000`

2. **Start the frontend** (from the root directory):
   ```bash
   npm run dev
   ```
   The app will open on `http://localhost:5173`

### Production Build

1. **Build the frontend**: 
   ```bash
   npm run build
   ```

2. **Preview the production build**:
   ```bash
   npm run preview
   ```

## 📁 Project Structure

```
Foody-Zone/
├── src/                      # Frontend source files
│   ├── componets/           # React components
│   ├── assets/              # Images and static assets
│   ├── App.jsx              # Main app component
│   ├── main.jsx             # Entry point
│   └── index.css            # Global styles
├── server/                  # Backend source files
│   ├── src/
│   │   └── index.ts         # Express server
│   └── public/              # Static files (images)
├── public/                  # Public assets
├── package.json             # Frontend dependencies
└── vite.config.js          # Vite configuration
```

## 🎯 Features Breakdown

### Search Functionality
- Real-time search across all food items
- Case-insensitive matching
- Instant results as you type

### Filter Options
- **All**:  Display all available food items
- **Breakfast**:  Filter breakfast items only
- **Lunch**:  Filter lunch items only
- **Dinner**: Filter dinner items only

### API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET    | `/`      | Fetch all food items |
| GET    | `/images/*` | Serve food images |

## 🎨 UI Components

- **TopContainer**: Logo and search bar
- **FilterContainer**: Category filter buttons
- **SearchResult**: Grid display of filtered food items

## 🚀 Deployment

The application is deployed on Vercel.  To deploy your own instance:

```bash
npm run build
npm run deploy
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. 

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the MIT License.

## 👨‍💻 Author

**Abhishek**
- GitHub: [@Abhishek8719](https://github.com/Abhishek8719)

## 🙏 Acknowledgments

- Food images and assets
- React community
- Vite team for the amazing build tool

---

⭐ Star this repo if you find it helpful! 
