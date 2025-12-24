
import { GoogleGenAI } from "@google/genai";
import { SCHOOL_NAME, SCHOOL_LOCATION } from "../constants";

// Safely access API_KEY for different environment setups
const getApiKey = () => {
  try {
    return process.env.API_KEY || '';
  } catch {
    return '';
  }
};

const ai = new GoogleGenAI({ apiKey: getApiKey() });

const SYSTEM_INSTRUCTION = `
You are "Genie", the official AI Counselor for ${SCHOOL_NAME}, located at Near Astal Road, Chhawni, Tonk. 
Your goal is to assist parents and students with info about the school.

Context:
- Founded: 2006
- Vision: To nurture responsible, confident, and well-educated individuals by providing a strong academic foundation, moral values, and a disciplined environment.
- Facilities: Highly Qualified Teachers, CCTV Surveillance, Computer Lab, Outdoor Activities, School Garden.
- Admissions: Open for session 2025-2026.
- Contact: +91 9461042184, +91 6375600294
- Email: gpsstonk@gmail.com
- Personality: Disciplined, warm, helpful.

Rules:
1. Always suggest visiting the campus for detailed inquiries.
2. Keep answers concise.
3. Be professional yet encouraging.
`;

export const getSchoolCounselorResponse = async (userMessage: string) => {
  const key = getApiKey();
  if (!key) {
    return "The AI Counselor is currently being configured. Please call us directly at +91 9461042184 for any inquiries.";
  }

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: userMessage,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
        maxOutputTokens: 500,
      },
    });

    return response.text || "I'm sorry, I couldn't process that. Please contact our office at +91 9461042184.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Our AI Counselor is currently busy. Please feel free to call us at +91 9461042184.";
  }
};
