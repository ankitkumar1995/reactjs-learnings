import React, { useEffect, useState } from "react";

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(progressInterval);
          return 100;
        } else {
          return prevProgress + 1;
        }
      });
    }, 1000);
    return () => clearInterval(progressInterval);
  }, []);

  return (
    <div style={styles.container}>
      <h3 style={styles.title}>Progress Bar</h3>
      <div style={styles.barContainer}>
        <div style={{ ...styles.progressBar, width: `${progress}%` }}></div>
      </div>
      <p style={styles.label}>{progress}%</p>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "20px",
    fontFamily: "Arial, sans-serif",
  },
  title: {
    marginBottom: "10px",
    color: "#333",
  },
  barContainer: {
    width: "80%",
    height: "25px",
    backgroundColor: "#f3f3f3",
    borderRadius: "12px",
    overflow: "hidden",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    marginBottom: "10px",
  },
  progressBar: {
    height: "100%",
    backgroundColor: "#4caf50",
    transition: "width 0.5s ease-in-out",
  },
  label: {
    fontSize: "16px",
    color: "#555",
  },
};

export default ProgressBar;
