import type { Message } from "../types/message";

export type TopBarProps = {
  onToggleTheme: () => void;
  onClear: () => void;
  messages: Message[];
};

const TopBar = ({ onToggleTheme, onClear, messages }: TopBarProps) => {
  const exportChat = () => {
    const text = messages
      .map(m => `${m.role.toUpperCase()}: ${m.content}`)
      .join("\n\n");

    const blob = new Blob([text], { type: "text/plain" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "chat-history.txt";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="flex items-center justify-between px-4 py-3 border-b dark:border-gray-700">
      <h1 className="text-lg font-semibold dark:text-white">
        Weather Agent
      </h1>

      <div className="flex gap-2">
        <button onClick={exportChat}>Export</button>
        <button onClick={onClear}>Clear</button>
        <button onClick={onToggleTheme}>Toggle theme</button>
      </div>
    </div>
  );
};

export default TopBar;
