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
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0 Safari/537.36",
        "Accept": "application/json, text/plain, */*",
        "Accept-Language": "en-US,en;q=0.9",
        "Referer": "https://www.swiggy.com/",
        "Cookie":
          "__SW=9oaFD7OiG8WXSrmDXUmN0qoyQSJT2PGD; _device_id=1fe685ad-a740-ba9d-8062-7d67c161043c; userLocation={%22lat%22:28.5649034%2C%22lng%22:77.2403317%2C%22address%22:%22Lajpat%20Nagar%2C%20New%20Delhi%2C%20Delhi%2C%20India%22%2C%22area%22:%22%22%2C%22showUserDefaultAddressHint%22:false}; _guest_tid=029e5597-66fb-40e9-880c-6d0dafa5e659; _sid=mme0b393-543d-4981-858e-6615f9498072; fontsLoaded=1; _gcl_au=1.1.689742242.1756716516; _gid=GA1.2.1599537181.1756716516; _gat_0=1; _ga=GA1.1.1067284384.1724245472; _ga_34JYJ0BCRN=GS2.1.s1756716516$o3$g0$t1756716535$j41$l0$h0; _ga_YE38MFJRBZ=GS2.1.s1756716516$o1$g0$t1756716535$j41$l0$h0",
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

app.listen(8080, () => {
  console.log("Server running on http://localhost:8080");
});
