import type { Message } from "../types/message";

type Props = {
  message: Message;
  onReact?: (id: string, reaction: "up" | "down") => void;
};

const MessageBubble = ({ message, onReact }: Props) => {
  const isUser = message.role === "user";

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[70%] rounded-lg px-4 py-2 ${
          isUser
            ? "bg-blue-600 text-white"
            : "bg-gray-100 text-gray-900"
        }`}
      >
        <p className="whitespace-pre-wrap">{message.content}</p>

        <div className="mt-1 flex items-center justify-between text-xs opacity-70">
          <span>{message.timestamp}</span>

          {!isUser && onReact && (
            <div className="flex gap-2">
              <button
                onClick={() => onReact(message.id, "up")}
                className={message.reaction === "up" ? "opacity-100" : "opacity-50"}
              >
                👍
              </button>
              <button
                onClick={() => onReact(message.id, "down")}
                className={message.reaction === "down" ? "opacity-100" : "opacity-50"}
              >
                👎
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MessageBubble;
