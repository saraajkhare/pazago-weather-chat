import { useState } from "react";

type Props = {
  onSend: (text: string) => void;
  disabled?: boolean;
};

const ChatInput = ({ onSend, disabled }: Props) => {
  const [value, setValue] = useState("");

  const handleSend = () => {
    if (!value.trim()) return;
    onSend(value);
    setValue("");
  };

  return (
    <div className="border-t px-4 py-4 bg-white dark:bg-gray-900">
      <div className="flex gap-2 max-w-2xl mx-auto">
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
          placeholder="Type your message..."
          disabled={disabled}
          className="flex-1 rounded-xl border px-4 py-2
          bg-white dark:bg-gray-800
          border-gray-300 dark:border-gray-700
          text-gray-900 dark:text-gray-100"
        />
        <button
          onClick={handleSend}
          disabled={disabled}
          className="px-4 py-2 rounded-xl bg-blue-600 text-white"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatInput;
