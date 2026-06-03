"use client";

import { useState } from 'react';

export default function CrossChainExecution() {
  const [data, setData] = useState('');

  const handleExecute = () => {
    alert(`Executing cross-chain call: ${data} (demo)`);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-8 border rounded-3xl">
      <h1 className="text-3xl font-bold mb-8 text-center">Cross-Chain Execution Layer</h1>

      <div className="space-y-4">
        <input type="text" value={data} onChange={(e) => setData(e.target.value)} className="w-full p-4 border rounded-2xl" placeholder="Execution Data" />
        <button onClick={handleExecute} className="w-full bg-purple-600 hover:bg-purple-700 text-white py-4 rounded-2xl text-lg font-semibold">
          Execute Cross-Chain
        </button>
      </div>
    </div>
  );
}