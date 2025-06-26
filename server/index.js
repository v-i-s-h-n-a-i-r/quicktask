const express = require('express');
const app = express();
const PORT = 4000;

app.get('/api', (req, res) => {
  res.json({ message: "API connected" });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
