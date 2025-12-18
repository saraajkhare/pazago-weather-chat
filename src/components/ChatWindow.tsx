import { useState } from "react";
import ChatInput from "./ChatInput";
import MessageBubble from "./MessageBubble";
import TopBar from "./TopBar";
import TypingIndicator from "./TypingIndicator";
import { useWeatherAgent } from "../hooks/useWeatherAgent";

const SUGGESTIONS = [
  "What's the weather in London?",
  "Will it rain tomorrow in Mumbai?",
  "Weather forecast for New York",
];

const ChatWindow = ({ onToggleTheme }: { onToggleTheme: () => void }) => {
  const {
    messages,
    sendMessage,
    loading,
    clearChat,
    reactToMessage,
    containerRef,
  } = useWeatherAgent();

  const [search, setSearch] = useState("");

  const filteredMessages = messages.filter(m =>
    m.content.toLowerCase().includes(search.toLowerCase())
  );

  const exportChat = () => {
    const text = messages.map(m => `[${m.role}] ${m.content}`).join("\n\n");
    const blob = new Blob([text], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "chat-history.txt";
    a.click();
  };

  const isEmpty = messages.length === 0;

  return (
    <div className="h-screen flex flex-col bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <TopBar
        onClear={clearChat}
        onExport={exportChat}
        onToggleTheme={onToggleTheme}
      />

      <div className="border-b px-4 py-2 flex justify-center">
        <input
          placeholder="Search messages..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full max-w-2xl px-3 py-1.5 text-sm border rounded-lg
          bg-white dark:bg-gray-800
          border-gray-300 dark:border-gray-700
          text-gray-900 dark:text-gray-100"
        />
      </div>

      <div ref={containerRef} className="relative flex-1 overflow-y-auto">
        {isEmpty && (
          <div className="absolute inset-0 flex items-center justify-center gap-3">
            {SUGGESTIONS.map(s => (
              <button
                key={s}
                onClick={() => sendMessage(s)}
                className="px-4 py-2 rounded-full
                bg-white dark:bg-gray-800
                border border-gray-300 dark:border-gray-700
                hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                {s}
              </button>
            ))}
          </div>
        )}

        {!isEmpty && (
          <div className="max-w-2xl mx-auto p-4 space-y-4">
            {filteredMessages.map(msg => (
              <MessageBubble
                key={msg.id}
                message={msg}
                onReact={(r) => reactToMessage(msg.id, r)}
              />
            ))}
            {loading && <TypingIndicator />}
          </div>
        )}
      </div>

      <ChatInput onSend={sendMessage} disabled={loading} />
    </div>
  );
};

export default ChatWindow;
