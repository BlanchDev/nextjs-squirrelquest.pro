export function formatTimeAgo(timestamp) {
  const now = new Date();
  const past = new Date(Number(timestamp)); // Convert timestamp to number
  const diffInSeconds = Math.floor((now - past) / 1000);

  // Define time intervals
  const intervals = {
    year: 31_536_000,
    m: 2_592_000,
    w: 604_800,
    d: 86_400,
    h: 3_600,
    min: 60,
    sec: 1,
  };

  // Find the most suitable time interval
  for (const [unit, seconds] of Object.entries(intervals)) {
    const interval = Math.floor(diffInSeconds / seconds);

    if (interval >= 1) {
      return `${interval} ${unit} ago`;
    }
  }

  return "Just Now";
}
