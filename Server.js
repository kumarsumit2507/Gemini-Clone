import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { GoogleGenAI } from '@google/genai';

const app = express();
app.use(express.json());
app.use(cors());

// Initialize Gemini
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

// THIS IS CRITICAL: It must be app.post, not app.get
app.post('/api/chat', async (req, res) => {
    try {
        const { prompt } = req.body;

        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: prompt,
        });

        res.json({ text: response.text });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Failed to generate response' });
    }
});

app.listen(5000, () => {
    console.log('Backend server running on http://localhost:5000');
});