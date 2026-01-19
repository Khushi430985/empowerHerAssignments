const express = require("express");
const os = require("os");
const dns = require("dns");

const readFileData = require("./read");

const app = express();

// Test route
app.get("/test", (req, res) => {
  res.send("Test route is working!");
});

// Read file route
app.get("/readfile", (req, res) => {
  readFileData((err, data) => {
    if (err) {
      return res.status(500).json({ error: "Unable to read file" });
    }
    res.send(data);
  });
});

// System details route
app.get("/systemdetails", (req, res) => {
  const cpus = os.cpus();

  const details = {
    platform: os.platform(),
    totalMemory: (os.totalmem() / (1024 ** 3)).toFixed(2) + " GB",
    freeMemory: (os.freemem() / (1024 ** 3)).toFixed(2) + " GB",
    cpuModel: cpus[0].model,
    cpuCores: cpus.length
  };

  res.json(details);
});

// Get IP route
app.get("/getip", (req, res) => {
  dns.lookup("masaischool.com", { all: true }, (err, addresses) => {
    if (err) {
      return res.status(500).json({ error: "DNS lookup failed" });
    }

    res.json({
      hostname: "masaischool.com",
      addresses: addresses
    });
  });
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
