const requests = new Map<string, { count: number; resetAt: number }>();

const CLEANUP_INTERVAL = 60 * 1000;
let lastCleanup = Date.now();

function cleanup() {
  const now = Date.now();
  if (now - lastCleanup < CLEANUP_INTERVAL) return;
  lastCleanup = now;
  for (const [key, value] of requests) {
    if (now > value.resetAt) {
      requests.delete(key);
    }
  }
}

export function rateLimit(
  ip: string,
  { maxRequests = 10, windowMs = 60 * 1000 }: { maxRequests?: number; windowMs?: number } = {}
): { success: boolean } {
  cleanup();

  const now = Date.now();
  const entry = requests.get(ip);

  if (!entry || now > entry.resetAt) {
    requests.set(ip, { count: 1, resetAt: now + windowMs });
    return { success: true };
  }

  entry.count++;
  if (entry.count > maxRequests) {
    return { success: false };
  }

  return { success: true };
}
