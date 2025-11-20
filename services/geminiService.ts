import { GoogleGenAI, Chat } from "@google/genai";
import { PORTFOLIO_OWNER, SKILLS, PROJECTS, CERTIFICATES, INTRO_TEXT, EXPERIENCE } from '../constants';

const apiKey = process.env.API_KEY || '';
let ai: GoogleGenAI | null = null;

try {
    if (apiKey) {
        ai = new GoogleGenAI({ apiKey });
    } else {
        console.warn("Gemini API Key is missing. Chat features will be disabled.");
    }
} catch (error) {
    console.error("Failed to initialize GoogleGenAI", error);
}

const SYSTEM_INSTRUCTION = `
You are an advanced AI assistant for ${PORTFOLIO_OWNER}'s interactive portfolio.
Your persona is professional yet enthusiastic, knowledgeable about software engineering, and eager to highlight Carlo's skills.

Goal: Answer visitor questions about Carlo based strictly on the following data.

Data:
- Bio: ${INTRO_TEXT}
- Education & Experience: ${EXPERIENCE.map(e => `${e.role} at ${e.company} (${e.duration}) [Type: ${e.type} - ${e.description.join('. ')}]`).join('; ')}
- Skills: ${SKILLS.map(s => s.name).join(', ')}
- Projects: ${PROJECTS.map(p => `${p.title} (${p.description})`).join('; ')}
- Certificates: ${CERTIFICATES.map(c => `${c.title} from ${c.issuer}`).join('; ')}

Guidelines:
- If asked about specific certificates, you have a list of ${CERTIFICATES.length} certificates including Agile, Flutter, C++, and Cybersecurity.
- If asked about work history, mention the Data Encoder role at State Lab Clinics.
- Keep answers concise, engaging, and in the first person (representing Carlo) or third person (as an assistant) - stay consistent as an assistant.
- If the answer isn't in the data, suggest they contact Carlo directly via the email link in the footer.
`;

let chatSession: Chat | null = null;

export const getChatSession = () => {
    if (!ai) return null;
    if (!chatSession) {
        chatSession = ai.chats.create({
            model: 'gemini-2.5-flash',
            config: {
                systemInstruction: SYSTEM_INSTRUCTION,
            }
        });
    }
    return chatSession;
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
    const chat = getChatSession();
    if (!chat) {
        return "I'm sorry, but my connection to the neural net (API Key) is offline. Please email Carlo directly!";
    }

    try {
        const result = await chat.sendMessage({ message });
        return result.text || "I processed that, but didn't have a text response.";
    } catch (error) {
        console.error("Gemini API Error:", error);
        return "I encountered a glitch in the matrix. Please try again.";
    }
};