import { useState } from "react";
import TopBar from "./components/TopBar";
import ChatWindow from "./components/ChatWindow";
import ChatInput from "./components/ChatInput";
import { useWeatherAgent } from "./hooks/useWeatherAgent";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(prev => !prev);
  };

  const {
    messages,
    sendMessage,
    clearChat,
    containerRef,
  } = useWeatherAgent();

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="flex flex-col h-screen bg-white dark:bg-gray-900">
        <TopBar
          onToggleTheme={toggleTheme}
          onClear={clearChat}
          messages={messages}
        />

        <ChatWindow
          messages={messages}
          containerRef={containerRef}
        />

        <ChatInput onSend={sendMessage} />
      </div>
    </div>
  );
}

export default App;
