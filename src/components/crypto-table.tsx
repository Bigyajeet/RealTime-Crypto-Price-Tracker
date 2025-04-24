"use client";

import { getCryptoAssets, CryptoAsset } from "@/services/crypto-data";
import { useEffect, useState, useMemo } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Sparkline } from "@/components/sparkline";

const colorCode = (value: number) => {
  if (value > 0) {
    return "text-green-500";
  } else if (value < 0) {
    return "text-red-500";
  } else {
    return "text-gray-500";
  }
};

const currencyFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

const numberFormatter = new Intl.NumberFormat('en-US', {
  notation: 'compact',
  compactDisplay: 'short',
});

export const CryptoTable = () => {
  const [cryptoAssets, setCryptoAssets] = useState<CryptoAsset[]>([]);

  useEffect(() => {
    const fetchAssets = async () => {
      const assets = await getCryptoAssets();
      setCryptoAssets(assets);
    };

    fetchAssets();
  }, []);

  // Simulate real-time updates
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCryptoAssets((prevAssets) => {
        return prevAssets.map((asset) => {
          const priceChange = (Math.random() - 0.5) * 0.1; // -5% to +5%
          const newPrice = asset.price * (1 + priceChange);

          return {
            ...asset,
            price: newPrice,
            priceChange1h: (Math.random() - 0.5) * 0.02, // -2% to +2%
            priceChange24h: (Math.random() - 0.5) * 0.05, // -5% to +5%
            priceChange7d: (Math.random() - 0.5) * 0.1, // -10% to +10%
            volume24h: asset.volume24h + (Math.random() - 0.5) * 1000000000, // +/- 500M
          };
        });
      });
    }, 1500);

    return () => clearInterval(intervalId);
  }, []);

  const memoizedCryptoAssets = useMemo(() => cryptoAssets, [cryptoAssets]);

  return (
    <div className="overflow-x-auto">
      <Table>
        <TableCaption>
          A list of your favorite cryptocurrencies and their real-time prices.
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[50px]">#</TableHead>
            <TableHead>Logo</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Symbol</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>1h %</TableHead>
            <TableHead>24h %</TableHead>
            <TableHead>7d %</TableHead>
            <TableHead>Market Cap</TableHead>
            <TableHead>24h Volume</TableHead>
            <TableHead>Circulating Supply</TableHead>
            <TableHead>Max Supply</TableHead>
            <TableHead>7D Chart</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {memoizedCryptoAssets.map((asset, index) => (
            <TableRow key={asset.id}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>
                <img
                  src={asset.logo}
                  alt={asset.name}
                  className="w-6 h-6 rounded-full"
                />
              </TableCell>
              <TableCell>{asset.name}</TableCell>
              <TableCell>{asset.symbol}</TableCell>
              <TableCell>{currencyFormatter.format(asset.price)}</TableCell>
              <TableCell className={colorCode(asset.priceChange1h)}>
                {(asset.priceChange1h * 100).toFixed(2)}%
              </TableCell>
              <TableCell className={colorCode(asset.priceChange24h)}>
                {(asset.priceChange24h * 100).toFixed(2)}%
              </TableCell>
              <TableCell className={colorCode(asset.priceChange7d)}>
                {(asset.priceChange7d * 100).toFixed(2)}%
              </TableCell>
              <TableCell>{numberFormatter.format(asset.marketCap)}</TableCell>
              <TableCell>{numberFormatter.format(asset.volume24h)}</TableCell>
              <TableCell>
                {numberFormatter.format(asset.circulatingSupply)}
              </TableCell>
              <TableCell>
                {asset.maxSupply ? numberFormatter.format(asset.maxSupply) : "N/A"}
              </TableCell>
              <TableCell>
                <Sparkline data={asset.priceTrend7d} color="#4FD1C5" />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
