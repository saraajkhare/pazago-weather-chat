import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.post("/weather", async (req, res) => {
  try {
    const response = await fetch(
      "https://api-dev.provue.ai/api/webapp/agent/test-agent",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(req.body),
      }
    );

    const data = await response.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "API failed" });
  }
});

app.listen(3001, () =>
  console.log("Backend running on http://localhost:3001")
);
