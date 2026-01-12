export default function Footer() {
    return (
        <footer className="bg-black border-t border-gray-900 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-4 gap-12 mb-16">
                    <div className="md:col-span-2">
                        <h2 className="text-2xl font-heading text-white tracking-tighter mb-6">
                            CRYPTO<span className="text-brand-green">NICE</span>
                        </h2>
                        <p className="text-gray-500 text-sm max-w-sm mb-6">
                            Advanced trading tools for the professional cryptocurrency trader.
                            Our mission is to provide the edge you need to survive and thrive in the volatility.
                        </p>
                        <div className="flex gap-4">
                            <div className="w-8 h-8 bg-gray-800 flex items-center justify-center hover:bg-brand-green hover:text-black transition-colors cursor-pointer">
                                <span className="font-bold text-xs">X</span>
                            </div>
                            <div className="w-8 h-8 bg-gray-800 flex items-center justify-center hover:bg-brand-green hover:text-black transition-colors cursor-pointer">
                                <span className="font-bold text-xs">D</span>
                            </div>
                            <div className="w-8 h-8 bg-gray-800 flex items-center justify-center hover:bg-brand-green hover:text-black transition-colors cursor-pointer">
                                <span className="font-bold text-xs">T</span>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-6">Platform</h4>
                        <ul className="space-y-4 text-sm text-gray-500">
                            <li className="hover:text-brand-green cursor-pointer">Position Calculator</li>
                            <li className="hover:text-brand-green cursor-pointer">Trading Journal</li>
                            <li className="hover:text-brand-green cursor-pointer">Market Pulse</li>
                            <li className="hover:text-brand-green cursor-pointer">API Access</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-6">Support</h4>
                        <ul className="space-y-4 text-sm text-gray-500">
                            <li className="hover:text-brand-green cursor-pointer">Documentation</li>
                            <li className="hover:text-brand-green cursor-pointer">Risk Academy</li>
                            <li className="hover:text-brand-green cursor-pointer">Terms of Service</li>
                            <li className="hover:text-brand-green cursor-pointer">Privacy Policy</li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="text-[10px] text-gray-600 font-mono">
                        © 2025 CRYPTONICE SYSTEMS. ALL RIGHTS RESERVED.
                    </div>
                    <div className="flex items-center gap-2 text-[10px] text-gray-600 font-mono">
                        <span className="w-2 h-2 rounded-full bg-brand-green"></span>
                        SYSTEM STATUS: OPTIMAL
                    </div>
                </div>
            </div>
        </footer>
    );
}
