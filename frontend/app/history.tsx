"use client";

export default function HistoryPage() {
  return (
    <div className="max-w-2xl mx-auto mt-10 p-8">
      <h1 className="text-3xl font-bold mb-8">Execution History</h1>
      <div className="p-6 border rounded-2xl">
        <p className="mb-4">View your cross-chain execution history.</p>
        <button className="w-full bg-purple-600 text-white py-3 rounded-2xl">View History</button>
      </div>
    </div>
  );
}