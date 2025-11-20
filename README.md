# Carlo C. Baclao - Developer Portfolio

A modern, interactive, and fully responsive personal portfolio website built for **Carlo C. Baclao**. This application showcases professional experience, technical skills, and projects through a sleek, dark-themed user interface.

Uniquely, this portfolio features an **AI-powered Assistant** (integrated with Google Gemini) that allows visitors to ask natural language questions about Carlo's background, qualifications, and expertise in real-time.

## ✨ Key Features

*   **🤖 AI Assistant**: Integrated **Google Gemini (2.5 Flash)** chatbot that acts as a virtual guide, answering questions about Carlo's resume.
*   **📱 Fully Responsive**: Mobile-first design that adapts flawlessly to desktops, tablets, and phones.
*   **🎨 Modern Aesthetic**: Built with **Tailwind CSS** featuring glassmorphism, smooth animations, and a professional dark mode color palette.
*   **🛣️ Journey Timeline**: An interactive timeline visualizing education and career milestones.
*   **💼 Project Showcase**: Detailed project cards with direct links to repositories and live demos.
*   **🏆 Verified Certificates**: A gallery of professional certifications.

## 🛠️ Tech Stack

*   **Frontend**: React 19, TypeScript
*   **Styling**: Tailwind CSS
*   **AI Integration**: Google GenAI SDK (`@google/genai`)
*   **Icons**: Lucide React

## 🚀 Getting Started

To run this project locally, follow these steps:

### Prerequisites

*   Node.js (v18 or higher)
*   npm or yarn

### Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/leap0920/Portfolio.git
    cd Portfolio
    ```

2.  **Install Dependencies**
    If you are migrating this to a standard local environment (e.g., using Vite), ensure you have the necessary packages:
    ```bash
    npm install react react-dom @google/genai lucide-react
    npm install -D tailwindcss postcss autoprefixer
    ```

3.  **Set up Environment Variables**
    The AI chatbot requires a Google Gemini API Key.
    *   Get your key from [Google AI Studio](https://aistudio.google.com/).
    *   Set the environment variable `API_KEY` in your project configuration (or `.env` file if using Vite/Create React App).

4.  **Run the Application**
    ```bash
    npm run dev
    ```

## 📦 Deployment

This project is a static React application that is perfect for modern hosting platforms.

### Deploy to Vercel (Recommended)

1.  Push your code to a GitHub repository.
2.  Import the project into [Vercel](https://vercel.com/).
3.  In the **Environment Variables** section, add:
    *   **Key**: `API_KEY`
    *   **Value**: Your Google Gemini API Key.
4.  Click **Deploy**.

### Deploy to Netlify

1.  Push your code to GitHub.
2.  Create a "New site from Git" on [Netlify](https://netlify.com/).
3.  In **Site Settings > Build & Deploy > Environment**, add your `API_KEY`.
4.  Click **Deploy**.

## 📂 Project Structure

*   **`components/`**: Reusable UI components (Navbar, Hero, Skills, ChatWidget, etc.)
*   **`services/`**: API integrations (`geminiService.ts` for AI logic)
*   **`constants.ts`**: Centralized data file. **Edit this file** to update the portfolio content (Skills, History, Projects) without touching the logic.
*   **`types.ts`**: TypeScript interfaces for type safety.

## 👤 Author

**Carlo C. Baclao**
*   [GitHub](https://github.com/leap0920)
*   [LinkedIn](https://linkedin.com/in/baclao-carlo-22936435a/)
*   [Email](mailto:baclao.carlo.cometa@gmail.com)

---
*Built with React, Tailwind CSS, and Google Gemini*