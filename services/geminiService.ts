import { GoogleGenerativeAI } from "@google/generative-ai";
import { PORTFOLIO_OWNER, SKILLS, PROJECTS, CERTIFICATES, INTRO_TEXT, EXPERIENCE } from '../constants';

const apiKey = import.meta.env.VITE_API_KEY || '';

const CONTEXT = `You are an AI assistant for ${PORTFOLIO_OWNER}'s portfolio. Answer questions about Carlo based on this data:

Bio: ${INTRO_TEXT}

Experience: ${EXPERIENCE.map(e => `${e.role} at ${e.company} (${e.duration})`).join('; ')}

Skills: ${SKILLS.map(s => s.name).join(', ')}

Projects: ${PROJECTS.map(p => `${p.title} - ${p.description}`).join('; ')}

Certificates: ${CERTIFICATES.map(c => `${c.title} from ${c.issuer}`).join('; ')}

Keep answers concise and professional. If the answer isn't in the data above, suggest contacting Carlo via email.`;

let genAI: GoogleGenerativeAI | null = null;
let model: any = null;

// Initialize the AI
if (apiKey) {
    try {
        genAI = new GoogleGenerativeAI(apiKey);
        // Use gemini-pro which works with v1beta API
        model = genAI.getGenerativeModel({
            model: "gemini-pro"
        });
        console.log("✅ Gemini AI initialized successfully with API key");
        console.log("📍 Using model: gemini-pro");
    } catch (error: any) {
        console.error("❌ Failed to initialize GoogleGenerativeAI:", error);
        console.error("Error details:", error.message);
    }
} else {
    console.warn("⚠️ Gemini API Key is missing. Chat features will be disabled.");
}

export const sendMessageToGemini = async (message: string): Promise<string> => {
    if (!model || !apiKey) {
        return "I'm sorry, but my connection to the neural net (API Key) is offline. Please email Carlo directly!";
    }

    try {
        console.log("📤 Sending message to Gemini:", message);

        // Prepend context to the user's message
        const fullMessage = `${CONTEXT}\n\nUser question: ${message}`;

        // Use generateContent instead of chat for simpler interaction
        const result = await model.generateContent(fullMessage);
        const response = await result.response;
        const text = response.text();

        console.log("📥 Received response from Gemini");
        return text || "I processed that, but didn't have a text response.";
    } catch (error: any) {
        console.error("❌ Gemini API Error:", error);
        console.error("Error details:", {
            message: error.message,
            status: error.status,
            statusText: error.statusText
        });

        // Provide more specific error messages
        if (error.status === 404 || error.message?.includes('404')) {
            return "Model not found. The API configuration may need updating. Please contact the site administrator.";
        } else if (error.message?.includes('API key') || error.message?.includes('API_KEY') || error.status === 400) {
            return "API key error. Please check your configuration.";
        } else if (error.message?.includes('quota') || error.status === 429) {
            return "API quota exceeded. Please try again later.";
        } else if (error.message?.includes('SAFETY')) {
            return "I couldn't process that request due to safety filters. Please try rephrasing your question.";
        }

        return `I encountered an error: ${error.message || 'Please try again.'}`;
    }
};