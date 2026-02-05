"use client";
import { useState, useEffect } from "react";

export default function Home() {
  const [balance, setBalance] = useState(1000);
  const [risk, setRisk] = useState(1); // %
  const [result, setResult] = useState("win"); // win | loss
  const [pnl, setPnl] = useState(0);
  const [loading, setLoading] = useState(false);
const [trades, setTrades] = useState([]);

  const simulateTrade = () => {
    setLoading(true);

    setTimeout(() => {
const riskAmount = (balance * risk) / 100;
const tradePnl = result === "win" ? riskAmount : -riskAmount;

const newTrade = {
  id: Date.now(),
  result,
  risk,
  pnl: tradePnl,
  balanceAfter: balance + tradePnl,
  time: new Date().toLocaleTimeString()
};

setTrades(prev => [newTrade, ...prev]);
setBalance(prev => prev + tradePnl);
setPnl(tradePnl);
setLoading(false);
    }, 800);
  };

  return (
    <main className="container">
      <h1>📊 Trading Dashboard</h1>

      <div className="card">
        <p>Balance</p>
        <h2>${balance.toFixed(2)}</h2>
      </div>

      <div className={`card ${pnl >= 0 ? "green" : "red"}`}>
        <p>PnL</p>
        <h2>{pnl >= 0 ? "+" : ""}{pnl.toFixed(2)}</h2>
      </div>

      <div className="controls">
        <label>
          Risk %
          <input
            type="number"
            value={risk}
            min="0.1"
            step="0.1"
            onChange={e => setRisk(Number(e.target.value))}
          />
        </label>

        <label>
          Result
          <select value={result} onChange={e => setResult(e.target.value)}>
            <option value="win">Win</option>
            <option value="loss">Loss</option>
          </select>
        </label>
      </div>

      <button onClick={simulateTrade} disabled={loading}>
        {loading ? "Processing..." : "Simulate Trade"}
      </button>
      <div className="trade-history">
  <h3>Trade History</h3>

  {trades.length === 0 ? (
    <p className="muted">No trades yet</p>
  ) : (
    trades.map((trade, index) => (
      <div key={index} className="trade-card">
        <span>#{index + 1}</span>
        <span>{trade.result.toUpperCase()}</span>
        <span
          className={trade.pnl > 0 ? "pnl-win" : "pnl-loss"}
        >
          {trade.pnl > 0 ? "+" : ""}
          {trade.pnl}
        </span>
      </div>
    ))
  )}
</div>
    </main>
  );
}