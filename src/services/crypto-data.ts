/**
 * Represents a cryptocurrency asset with its key details.
 */
export interface CryptoAsset {
  /**
   * The unique identifier for the cryptocurrency asset.
   */
  id: string;
  /**
   * The name of the cryptocurrency (e.g., Bitcoin).
   */
  name: string;
  /**
   * The symbol of the cryptocurrency (e.g., BTC).
   */
  symbol: string;
  /**
   * The URL of the cryptocurrency's logo.
   */
  logo: string;
  /**
   * The current price of the cryptocurrency.
   */
  price: number;
  /**
   * The percentage change in price over the last hour.
   */
  priceChange1h: number;
  /**
   * The percentage change in price over the last 24 hours.
   */
  priceChange24h: number;
  /**
   * The percentage change in price over the last 7 days.
   */
  priceChange7d: number;
  /**
   * The market capitalization of the cryptocurrency.
   */
  marketCap: number;
  /**
   * The volume of the cryptocurrency traded in the last 24 hours.
   */
  volume24h: number;
  /**
   * The circulating supply of the cryptocurrency.
   */
  circulatingSupply: number;
  /**
   * The maximum supply of the cryptocurrency, if available.
   */
  maxSupply?: number;
  /**
   * An array of numbers representing the price trend over the last 7 days.
   */
  priceTrend7d: number[];
}

/**
 * Asynchronously retrieves cryptocurrency asset data.
 *
 * @returns A promise that resolves to an array of CryptoAsset objects.
 */
export async function getCryptoAssets(): Promise<CryptoAsset[]> {
  // TODO: Implement this by calling an API.

  const sampleData: CryptoAsset[] = [
    {
      id: 'bitcoin',
      name: 'Bitcoin',
      symbol: 'BTC',
      logo: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
      price: 62345.67,
      priceChange1h: -0.005,
      priceChange24h: 0.023,
      priceChange7d: 0.041,
      marketCap: 1200000000000,
      volume24h: 30000000000,
      circulatingSupply: 19000000,
      maxSupply: 21000000,
      priceTrend7d: [61000, 61500, 62000, 63000, 62500, 62800, 63200],
    },
    {
      id: 'ethereum',
      name: 'Ethereum',
      symbol: 'ETH',
      logo: 'https://cryptologos.cc/logos/ethereum-eth-logo.png',
      price: 4250.12,
      priceChange1h: 0.008,
      priceChange24h: -0.015,
      priceChange7d: 0.058,
      marketCap: 510000000000,
      volume24h: 18000000000,
      circulatingSupply: 120000000,
      maxSupply: undefined,
      priceTrend7d: [4100, 4150, 4200, 4300, 4250, 4280, 4320],
    },
    {
      id: 'tether',
      name: 'Tether',
      symbol: 'USDT',
      logo: 'https://cryptologos.cc/logos/tether-usdt-logo.png',
      price: 1.00,
      priceChange1h: 0.000,
      priceChange24h: 0.001,
      priceChange7d: 0.002,
      marketCap: 82000000000,
      volume24h: 55000000000,
      circulatingSupply: 82000000000,
      maxSupply: undefined,
      priceTrend7d: [1.00, 1.00, 1.00, 1.00, 1.00, 1.00, 1.00],
    },
    {
      id: 'binancecoin',
      name: 'Binance Coin',
      symbol: 'BNB',
      logo: 'https://cryptologos.cc/logos/bnb-bnb-logo.png',
      price: 520.45,
      priceChange1h: -0.003,
      priceChange24h: 0.032,
      priceChange7d: -0.012,
      marketCap: 78000000000,
      volume24h: 2500000000,
      circulatingSupply: 150000000,
      maxSupply: 200000000,
      priceTrend7d: [510, 515, 520, 530, 525, 528, 532],
    },
    {
      id: 'cardano',
      name: 'Cardano',
      symbol: 'ADA',
      logo: 'https://cryptologos.cc/logos/cardano-ada-logo.png',
      price: 0.55,
      priceChange1h: 0.002,
      priceChange24h: -0.008,
      priceChange7d: 0.015,
      marketCap: 18000000000,
      volume24h: 800000000,
      circulatingSupply: 33000000000,
      maxSupply: 45000000000,
      priceTrend7d: [0.54, 0.545, 0.55, 0.56, 0.555, 0.558, 0.562],
    },
  ];

  return sampleData;
}
