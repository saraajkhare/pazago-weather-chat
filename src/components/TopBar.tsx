type Props = {
  onClear: () => void;
  onExport: () => void;
  onToggleTheme: () => void;
};

const TopBar = ({ onClear, onExport, onToggleTheme }: Props) => {
  return (
    <div className="border-b px-4 py-3 flex justify-between items-center
      bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800">
      <h1 className="font-medium text-sm">🌦 Weather Agent</h1>
      <div className="flex gap-4 text-xs">
        <button onClick={onToggleTheme}>🌙</button>
        <button onClick={onExport}>Export</button>
        <button onClick={onClear} className="text-red-500">Clear</button>
      </div>
    </div>
  );
};

export default TopBar;
