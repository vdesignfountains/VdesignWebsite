"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";

/**
 * Wraps admin pages with authentication check.
 * Redirects to /admin/login if not authenticated.
 */
export function AdminGuard({ children }) {
  const [status, setStatus] = useState("loading"); // loading | authenticated | unauthenticated
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    fetch("/api/auth/check")
      .then((res) => res.json())
      .then((data) => {
        if (data.authenticated) {
          setStatus("authenticated");
        } else {
          setStatus("unauthenticated");
          router.replace("/admin/login");
        }
      })
      .catch(() => {
        setStatus("unauthenticated");
        router.replace("/admin/login");
      });
  }, [router, pathname]);

  if (status === "loading") {
    return (
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        background: "#1a1410",
        color: "#e8dfd6",
        fontFamily: "var(--font-body, system-ui)",
        fontSize: "1rem",
      }}>
        Loading...
      </div>
    );
  }

  if (status === "unauthenticated") return null;

  return children;
}
