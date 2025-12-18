import { useRef, useState } from "react";
import type { Message } from "../types/message";

const messageSound = new Audio("/message.mp3");

export const useWeatherAgent = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

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

    setLoading(true);

    const userMessage: Message = {
      id: crypto.randomUUID(),
      role: "user",
      content: text,
      timestamp: new Date().toLocaleTimeString(),
    };

    setMessages(prev => [...prev, userMessage]);
    scrollToBottom();

    try {
      const res = await fetch("http://localhost:3001/weather", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    prompt: text,
    stream: false,
  }),
});


      if (!res.ok) {
        throw new Error("API failed");
      }

      const data = await res.json();

      const agentMessage: Message = {
        id: crypto.randomUUID(),
        role: "agent",
        content: data?.data?.response ?? "No response received.",
        timestamp: new Date().toLocaleTimeString(),
      };

      setMessages(prev => [...prev, agentMessage]);
      messageSound.play().catch(() => {});
    } catch {
      setMessages(prev => [
        ...prev,
        {
          id: crypto.randomUUID(),
          role: "agent",
          content: "Something went wrong. Please try again.",
          timestamp: new Date().toLocaleTimeString(),
        },
      ]);
    } finally {
      setLoading(false);
      scrollToBottom();
    }
  };

  const reactToMessage = (id: string, reaction: "up" | "down") => {
    setMessages(prev =>
      prev.map(msg =>
        msg.id === id ? { ...msg, reaction } : msg
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
