export type Message = {
  id: string;
  role: "user" | "agent";
  content: string;
  timestamp: string;
  reaction?: "up" | "down";
};
