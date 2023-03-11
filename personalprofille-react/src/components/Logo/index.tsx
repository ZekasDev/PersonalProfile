import styles from "./Logo.module.scss";

export function Logo() {
  return (
    <div className={styles.logo}>
      <h2 className={styles.logoPrefix}>
        Zekas<span className={styles.logoSuffix}>Dev</span>
      </h2>
    </div>
  );
}
