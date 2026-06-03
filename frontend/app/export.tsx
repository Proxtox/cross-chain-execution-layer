"use client";

export default function ExecutionExport() {
  return (
    <div className="max-w-2xl mx-auto mt-10 p-8">
      <h1 className="text-3xl font-bold mb-8">Export Execution Data</h1>
      <div className="p-6 border rounded-2xl">
        <p className="mb-4">Export your cross-chain execution data.</p>
        <button className="w-full bg-purple-600 text-white py-3 rounded-2xl">Export Data</button>
      </div>
    </div>
  );
}