# Pazago Weather Chat

Pazago Weather Chat is a simple chat-based web application that allows users to ask natural language questions about the weather in different cities and receive detailed responses in real time.

This project was built as part of a frontend assignment, with emphasis on clean UI, correct API integration, and a practical, production-style architecture.

---

## Features

* Chat-based weather queries
* Real-time responses from a weather agent
* Automatic scroll to latest message
* Message timestamps
* Message reactions (thumbs up / thumbs down)
* Light and dark theme toggle
* Export chat history
* Graceful error handling

---

## Tech Stack

**Frontend**

* React
* TypeScript
* Vite
* Tailwind CSS

**Backend**

* Node.js
* Express.js

---

## Project Structure

```
pazago-weather-chat
├── server.js
├── src
│   ├── components
│   ├── hooks
│   ├── types
│   ├── App.tsx
│   └── main.tsx
├── public
├── README.md
└── package.json
```

---

## Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/<your-username>/pazago-weather-chat.git
cd pazago-weather-chat
```

---

### 2. Install dependencies

```bash
npm install
```

---

### 3. Start the backend server

```bash
node server.js
```

The backend server runs on:

```
http://localhost:3001
```

---

### 4. Start the frontend application

```bash
npm run dev
```

The frontend will be available at:

```
http://localhost:5173
```
## API Integration Approach

The external weather API used in this project does not allow direct requests from the browser due to CORS restrictions.

To handle this correctly, a Node.js Express backend is used as a proxy between the frontend and the external API.
### Request flow:
```
React Frontend → Express Backend → External Weather API
React Frontend ← Express Backend ← External Weather API
```
This approach reflects common real-world production setups and avoids CORS-related issues.

## Brief Explanation of the Approach

The application is designed as a conversational interface to make weather queries more natural for users.
A custom React hook (`useWeatherAgent`) is responsible for managing messages, API calls, loading state, and UI updates.

The backend acts as a lightweight proxy layer that forwards requests to the weather agent API and returns the response to the frontend.

## Assumptions Made

* Users will primarily ask weather-related questions
* A single weather agent endpoint is sufficient
* Streaming responses are not required for this assignment
* Chat data does not need to persist across page reloads

## Known Limitations and Areas for Improvement

* Chat history resets on refresh
* No user authentication or persistence
* Streaming responses can be added for improved UX
* Backend can be deployed for production use
* More detailed API error messages can be surfaced to users

## Conclusion

This project demonstrates a clean frontend implementation, proper API handling, and a practical separation between frontend and backend concerns.
The focus was on writing readable, maintainable code while keeping the user experience simple and intuitive.
