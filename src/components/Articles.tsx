export default function Articles() {
    const articles = [
        {
            category: "STRATEGY",
            title: "Why Risk Management is Your Only Edge",
            excerpt: "The math behind ruin. Why 99% of traders fail not because of their entry, but because of their sizing.",
            date: "01.12.2025",
            readTime: "5 MIN READ"
        },
        {
            category: "PSYCHOLOGY",
            title: "The Trader's Mindset: FOMO vs. Discipline",
            excerpt: "Mastering the mental game. How to stick to your system when the market is screaming at you.",
            date: "12.28.2024",
            readTime: "8 MIN READ"
        },
        {
            category: "TECHNICALS",
            title: "Understanding Order Flow and Liquidity",
            excerpt: "Stop trading patterns. Start trading liquidity. A deep dive into modern price action concepts.",
            date: "12.15.2024",
            readTime: "12 MIN READ"
        }
    ];

    return (
        <section className="py-24 bg-brand-black relative">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/grid-me.png')] opacity-5 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-gray-800 pb-6">
                    <div>
                        <h2 className="text-4xl font-heading text-white uppercase tracking-tighter">
                            Market <span className="text-brand-red">Intel</span>
                        </h2>
                    </div>
                    <div className="font-mono text-xs text-brand-green cursor-pointer hover:underline mt-4 md:mt-0">
                VIEW ALL TRANSMISSIONS ->
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-12">
                    {articles.map((article, idx) => (
                        <div key={idx} className="group cursor-pointer">
                            <div className="mb-4 overflow-hidden border border-gray-800 relative h-48 bg-gray-900 group-hover:border-brand-red transition-colors">
                                {/* Placeholder for Article Image - using CSS pattern for now */}
                                <div className="absolute inset-0 bg-brand-gray/50 group-hover:scale-105 transition-transform duration-500"></div>
                                <div className="absolute inset-0 flex items-center justify-center opacity-20 text-6xl font-heading text-black rotate-12 select-none">
                                    CryptoNice
                                </div>
                                <div className="absolute top-4 left-4 bg-brand-red/90 text-black px-2 py-1 text-[10px] font-bold tracking-widest">
                                    {article.category}
                                </div>
                            </div>

                            <div className="flex items-center gap-4 text-[10px] text-gray-500 font-mono mb-3">
                                <span>{article.date}</span>
                                <span>///</span>
                                <span>{article.readTime}</span>
                            </div>

                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand-red transition-colors leading-tight">
                                {article.title}
                            </h3>

                            <p className="text-sm text-gray-400 line-clamp-3">
                                {article.excerpt}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
