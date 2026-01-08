const express = require("express");
const app = express();

app.use(express.json());

// Health check endpoint
app.get("/health", (req, res) => {
  res.status(200).json({ status: "OK" });
});

// Sample multi-tenant API
app.get("/projects", (req, res) => {
  const orgId = req.headers["x-org-id"] || "unknown-org";
  res.json({
    orgId,
    projects: ["Jira Migration", "ALB Setup"]
  });
});

app.listen(3000, () => {
  console.log("Jira API running on port 3000");
});
