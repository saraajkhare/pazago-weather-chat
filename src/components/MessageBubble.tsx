import type { Message } from "../types/message";
import WeatherIcon from "./WeatherIcon";

type Props = {
  message: Message;
  onReact: (reaction: "up" | "down") => void;
};

const MessageBubble = ({ message, onReact }: Props) => {
  const isUser = message.role === "user";

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"} animate-fadeIn`}>
      <div
        className={`max-w-[80%] px-4 py-2 rounded-2xl text-sm ${
          isUser
            ? "bg-blue-600 text-white rounded-br-md"
            : "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-bl-md"
        }`}
      >
        {!isUser && <WeatherIcon text={message.content} />}

        <p className="mt-1">{message.content}</p>

        <div className="flex justify-between items-center mt-1 text-[10px] opacity-70">
          <span>{message.timestamp}</span>
          {isUser && (
            <span>
              {message.status === "sending" && "⏳"}
              {message.status === "sent" && "✔✔"}
              {message.status === "failed" && "❌"}
            </span>
          )}
        </div>

        <div className="flex gap-2 mt-1 text-xs justify-end">
          <button onClick={() => onReact("up")}>👍</button>
          <button onClick={() => onReact("down")}>👎</button>
        </div>
      </div>
    </div>
  );
};

export default MessageBubble;
