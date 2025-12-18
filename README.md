
# 🌦 Weather Agent Chat Interface

This is a responsive chat application built using **React and TypeScript** that allows users to interact with a weather agent through a streaming API.

The project was created as part of the **Frontend Engineer Assignment for Pazago**, with a focus on clean UI, smooth user experience, and correct API integration.

## ✨ What this project does

- Lets users ask weather-related questions in a chat format  
- Displays user messages on the right and agent responses on the left  
- Shows loading indicators while the agent is responding  
- Automatically scrolls to the latest message  
- Works smoothly on mobile, tablet, and desktop screens  

The UI follows a **mobile-first approach** and matches the design expectations mentioned in the assignment.

## 🛠 Tech Stack Used

- **React**
- **TypeScript**
- **Vite**
- **Tailwind CSS**

## 🚀 How to run the project locally

Follow the steps below to run the application on your system:

### 1️⃣ Clone the repository

```bash
git clone <YOUR_GITHUB_REPO_LINK>
cd pazago-weather-chat
````

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Start the development server

```bash
npm run dev
```

Once the server starts, open the browser and go to:

```
http://localhost:5173
```

## 🔌 API Details

The application connects to the Weather Agent Streaming API provided in the assignment.

**API Endpoint:**

```
POST https://brief-thousands-sunset-9fcb1c78-485f-4967-ac04-2759a8fa1462.mastra.cloud/api/agents/weatherAgent/stream
```

The `threadId` used in the request body is set to my college roll number as required:

```
2024510028
```

## 💬 Example Questions You Can Try

* What's the weather in London?
* Will it rain tomorrow in Mumbai?
* Weather forecast for New York


## 📱 Responsive Design

* Mobile-first design approach
* Fully responsive on mobile, tablet, and desktop
* Minimum supported width: **320px**

## ⚠️ Known Limitations

* Chat history is not persisted after page refresh
* Error handling is basic and focused on user feedback

## 👤 Author

**Name:** Sara Khare (MCA)
**Role:** Frontend Engineer Candidate

## 🧠 Approach

The goal of this project was to build a clean, responsive chat interface that allows users to interact with a weather agent through a streaming API.

I started by setting up a React + Vite + TypeScript project and structured the application into small, reusable components such as the chat window, message bubble, input area, and top bar. A custom React hook (`useWeatherAgent`) was used to handle API communication, message state management, loading states, auto-scrolling, and error handling.

The UI was designed using **Tailwind CSS** with a mobile-first approach to ensure responsiveness across devices. Special attention was given to user experience by adding features like typing indicators, timestamps, disabled input during API calls, and smooth scrolling.

The streaming API response is read incrementally and displayed once the full response is received, ensuring reliable handling of partial chunks and errors.


## 📝 Assumptions

* The weather agent API is assumed to be **always available** and does not require authentication beyond the provided headers.
* The API response is assumed to return **valid readable stream data**.
* Only a **single chat thread** is required for this assignment.
* Weather queries are assumed to be **natural language inputs** (e.g., “What’s the weather in London?”).
* UI design reference from the provided Figma file is treated as a **guideline**, not a strict pixel-perfect requirement.


## ⚠️ Known Limitations & Areas for Improvement

* Real-time **word-by-word streaming display** can be improved by rendering partial chunks instead of waiting for the full response.
* Message history is stored only in memory; it resets on page refresh. Persisting data using localStorage or a backend would improve usability.
* Advanced accessibility features (ARIA labels, screen reader support) can be further enhanced.
* Unit tests (Jest / React Testing Library) can be added for better test coverage.
* Dark mode is implemented at a basic level and can be expanded with system theme detection.
* Exporting chat history currently supports basic text output and can be extended to support multiple formats (PDF/JSON).




