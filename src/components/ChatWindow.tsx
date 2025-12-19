import MessageBubble from "./MessageBubble";
import TypingIndicator from "./TypingIndicator";
import type { Message } from "../types/message";
import type { RefObject } from "react";

type Props = {
  messages: Message[];
  containerRef: RefObject<HTMLDivElement | null>;
};

const ChatWindow = ({ messages, containerRef }: Props) => {
  return (
    <div
      ref={containerRef}
      className="flex-1 overflow-y-auto px-4 py-6 space-y-4"
    >
      {messages.length === 0 && (
        <p className="text-center text-gray-400">
          Ask me about the weather in any city.
        </p>
      )}

      {messages.map(message => (
        <MessageBubble key={message.id} message={message} />
      ))}

      <TypingIndicator />
    </div>
  );
};

export default ChatWindow;
