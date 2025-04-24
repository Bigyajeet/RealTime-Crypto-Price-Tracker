import { CryptoTable } from "@/components/crypto-table";

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Real-Time Crypto Price Tracker</h1>
      <CryptoTable />
    </div>
  );
}

