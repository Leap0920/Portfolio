# Carlo C. Baclao - Developer Portfolio

A modern, interactive, and fully responsive personal portfolio website built for Carlo C. Baclao, an aspiring Software Engineer and IT student. This portfolio showcases his technical skills, projects, certifications, and professional journey through a sleek, dark-themed user interface.

## 🚀 Key Features

*   **🤖 AI-Powered Assistant**: Integrated **Google Gemini** chatbot (Gemini 2.5 Flash) that acts as a virtual assistant. It answers visitor questions about Carlo's skills, experience, and background in real-time using natural language.
*   **📱 Fully Responsive**: Optimized for all devices, from large desktop screens to mobile phones, ensuring a seamless experience everywhere.
*   **🎨 Modern UI/UX**: Features glassmorphism, smooth scroll animations, sticky navigation, and interactive hover effects using Tailwind CSS.
*   **timeline Journey**: A visual timeline displaying education and work history.
*   **💼 Project Showcase**: Dedicated cards for projects with links to GitHub repositories and live demos.
*   **🏆 Certification Gallery**: Grid display of professional certifications.

## 🛠️ Tech Stack

*   **Frontend**: React 19 (TypeScript)
*   **Styling**: Tailwind CSS
*   **Icons**: Lucide React
*   **AI Integration**: Google GenAI SDK (@google/genai)

## ⚙️ Configuration

### AI Chatbot Setup
The chatbot features rely on the Google Gemini API. The application is configured to look for the API key in the environment variables.

*   **Variable Name**: `process.env.API_KEY`
*   **Required**: Yes (for Chat Widget functionality)

## 📂 Project Structure

*   **`components/`**: Reusable UI components (Navbar, Hero, Skills, ChatWidget, etc.)
*   **`services/`**: API integrations (`geminiService.ts` for AI logic)
*   **`constants.ts`**: Centralized data file containing all portfolio content (Projects, Experience, Skills). Edit this file to update the site content without changing the code.
*   **`types.ts`**: TypeScript interfaces ensuring type safety across the application.

## 👤 Author

**Carlo C. Baclao**
*   [GitHub](https://github.com/leap0920)
*   [LinkedIn](https://linkedin.com/in/baclao-carlo-22936435a/)

---
*Built with React, Tailwind CSS, and Google Gemini AI*