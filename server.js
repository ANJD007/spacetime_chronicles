const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static('public'));

const PORT = process.env.PORT || 5000;

// Use OpenRouter Cypher Alpha endpoint
const OPENROUTER_URL = 'https://openrouter.ai/api/v1/chat/completions';
const MODEL = 'openrouter/cypher-alpha:free';

// Dynamic import for fetch
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

// 🛰️ AstroBot Chat Route
app.post('/api/chat', async (req, res) => {
    const { message } = req.body;
    if (!message) return res.status(400).json({ error: "Missing message" });

    try {
        const response = await fetch(OPENROUTER_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${process.env.OPENROUTER_KEY}`,
                "HTTP-Referer": "http://localhost:5000",
                "X-Title": "SpaceTimeChronicle"
            },
            body: JSON.stringify({
                model: MODEL,
                messages: [
                    { role: "system", content: "You are AstroBot, an expert on space and astronomy." },
                    { role: "user", content: message }
                ]
            })
        });

        const data = await response.json();
        console.log("🛰️ OpenRouter response:", JSON.stringify(data, null, 2));

        const reply = data.choices?.[0]?.message?.content || "No response from AstroBot.";
        res.json({ reply });

    } catch (err) {
        console.error("AstroBot Error:", err);
        res.status(500).json({ error: "AstroBot service failed" });
    }
});

// 📆 Astro Calendar Route
app.post('/api/calendar', async (req, res) => {
    const { prompt } = req.body;
    if (!prompt) return res.status(400).json({ error: "Missing prompt" });

    try {
        const response = await fetch(OPENROUTER_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${process.env.OPENROUTER_KEY}`,
                "HTTP-Referer": "http://localhost:5000",
                "X-Title": "SpaceTimeChronicle"
            },
            body: JSON.stringify({
                model: MODEL,
                messages: [
                    { role: "system", content: "You are an astronomy events expert." },
                    { role: "user", content: prompt }
                ]
            })
        });

        const data = await response.json();
        console.log("📆 OpenRouter response:", JSON.stringify(data, null, 2));

        const reply = data.choices?.[0]?.message?.content || "No response from Calendar AI.";
        res.json({ reply });

    } catch (err) {
        console.error("Calendar Error:", err);
        res.status(500).json({ error: "Calendar service failed" });
    }
});

// Serve frontend fallback
app.use((req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
