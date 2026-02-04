"use client";
import { useState } from "react";

export default function Home() {
  const [balance, setBalance] = useState(1000);
  const [risk, setRisk] = useState(1);
  const [entry, setEntry] = useState("");
  const [stop, setStop] = useState("");
  const [result, setResult] = useState(null);

  function calculateTrade() {
    const riskAmount = (balance * risk) / 100;
    const stopDistance = Math.abs(entry - stop);
    if (!stopDistance) return;

    const positionSize = (riskAmount / stopDistance).toFixed(2);
    setResult({ riskAmount, positionSize });
  }

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-center">Trading Risk Manager</h1>

      <div className="bg-slate-800 p-4 rounded-xl space-y-2">
        <label>Account Balance ($)</label>
        <input
          type="number"
          value={balance}
          onChange={(e) => setBalance(+e.target.value)}
          className="w-full p-2 rounded bg-slate-900"
        />
      </div>

      <div className="bg-slate-800 p-4 rounded-xl space-y-2">
        <label>Risk per Trade (%)</label>
        <input
          type="number"
          value={risk}
          onChange={(e) => setRisk(+e.target.value)}
          className="w-full p-2 rounded bg-slate-900"
        />
      </div>

      <div className="bg-slate-800 p-4 rounded-xl space-y-2">
        <label>Entry Price</label>
        <input
          type="number"
          value={entry}
          onChange={(e) => setEntry(+e.target.value)}
          className="w-full p-2 rounded bg-slate-900"
        />

        <label>Stop Loss</label>
        <input
          type="number"
          value={stop}
          onChange={(e) => setStop(+e.target.value)}
          className="w-full p-2 rounded bg-slate-900"
        />
      </div>

      <button
        onClick={calculateTrade}
        className="w-full bg-blue-600 p-3 rounded-xl font-bold"
      >
        Calculate Trade
      </button>

      {result && (
        <div className="bg-slate-900 p-4 rounded-xl space-y-1">
          <p>Risk Amount: <span className="text-red-400">${result.riskAmount}</span></p>
          <p>Position Size: <span className="text-green-400">{result.positionSize}</span></p>
        </div>
      )}
    </div>
  );
}