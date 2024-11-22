export const noCache = (req, res, next) => {
  res.set(
    "Cache-Control",
    "no-store, no-cache, must-revalidate, proxy-revalidate",
  );
  res.set("Pragma", "no-cache");
  res.set("Expires", "0");
  next();
};

export const withCache =
  (duration = 60) =>
  (req, res, next) => {
    res.set("Cache-Control", `public, max-age=${duration}`);
    next();
  };
