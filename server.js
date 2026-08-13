const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

let latestLocation = null;

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.post("/api/location", (req, res) => {
  const { latitude, longitude, accuracy, sharedAt } = req.body;

  if (
    typeof latitude !== "number" ||
    typeof longitude !== "number" ||
    !Number.isFinite(latitude) ||
    !Number.isFinite(longitude)
  ) {
    return res.status(400).json({ error: "Invalid location data." });
  }

  latestLocation = {
    latitude,
    longitude,
    accuracy: typeof accuracy === "number" ? accuracy : null,
    sharedAt: sharedAt || new Date().toISOString()
  };

  res.json({ ok: true });
});

app.get("/api/location", (req, res) => {
  res.json(latestLocation || { location: null });
});

app.listen(PORT, () => {
  console.log(`Location sharing app running at http://localhost:${PORT}`);
});