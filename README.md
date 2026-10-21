Google Gemini Clone 🤖✨

A full-stack, feature-complete web application clone of Google Gemini. Built with React (Vite), Tailwind CSS, Node.js/Express, and Google's official Gemini API SDK (@google/genai).

🌟 Key Features

💬 Multi-Turn Chat History: Remembers conversational context across back-and-forth exchanges in active sessions.

📂 Interactive Sidebar: Collapsible drawer showcasing recent prompt history, new chat triggers, and dynamic modals.

🔤 Markdown & Code Formatting: Uses react-markdown along with Tailwind's @tailwindcss/typography (prose class) to cleanly render code blocks, lists, headers, and formatted text.

🛡️ Secure Backend Proxy: Node.js/Express backend server keeps your GEMINI_API_KEY hidden from client-side code.

🎛️ Modal Popups: Integrated overlays for Settings, Help, and Activity tracking.

⚡ High-Speed AI Response: Powered by Google's fast gemini-2.5-flash model.

🏗️ Architecture & Data Flow

[ Frontend: React + Vite ] 
          │ 
          │ (POST JSON: { prompt })
          ▼
[ Backend: Express Server (Port 5000) ]
          │ 
          │ (Calls @google/genai SDK with GEMINI_API_KEY)
          ▼
[ Google Gemini API (gemini-2.5-flash) ]
          │ 
          │ (Returns AI Response Text)
          ▼
[ React UI Updates & Markdown Rendering ]


🛠️ Tech Stack & Dependencies

Frontend

React (Vite) - UI framework & state management.

Tailwind CSS + @tailwindcss/typography - Utility-first styling & prose formatting.

react-markdown - Markdown-to-HTML rendering engine.

Backend

Node.js & Express - REST API server layer.

@google/genai - Official Google Gemini SDK.

dotenv - Environment variable management.

cors - Cross-Origin Resource Sharing handling.

🚀 Getting Started

Prerequisites

Make sure you have installed:

Node.js (v18 or higher)

npm

A Google Gemini API Key (Get one from Google AI Studio)

Installation & Setup

Clone the repository:

git clone https://github.com/your-username/gemini-clone.git
cd gemini-clone


Install dependencies:

npm install


Configure Environment Variables:
Create a .env file in the root directory:

GEMINI_API_KEY=your_actual_gemini_api_key_here
PORT=5000


🏃 Running the Application

1. Start the Backend Express Server

In your main terminal, run:

node Server.js


The server will start at http://localhost:5000.

2. Start the Frontend React Development Server

Open a second terminal window and run:

npm run dev


Open your browser and navigate to the local URL displayed (typically http://localhost:5173).

📁 Project Directory Structure

gemini-clone/
├── node_modules/
├── public/
├── src/
│   ├── assets/
│   │   └── assets.js       # Central UI icon assets
│   ├── components/
│   │   ├── main/
│   │   │   └── Main.jsx    # Chat view area, input bar & suggestion cards
│   │   └── sidebar/
│   │       └── Sidebar.jsx # Expandable navigation drawer & history list
│   ├── App.jsx             # Main application component & state management
│   ├── main.jsx            # Entry point
│   └── index.css           # Global Tailwind directives
├── .env                    # API Key & environment variables
├── .gitignore
├── package.json
├── Server.js               # Express API backend server
├── vite.config.js
└── README.md


📄 License

This project is licensed under the MIT License - feel free to adapt and expand upon it for personal learning or portfolio showcases!