import { useEffect } from "react";
import MessageBubble from "./MessageBubble";
import TypingIndicator from "./TypingIndicator";
import { useWeatherAgent } from "../hooks/useWeatherAgent";

const ChatWindow = () => {
  const {
    messages,
    loading,
    reactToMessage,
    containerRef,
  } = useWeatherAgent();

  useEffect(() => {
    containerRef.current?.scrollTo({
      top: containerRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, containerRef]);

  return (
    <div
      ref={containerRef}
      className="flex-1 overflow-y-auto px-4 py-6 space-y-4"
    >
      {messages.map(msg => (
        <MessageBubble
          key={msg.id}
          message={msg}
          onReact={reactToMessage}
        />
      ))}

      {loading && <TypingIndicator />}
    </div>
  );
};

export default ChatWindow;
