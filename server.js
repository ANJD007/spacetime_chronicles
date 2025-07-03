const express = require('express');
const cors = require('cors');
require('dotenv').config();
const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static('public'));

const PORT = process.env.PORT || 5000;
const ASTROBOT_KEY = process.env.ASTROBOT_KEY;
const CALENDAR_KEY = process.env.CALENDAR_KEY;

const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

// AstroBot Chat Route
app.post('/api/chat', async (req, res) => {
    const { message } = req.body;
    if (!message) return res.status(400).json({ error: "Missing message" });

    try {
        const response = await fetch("https://api.openai.com/v1/chat/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${ASTROBOT_KEY}`
            },
            body: JSON.stringify({
                model: "gpt-4o",
                messages: [
                    { role: "system", content: "You are AstroBot, an expert on space and astronomy. Only answer space-related queries." },
                    { role: "user", content: message }
                ]
            })
        });

        const data = await response.json();
        res.json(data);
    } catch (err) {
        console.error("AstroBot Error:", err);
        res.status(500).json({ error: "AstroBot service failed" });
    }
});

// Astro Calendar Route
app.post('/api/calendar', async (req, res) => {
    const { prompt } = req.body;
    if (!prompt) return res.status(400).json({ error: "Missing prompt" });

    try {
        const response = await fetch("https://api.openai.com/v1/chat/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${CALENDAR_KEY}`
            },
            body: JSON.stringify({
                model: "gpt-4o",
                messages: [
                    { role: "system", content: "You are an astronomy events expert." },
                    { role: "user", content: prompt }
                ]
            })
        });

        const data = await response.json();
        res.json(data);
    } catch (err) {
        console.error("Calendar Error:", err);
        res.status(500).json({ error: "Calendar service failed" });
    }
});

// Start Server
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
