import { useEffect, useState } from "react";
import ChatWindow from "./components/ChatWindow";

function App() {
  const [dark, setDark] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  return <ChatWindow onToggleTheme={() => setDark(!dark)} />;
}

export default App;
