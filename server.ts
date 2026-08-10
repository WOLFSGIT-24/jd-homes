import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI, Type } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Route for Ayurvedic Consultation
  app.post("/api/consultation", async (req, res) => {
    try {
      const { name, age, primaryGoal, sleepPattern, digestionQuality, energyLevels, stressLevel, bodyFrame, skinType } = req.body;
      
      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) {
        return res.status(500).json({ error: "Gemini API key is not configured. Please add GEMINI_API_KEY to secrets." });
      }

      const ai = new GoogleGenAI({
        apiKey: apiKey,
        httpOptions: {
          headers: {
            'User-Agent': 'aistudio-build',
          }
        }
      });

      const prompt = `You are an expert Ayurvedic Acharya and Wellness Counselor at Prashanthavana Ayurvedic Centre. 
      Analyze the following guest profile and generate a highly customized, authentic, and comforting Ayurvedic Wellness Plan.
      
      Guest Profile:
      - Name: ${name || "Seeker"}
      - Age: ${age || "Unspecified"}
      - Primary Wellness Goal: ${primaryGoal || "General Balance & Detox"}
      - Sleep Pattern: ${sleepPattern || "Average"}
      - Digestion Quality: ${digestionQuality || "Irregular"}
      - Energy Levels: ${energyLevels || "Fluctuating"}
      - Stress Level: ${stressLevel || "Moderate"}
      - Body Frame: ${bodyFrame || "Medium"}
      - Skin Type: ${skinType || "Normal"}
      
      Provide a highly structured plan in JSON format with the following fields:
      1. doshaAnalysis: Short summary of their probable dominant Dosha (Vata, Pitta, or Kapha) based on their traits, explaining why in a warm, encouraging tone.
      2. primaryGoalRelevance: How their wellness goal fits with their estimated constitution.
      3. dietPlan: A customized Sattvic diet plan with specific foods to favor and foods to avoid.
      4. dinacharya: A bulleted list of daily routine practices (morning, afternoon, evening) tailored to them.
      5. treatments: A list of 2-3 specific Prashanthavana treatments (from: Abhyanga, Shirodhara, Panchakarma, Elakizhi, Dravya Guna herbal wraps) with explanations of how each helps their specific profile.
      6. herbalRecommendations: 2-3 herbs (e.g. Ashwagandha, Brahmi, Shatavari, Triphala, Turmeric) with clear benefits.
      7. lifestyleAdvice: Specific mental, yoga, or forest-bathing guidelines.`;

      const response = await ai.models.generateContent({
        model: "gemini-3.6-flash",
        contents: prompt,
        config: {
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              doshaAnalysis: { type: Type.STRING, description: "Detailed summary of dominant Dosha, its traits, and current state" },
              primaryGoalRelevance: { type: Type.STRING, description: "Relevance of their goals to their Dosha" },
              dietPlan: {
                type: Type.OBJECT,
                properties: {
                  summary: { type: Type.STRING },
                  foodsToFavor: { type: Type.ARRAY, items: { type: Type.STRING } },
                  foodsToAvoid: { type: Type.ARRAY, items: { type: Type.STRING } }
                },
                required: ["summary", "foodsToFavor", "foodsToAvoid"]
              },
              dinacharya: {
                type: Type.ARRAY,
                items: {
                  type: Type.OBJECT,
                  properties: {
                    timeOfDay: { type: Type.STRING, description: "Morning, Afternoon, or Evening" },
                    practiceName: { type: Type.STRING },
                    description: { type: Type.STRING }
                  },
                  required: ["timeOfDay", "practiceName", "description"]
                }
              },
              treatments: {
                type: Type.ARRAY,
                items: {
                  type: Type.OBJECT,
                  properties: {
                    name: { type: Type.STRING },
                    benefits: { type: Type.STRING }
                  },
                  required: ["name", "benefits"]
                }
              },
              herbalRecommendations: {
                type: Type.ARRAY,
                items: {
                  type: Type.OBJECT,
                  properties: {
                    herbName: { type: Type.STRING },
                    useInstructions: { type: Type.STRING }
                  },
                  required: ["herbName", "useInstructions"]
                }
              },
              lifestyleAdvice: { type: Type.STRING, description: "Yoga, breathing, and forest walk recommendations" }
            },
            required: [
              "doshaAnalysis",
              "primaryGoalRelevance",
              "dietPlan",
              "dinacharya",
              "treatments",
              "herbalRecommendations",
              "lifestyleAdvice"
            ]
          }
        }
      });

      const responseText = response.text || "{}";
      const parsedData = JSON.parse(responseText.trim());
      res.json(parsedData);
    } catch (error: any) {
      console.error("Consultation Generation Error:", error);
      res.status(500).json({ error: error?.message || "An unexpected error occurred during consultation." });
    }
  });

  // Serve static files in production or hook Vite in development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
