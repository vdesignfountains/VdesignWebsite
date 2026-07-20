import Link from "next/link";
import styles from "./CTABanner.module.css";

export function CTABanner({
  title = "Ready to Bring Your Dream Water Feature to Life?",
  subtitle = "Let's create something extraordinary together. Reach out for a free consultation and let us craft the perfect fountain or waterfall for your space.",
  buttonText = "Get in Touch",
  buttonHref = "/contact",
}) {
  return (
    <section className={styles.cta} id="cta-banner">
      <div className={styles.bgPattern} aria-hidden="true" />
      <div className={`container ${styles.inner}`}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.subtitle}>{subtitle}</p>
        <Link href={buttonHref} className="btn btn--gold btn--lg">
          {buttonText}
        </Link>
      </div>
    </section>
  );
}
