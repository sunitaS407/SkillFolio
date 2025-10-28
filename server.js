import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import chatbotRoute from "./api/chatbot.js";

dotenv.config();

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Route
app.use("/api/chatbot", chatbotRoute);

app.listen(PORT, () => {
  console.log("Server running on port", PORT);
  console.log("OPENAI_API_KEY:", process.env.OPENAI_API_KEY);
});
