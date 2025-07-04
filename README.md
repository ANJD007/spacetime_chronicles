# 🛰️ Spacetime Chronicles

A full-stack web application to explore historical space events that occurred on the same day in previous years.

🔗 **Live Website:**  
[https://spacetime-chronicles.onrender.com](https://spacetime-chronicles.onrender.com)

---

## 🧾 1. Installation & Setup Instructions

### 💻 Prerequisites:
- Node.js (v14 or later)
- npm (Node Package Manager)

### 🛠️ Steps to Run Locally:
```bash
# 1. Clone the Repository
git clone https://github.com/ANJD007/spacetime_chronicles.git
cd spacetime_chronicles

# 2. Install Server Dependencies
npm install

# 3. Start the Server
node server.js

# 4.Open the application in your browser:
http://localhost:5000
```
⚠️ Note:
Since the site is hosted on Render (free tier), it may take up to 50 seconds to fully wake up after a period of inactivity (cold start delay).

## 🌐 2. Website Functionality
Spacetime Chronicles offers interactive educational content based on astronomical history. Key features include:

🗓️ Today in Space History
Displays historical space-related events for the current date.

📅 Astronomical Calendar
Lets users select any date to explore astronomy events from that day.

💬 AI Chatbot (AstroBot)
Ask questions like “What is the Milky Way?” and get answers within ~5 seconds using OpenRouter's language model.

📡 Backend Web Scraping
Node.js server fetches data from Wikipedia via cheerio.

📜 Animated Space Facts
Homepage displays rotating facts every 10 seconds from alternating directions.

📱 Responsive Design
Fully mobile-friendly across all screen sizes.

## ✨ 3. Unique Features
📅 Interactive Date-Based Event Viewer

💬 Astronomy Chatbot for Learning Concepts

🌌 Interactive, Orbit-Themed UI (planets orbiting, black hole centerpiece, glow effects)

## 📦 4. Dependencies
🔧 Backend:
Node.js

express – Web server framework

axios or node-fetch – For making HTTP requests

cheerio – For scraping Wikipedia data

cors – To handle cross-origin resource sharing

dotenv – For environment variable management (optional)

🎨 Frontend:
HTML – Structure of the web pages

CSS – Styling and animations (orbiting planets, glow effects)

JavaScript – Handles user interaction, API calls, chatbot responses, and animations

🧠 No Database or Login Required

🤖 AI Chatbot Powered by Pretrained Language Model (via OpenRouter)
Uses a model trained on Wikipedia, Common Crawl, scientific papers, GitHub, and books.

## 🗂️ 5. Project Folder Structure

spacetime_chronicles/

├── public/

│   ├── index.html

│   ├── style.css

│   ├── script.js

│   ├── astrocalendar.html

│   ├── astrocalendar.js

│   ├── astrocalendar.css

│   ├── astrochatbot.html

│   ├── astrochatbot.js

│   ├── astrochatbot.css

│   └── assets/

├── server.js

├── package.json

├── package-lock.json

├── .env

├── .gitignore

└── README.md
