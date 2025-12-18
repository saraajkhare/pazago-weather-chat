import { useRef, useState } from "react";
import type { Message } from "../types/message";

const messageSound = new Audio("/message.mp3");

export const useWeatherAgent = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    setTimeout(() => {
      containerRef.current?.scrollTo({
        top: containerRef.current.scrollHeight,
        behavior: "smooth",
      });
    }, 50);
  };

  const sendMessage = async (text: string) => {
    if (!text.trim()) return;

    const userMsg: Message = {
      id: crypto.randomUUID(),
      role: "user",
      content: text,
      timestamp: new Date().toLocaleTimeString(),
      status: "sending",
    };

    setMessages(prev => [...prev, userMsg]);
    setLoading(true);
    scrollToBottom();

    try {
      const res = await fetch(
        "https://brief-thousands-sunset-9fcb1c78-485f-4967-ac04-2759a8fa1462.mastra.cloud/api/agents/weatherAgent/stream",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-mastra-dev-playground": "true",
          },
          body: JSON.stringify({
            messages: [{ role: "user", content: text }],
          }),
        }
      );

      setMessages(prev =>
        prev.map(m =>
          m.id === userMsg.id ? { ...m, status: "sent" } : m
        )
      );

      let agentText = "";
      const reader = res.body?.getReader();
      const decoder = new TextDecoder();

      if (reader) {
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          agentText += decoder.decode(value);
        }
      }

      messageSound.play();

      setMessages(prev => [
        ...prev,
        {
          id: crypto.randomUUID(),
          role: "agent",
          content: agentText || "Weather data unavailable.",
          timestamp: new Date().toLocaleTimeString(),
          status: "sent",
        },
      ]);
    } catch {
      setMessages(prev =>
        prev.map(m =>
          m.id === userMsg.id ? { ...m, status: "failed" } : m
        )
      );
    } finally {
      setLoading(false);
      scrollToBottom();
    }
  };

  const reactToMessage = (id: string, reaction: "up" | "down") => {
    setMessages(prev =>
      prev.map(m =>
        m.id === id ? { ...m, reaction } : m
      )
    );
  };

  const clearChat = () => setMessages([]);

  return {
    messages,
    sendMessage,
    loading,
    clearChat,
    reactToMessage,
    containerRef,
  };
};
