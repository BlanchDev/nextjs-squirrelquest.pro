import express from "express";
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api/test", (req, res) => {
  res.json({ message: "Express server is running!" });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
