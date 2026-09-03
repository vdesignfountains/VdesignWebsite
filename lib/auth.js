import crypto from "crypto";

/* ============================================================
   Admin Credentials
   Change these to your preferred username and password.
   The password is hashed at module load time for security.
   ============================================================ */
const ADMIN_USERNAME = process.env.ADMIN_USERNAME || "vidifalak";
const ADMIN_PASSWORD_HASH = crypto
  .createHash("sha256")
  .update(process.env.ADMIN_PASSWORD || "20132016")
  .digest("hex");

/* ============================================================
   Session Configuration
   ============================================================ */
const SECRET =
  process.env.ADMIN_SECRET || "vdesign-admin-secret-key-2026-fallback";
const COOKIE_NAME = "vdesign_admin_session";
const SESSION_DURATION_MS = 24 * 60 * 60 * 1000; // 24 hours

/**
 * Verify admin credentials against hardcoded values.
 */
export function verifyCredentials(username, password) {
  const inputHash = crypto
    .createHash("sha256")
    .update(password)
    .digest("hex");
  return (
    username === ADMIN_USERNAME &&
    crypto.timingSafeEqual(Buffer.from(inputHash), Buffer.from(ADMIN_PASSWORD_HASH))
  );
}

/**
 * Create a signed session token: "timestamp.hmac_signature"
 */
export function createSessionToken() {
  const timestamp = Date.now().toString();
  const signature = crypto
    .createHmac("sha256", SECRET)
    .update(timestamp)
    .digest("hex");
  return `${timestamp}.${signature}`;
}

/**
 * Verify a session token is valid and not expired.
 */
export function verifySessionToken(token) {
  if (!token || typeof token !== "string") return false;

  const parts = token.split(".");
  if (parts.length !== 2) return false;

  const [timestamp, signature] = parts;
  if (!timestamp || !signature) return false;

  // Recompute expected signature
  const expected = crypto
    .createHmac("sha256", SECRET)
    .update(timestamp)
    .digest("hex");

  // Timing-safe comparison
  try {
    const valid = crypto.timingSafeEqual(
      Buffer.from(signature),
      Buffer.from(expected)
    );
    if (!valid) return false;
  } catch {
    return false;
  }

  // Check expiration
  const age = Date.now() - parseInt(timestamp, 10);
  return age >= 0 && age < SESSION_DURATION_MS;
}

export { COOKIE_NAME };
