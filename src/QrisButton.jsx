// src/QrisButton.jsx
import { useState } from "react";

const QrisButton = () => {
  const [showQR, setShowQR] = useState(false);

  const handlePayClick = () => {
    setShowQR(true);
  };

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <h1 style={styles.title}>QRIS Payment</h1>
        <button
          onClick={handlePayClick}
          style={styles.button}
        >
          Pay
        </button>
        {showQR && (
          <div style={styles.qrContainer}>
            <h2 style={styles.subtitle}>Scan this QR Code to Pay</h2>
            <img
              src='https://pbs.twimg.com/media/EjDJnA1UwAAtWvg?format=jpg&name=small'
              alt='QRIS Code'
              style={styles.qrImage}
            />
          </div>
        )}
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#333",
  },
  content: {
    textAlign: "center",
    backgroundColor: "#fff",
    padding: "30px",
    borderRadius: "10px",
    boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.1)",
  },
  title: {
    fontSize: "24px",
    marginBottom: "20px",
    color: "#444",
  },
  button: {
    padding: "12px 24px",
    fontSize: "18px",
    cursor: "pointer",
    backgroundColor: "#000",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    marginBottom: "20px",
  },
  qrContainer: {
    marginTop: "20px",
  },
  subtitle: {
    fontSize: "20px",
    marginBottom: "10px",
    color: "#555",
  },
  qrImage: {
    width: "200px",
    height: "200px",
    objectFit: "contain",
    border: "2px solid #ccc",
    borderRadius: "8px",
  },
};

export default QrisButton;
