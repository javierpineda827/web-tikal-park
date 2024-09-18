import styles from "./FloatingBanner.module.css"; // Importa como un objeto

const FloatingBanner = ({ message, onClose }) => {
  const environment = import.meta.env.MODE;

  return (
    <>
      {environment === "development" && (
        <div className={styles.floatingBanner}>
          <span>{message || `Current Environment:`}</span>
          <button onClick={onClose} className={styles.closeButton}>
            {environment}
          </button>
        </div>
      )}
    </>
  );
};

export default FloatingBanner;
