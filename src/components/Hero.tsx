import Link from "next/link";
import { useState, useEffect } from "react";

interface CryptoData {
    id: string;
    symbol: string;
    current_price: number;
    price_change_percentage_24h: number;
}

export default function Hero() {
    const [ticker, setTicker] = useState<CryptoData[]>([]);

    useEffect(() => {
        const fetchCryptoData = async () => {
            try {
                const apiUrl = process.env.NEXT_PUBLIC_COINGECKO_API_URL || "";
                const response = await fetch(apiUrl);
                const data = await response.json();
                if (Array.isArray(data)) {
                    setTicker(data);
                } else {
                    throw new Error("Invalid API response");
                }
            } catch (error) {
                console.error("Error fetching crypto data:", error);
                // Fallback data if API fails or rate limited
                setTicker([
                    { id: "bitcoin", symbol: "btc", current_price: 42000, price_change_percentage_24h: 1.2 },
                    { id: "ethereum", symbol: "eth", current_price: 2200, price_change_percentage_24h: -0.5 },
                    { id: "solana", symbol: "sol", current_price: 98, price_change_percentage_24h: 5.4 },
                    { id: "bnb", symbol: "bnb", current_price: 310, price_change_percentage_24h: 0.8 },
                    { id: "xrp", symbol: "xrp", current_price: 0.5, price_change_percentage_24h: -1.2 },
                ]);
            }
        };

        fetchCryptoData();
        // Refresh every 1 hour as requested (3600000ms)
        const interval = setInterval(fetchCryptoData, 3600000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="min-h-screen flex flex-col relative overflow-hidden bg-brand-black selection:bg-brand-green selection:text-black">
            {/* Decorative Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-green/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-red/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
            </div>

            {/* Navbar */}
            <nav className="relative z-10 w-full max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
                <div className="text-2xl font-heading tracking-tighter text-white">
                    CRYPTO<span className="text-brand-green">NICE</span>
                </div>
                <div className="hidden md:flex gap-8 text-xs font-mono tracking-widest text-gray-400">
                    <Link href="/" className="hover:text-white transition-colors">HOME</Link>
                    <Link href="/calculator" className="hover:text-brand-green transition-colors">CALCULATOR</Link>
                    <Link href="/journal" className="hover:text-brand-green transition-colors">TRADING JOURNAL</Link>
                </div>
                <Link href="/journal">
                    <button className="hidden md:block px-6 py-2 border border-gray-700 text-xs font-mono text-brand-green hover:border-brand-green hover:bg-brand-green/10 transition-colors">
                        LAUNCH APP
                    </button>
                </Link>
            </nav>

            {/* Hero Content */}
            <div className="flex-1 flex flex-col justify-center items-center text-center px-4 relative z-10">

                <h1 className="text-6xl md:text-9xl font-heading uppercase text-white tracking-tighter leading-none mb-6 relative">
                    <span className="relative z-10">Master Your</span>
                    <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-teal-400">Edge</span>
                </h1>

                <p className="max-w-xl text-gray-400 text-lg mb-10 leading-relaxed">
                    The ultimate terminal for professional traders. Calculate position sizes with precision and log every trade to refine your strategy.
                </p>

                <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
                    <Link href="/calculator">
                        <button className="btn-green w-full md:w-auto">
                            POSITION CALCULATOR
                        </button>
                    </Link>
                    <Link href="/journal">
                        <button className="px-8 py-3 border-2 border-gray-700 text-gray-300 font-bold uppercase tracking-widest hover:border-gray-500 hover:text-white transition-all w-full md:w-auto">
                            TRADING JOURNAL
                        </button>
                    </Link>
                </div>

                {/* Real-time Ticker Strip */}
                <div className="mt-20 w-full border-y border-gray-800 bg-black/50 backdrop-blur-sm overflow-hidden group">
                    {/* Ticker Content Wrapper - Duplicated for seamless loop */}
                    <div className="flex whitespace-nowrap py-3 animate-marquee w-max">
                        {/* Set 1 */}
                        {ticker.map((coin) => (
                            <div key={coin.id} className="flex items-center mx-6 font-mono text-xs">
                                <span className="text-gray-400 mr-2 uppercase">{coin.symbol}/USDT</span>
                                <span className="text-white font-bold mr-2">${coin.current_price.toLocaleString()}</span>
                                <span className={coin.price_change_percentage_24h >= 0 ? 'text-brand-green' : 'text-brand-red'}>
                                    {coin.price_change_percentage_24h > 0 ? '+' : ''}{coin.price_change_percentage_24h.toFixed(2)}%
                                </span>
                            </div>
                        ))}
                        {/* Set 2 (Duplicate) */}
                        {ticker.map((coin) => (
                            <div key={`${coin.id}-duplicate`} className="flex items-center mx-6 font-mono text-xs">
                                <span className="text-gray-400 mr-2 uppercase">{coin.symbol}/USDT</span>
                                <span className="text-white font-bold mr-2">${coin.current_price.toLocaleString()}</span>
                                <span className={coin.price_change_percentage_24h >= 0 ? 'text-brand-green' : 'text-brand-red'}>
                                    {coin.price_change_percentage_24h > 0 ? '+' : ''}{coin.price_change_percentage_24h.toFixed(2)}%
                                </span>
                            </div>
                        ))}
                        {/* Set 3 (Extra Duplicate for safety on wide screens) */}
                        {ticker.map((coin) => (
                            <div key={`${coin.id}-triplicate`} className="flex items-center mx-6 font-mono text-xs">
                                <span className="text-gray-400 mr-2 uppercase">{coin.symbol}/USDT</span>
                                <span className="text-white font-bold mr-2">${coin.current_price.toLocaleString()}</span>
                                <span className={coin.price_change_percentage_24h >= 0 ? 'text-brand-green' : 'text-brand-red'}>
                                    {coin.price_change_percentage_24h > 0 ? '+' : ''}{coin.price_change_percentage_24h.toFixed(2)}%
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
}
