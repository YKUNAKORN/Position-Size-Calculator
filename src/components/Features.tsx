import Link from "next/link";

export default function Features() {
    const features = [
        {
            title: "Risk Engine",
            description: "Algorithmic position sizing based on your portfolio balance and risk tolerance. Never blow your account again.",
            icon: (
                <svg className="w-8 h-8 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
            ),
            link: "/calculator"
        },
        {
            title: "Trade Journal",
            description: "Professional grade logging system. Track entries, exits, and emotional states to calculate your true win rate.",
            icon: (
                <svg className="w-8 h-8 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
            ),
            link: "/journal"
        },
        {
            title: "Market Scanner",
            description: "Real-time sentiment analysis and trend detection. (Coming Soon v2.1)",
            icon: (
                <svg className="w-8 h-8 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
            ),
            link: "#"
        }
    ];

    return (
        <section className="py-24 bg-brand-dark relative z-10 border-t border-gray-900">
            <div className="max-w-7xl mx-auto px-6">
                <div className="mb-16">
                    <h2 className="text-4xl font-heading text-white uppercase tracking-tighter mb-4">
                        Core <span className="text-brand-green">Modules</span>
                    </h2>
                    <div className="w-24 h-1 bg-brand-green mb-6"></div>
                    <p className="text-gray-400 max-w-2xl text-lg">
                        Essential tools designed to give you a statistical advantage in the market.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {features.map((feature, idx) => (
                        <Link key={idx} href={feature.link}>
                            <div className="group p-8 bg-black border border-gray-800 hover:border-brand-green transition-all duration-300 relative overflow-hidden h-full flex flex-col">
                                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                    {feature.icon}
                                </div>

                                <div className="mb-6 p-4 bg-brand-green/10 w-fit rounded-lg group-hover:scale-110 transition-transform duration-300">
                                    {feature.icon}
                                </div>

                                <h3 className="text-xl font-bold text-white mb-3 uppercase tracking-wider group-hover:text-brand-green transition-colors">
                                    {feature.title}
                                </h3>

                                <p className="text-gray-400 leading-relaxed">
                                    {feature.description}
                                </p>

                                <div className="mt-8 flex items-center text-xs font-mono text-brand-green uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                                    Access Module &rarr;
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
