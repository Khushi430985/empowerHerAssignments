let requestCounts = {};
let startTime = Date.now();

export default function rateLimiter(req, res, next) {
  const currentTime = Date.now();

  if (currentTime - startTime > 60000) {
    requestCounts = {};
    startTime = currentTime;
  }

  const ip = req.ip;

  requestCounts[ip] = (requestCounts[ip] || 0) + 1;

  if (requestCounts[ip] > 15) {
    return res.status(429).json({
      error: "Too many requests, please try again later"
    });
  }

  next();
}
