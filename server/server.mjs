import express from "express";
import cors from "cors";
import fetch from "node-fetch";

const app = express();
app.use(cors());

app.get("/swiggy", async (req, res) => {
  try {
    const swiggyURL =
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5649034&lng=77.2403317&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";

    const response = await fetch(swiggyURL, {
      headers: {
        "User-Agent": "Mozilla/5.0", // Pretend to be a browser
      },
    });

    if (!response.ok) {
      throw new Error(`Swiggy API error: ${response.status}`);
    }

    const data = await response.json();
    res.json(data);
  } catch (err) {
    console.error("Server error:", err.message);
    res.status(500).json({ error: "Failed to fetch data from Swiggy" });
  }
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
