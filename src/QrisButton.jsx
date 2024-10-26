// src/QrisButton.jsx
import { useState } from "react";
import qrImage from "./assets/qris.jpg"; // Import the image

const QrisButton = () => {
  const [showQR, setShowQR] = useState(false);

  const handleShowQR = () => {
    setShowQR(true);
  };

  return (
    <div style={styles.container}>
      {showQR ? (
        <div style={styles.qrContainer}>
          {/* Display the static QR image */}
          <img
            src={qrImage}
            alt='QRIS Code'
            style={styles.qrImage}
          />
          <div style={styles.amountContainer}>
            <span style={styles.currency}>Rp</span>
            <span style={styles.amount}>5.000</span>
            <button
              onClick={() => setShowQR(false)}
              style={styles.clearButton}
            >
              &times;
            </button>
          </div>
          <p style={styles.footerText}>
            Ask friends to scan the QR code or you can add the amount first too.
          </p>
        </div>
      ) : (
        <button
          onClick={handleShowQR}
          style={styles.generateButton}
        >
          Show QRIS
        </button>
      )}
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    textAlign: "center",
    backgroundColor: "#f7f7f7",
  },
  qrContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
  },
  qrImage: {
    width: "200px",
    height: "200px",
    objectFit: "contain",
    marginBottom: "10px",
  },
  amountContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f1f1f1",
    borderRadius: "10px",
    padding: "8px 12px",
    marginTop: "10px",
    marginBottom: "10px",
  },
  currency: {
    fontSize: "18px",
    marginRight: "4px",
  },
  amount: {
    fontSize: "18px",
  },
  clearButton: {
    background: "transparent",
    border: "none",
    fontSize: "16px",
    color: "#888",
    cursor: "pointer",
    marginLeft: "8px",
  },
  footerText: {
    fontSize: "14px",
    color: "#888",
    maxWidth: "300px",
    textAlign: "center",
    marginTop: "10px",
  },
  generateButton: {
    padding: "12px 24px",
    fontSize: "16px",
    cursor: "pointer",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
  },
};

export default QrisButton;
