const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3000;

app.use(cors());

app.get("/api/intern", (req, res) => {
  res.json({
    name: "Sumairaa",
    referralCode: "sumairaa2025",
    amountRaised: 12345,
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
app.on('error', (err) => {
  console.error('Server error:', err);
});
