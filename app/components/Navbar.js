"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import styles from "./Navbar.module.css";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/gallery", label: "Gallery" },
    { href: "/videos", label: "Videos" },
    { href: "/contact", label: "Contact" },
  ];

  const isHome = pathname === "/";
  const useInverse = !isHome && !isScrolled && !isMobileOpen;

  return (
    <>
    <header
      className={`${styles.header} ${isScrolled ? styles.scrolled : ""} ${useInverse ? styles.inverse : ""}`}
      id="main-nav"
    >
      <nav className={styles.nav}>
        <Link href="/" className={styles.logo} aria-label="V Design Home">
          <Image src="/images/logo.png" alt="V Design Logo" width={56} height={56} className={styles.logoImage} />
          <div className={styles.logoText}>
            <span className={styles.logoName}>V Design</span>
            <span className={styles.logoTagline}>Fountains & Waterfalls</span>
          </div>
        </Link>

        <ul className={styles.navLinks}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`${styles.navLink} ${
                  pathname === link.href ? styles.active : ""
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link href="/contact" className={`btn btn--primary btn--sm ${styles.ctaBtn}`}>
          Get a Quote
        </Link>

        <button
          className={`${styles.hamburger} ${isMobileOpen ? styles.hamburgerOpen : ""}`}
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={isMobileOpen}
          id="mobile-menu-toggle"
        >
          <span />
          <span />
          <span />
        </button>
      </nav>
    </header>

    {/* Mobile drawer */}
    <div
      className={`${styles.mobileDrawer} ${isMobileOpen ? styles.mobileDrawerOpen : ""}`}
    >
      <div className={styles.mobileDrawerInner}>
        <ul className={styles.mobileLinks}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`${styles.mobileLink} ${
                  pathname === link.href ? styles.active : ""
                }`}
                onClick={() => setIsMobileOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <Link
          href="/contact"
          className={`btn btn--gold btn--lg ${styles.mobileCta}`}
          onClick={() => setIsMobileOpen(false)}
        >
          Get a Free Quote
        </Link>
      </div>
    </div>

    {/* Overlay */}
    {isMobileOpen && (
      <div
        className={styles.overlay}
        onClick={() => setIsMobileOpen(false)}
        aria-hidden="true"
      />
    )}
    </>
  );
}
