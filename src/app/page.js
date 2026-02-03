"use client";

import { useState } from "react";

export default function Home() {
  const [balance, setBalance] = useState(1000);
  const [pnl, setPnl] = useState(0);

  function simulateTrade() {
    const change = Math.floor(Math.random() * 200 - 100);
    setPnl(pnl + change);
    setBalance(balance + change);
  }

  return (
    <main style={styles.container}>
      <h1 style={styles.title}>📈 Trading Dashboard</h1>

      <div style={styles.card}>
        <p>Balance</p>
        <h2>${balance}</h2>
      </div>

      <div style={styles.card}>
        <p>PnL</p>
        <h2 style={{ color: pnl >= 0 ? "green" : "red" }}>
          {pnl >= 0 ? "+" : ""}{pnl}
        </h2>
      </div>

      <button style={styles.button} onClick={simulateTrade}>
        Simulate Trade
      </button>
    </main>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    background: "#0f172a",
    color: "#fff",
    padding: "40px",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: "28px",
    marginBottom: "20px",
  },
  card: {
    background: "#020617",
    padding: "20px",
    width: "250px",
    borderRadius: "10px",
    textAlign: "center",
  },
  button: {
    marginTop: "20px",
    padding: "12px 20px",
    borderRadius: "8px",
    border: "none",
    background: "#22c55e",
    color: "#000",
    fontSize: "16px",
    cursor: "pointer",
  },
};
