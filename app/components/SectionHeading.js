import styles from "./SectionHeading.module.css";

export function SectionHeading({
  subtitle,
  title,
  description,
  align = "center",
  light = false,
}) {
  return (
    <div
      className={`${styles.heading} ${styles[align]} ${light ? styles.light : ""}`}
    >
      {subtitle && <span className={styles.subtitle}>{subtitle}</span>}
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.divider}>
        <span className={styles.dividerLine} />
        <svg
          className={styles.dividerIcon}
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M12 2C12 2 4 10 4 15C4 19.418 7.582 22 12 22C16.418 22 20 19.418 20 15C20 10 12 2 12 2Z"
            fill="currentColor"
            opacity="0.6"
          />
        </svg>
        <span className={styles.dividerLine} />
      </div>
      {description && <p className={styles.description}>{description}</p>}
    </div>
  );
}
