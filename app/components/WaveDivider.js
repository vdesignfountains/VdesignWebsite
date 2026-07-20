import styles from "./WaveDivider.module.css";

export function WaveDivider({ flip = false, color = "var(--color-background)" }) {
  return (
    <div
      className={`${styles.wave} ${flip ? styles.flip : ""}`}
      aria-hidden="true"
    >
      <svg viewBox="0 0 1440 80" preserveAspectRatio="none">
        <path
          d="M0,40 C180,80 360,0 540,40 C720,80 900,0 1080,40 C1260,80 1380,40 1440,40 L1440,80 L0,80 Z"
          fill={color}
        />
      </svg>
    </div>
  );
}
