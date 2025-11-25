import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || ''; // Ensure this is set in your Vercel/Render env vars

let aiClient: GoogleGenAI | null = null;

if (apiKey) {
  aiClient = new GoogleGenAI({ apiKey });
}

export const generateAIResponse = async (userPrompt: string): Promise<string> => {
  if (!aiClient) {
    return "I am currently offline (API Key missing). Please contact the admin.";
  }

  try {
    const response = await aiClient.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: userPrompt,
      config: {
        systemInstruction: `You are the smart assistant for 'RC PATEL', a premium Civil Engineering and POP Interior Design firm. 
        Your tone is professional, polite, and knowledgeable about construction.
        
        Services we offer:
        - Civil Construction (Residential & Commercial)
        - POP False Ceilings (Modern, Classic, Grid)
        - Full Home Renovation
        - Interior Design
        - Painting & Waterproofing

        If asked about prices, give a rough range but advise them to 'Contact RC Patel for a detailed quote'.
        Keep answers concise (under 100 words) unless asked for details.
        Always guide them to the 'Contact Us' page or the enquiry form.
        `,
      }
    });

    return response.text || "I apologize, I couldn't generate a response at the moment.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having trouble connecting to the server. Please try again later.";
  }
};
