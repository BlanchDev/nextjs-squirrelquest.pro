import express from "express";
const router = express.Router();

router.get("/contact", (req, res) => {
  res.json({ message: "Express /contact route" });
});

export default router;
