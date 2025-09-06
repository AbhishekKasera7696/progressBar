import React, { useState } from "react";
import "./styles.css";

// Simple Progress Bar Component
function ProgressBar({ value, max = 100 }) {
  const percentage = Math.min(100, Math.max(0, (value / max) * 100));

  return (
    <div className="w-full bg-gray-200 rounded-full h-4">
      <div
        className="bg-blue-600 h-4 rounded-full"
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  );
}

export default function App() {
  const [progress, setProgress] = useState(40);

  return (
    <div className="App p-4 space-y-4 max-w-md mx-auto">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>

      <h3 className="text-lg font-bold">Simple Progress Bar</h3>
      <ProgressBar value={progress} />

      <input
        type="range"
        min="0"
        max="100"
        value={progress}
        onChange={(e) => setProgress(Number(e.target.value))}
        className="w-full"
      />
      <p>{progress}% completed</p>
    </div>
  );
}

