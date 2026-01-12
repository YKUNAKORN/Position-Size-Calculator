import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';

interface Trade {
    id: string;
    date: string;
    pair: string;
    action: 'LONG' | 'SHORT';
    entry: number;
    exit: number;
    size: number;
    pnl: number;
    notes: string;
    status: 'WIN' | 'LOSS' | 'BE';
}

export default function TradingJournal() {
    const [trades, setTrades] = useState<Trade[]>([]);
    const [formData, setFormData] = useState({
        pair: '',
        action: 'LONG',
        entry: '',
        exit: '',
        size: '',
        notes: ''
    });

    useEffect(() => {
        const saved = localStorage.getItem('cryptoNice_journal');
        if (saved) {
            setTrades(JSON.parse(saved));
        }
    }, []);

    const saveTrades = (newTrades: Trade[]) => {
        setTrades(newTrades);
        localStorage.setItem('cryptoNice_journal', JSON.stringify(newTrades));
    };

    const calculatePnL = () => {
        const entry = Number(formData.entry);
        const exit = Number(formData.exit);
        const size = Number(formData.size); // Typically size in USDT
        if (!entry || !exit || !size) return 0;

        let pnlPercent = 0;
        if (formData.action === 'LONG') {
            pnlPercent = (exit - entry) / entry;
        } else {
            pnlPercent = (entry - exit) / entry;
        }
        return size * pnlPercent; // Rough estimated PnL value
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.pair || !formData.entry || !formData.size) return;

        const pnl = calculatePnL();
        const status = pnl > 0 ? 'WIN' : pnl < 0 ? 'LOSS' : 'BE';

        const newTrade: Trade = {
            id: Date.now().toString(),
            date: new Date().toISOString().split('T')[0],
            pair: formData.pair.toUpperCase(),
            action: formData.action as 'LONG' | 'SHORT',
            entry: Number(formData.entry),
            exit: Number(formData.exit) || 0,
            size: Number(formData.size),
            pnl,
            notes: formData.notes,
            status
        };

        saveTrades([newTrade, ...trades]);
        setFormData({ pair: '', action: 'LONG', entry: '', exit: '', size: '', notes: '' });
    };

    const deleteTrade = (id: string) => {
        saveTrades(trades.filter(t => t.id !== id));
    }

    return (
        <>
            <Head>
                <title>CryptoNice | JOURNAL</title>
            </Head>
            <div className="min-h-screen bg-brand-black text-gray-300 p-4 md:p-8 font-mono">
                {/* Header */}
                <div className="max-w-7xl mx-auto mb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div>
                        <Link href="/" className="text-xs text-gray-500 hover:text-brand-green mb-2 block">&lt; RETURN TO BASE</Link>
                        <h1 className="text-3xl font-heading text-white uppercase tracking-tighter">
                            Trading <span className="text-brand-green">Journal</span>
                        </h1>
                    </div>
                    <div className="flex gap-4 text-xs">
                        <div className="bg-gray-900 border border-gray-800 px-4 py-2 rounded">
                            <div className="text-gray-500">TOTAL PNL</div>
                            <div className={`text-xl font-bold ${trades.reduce((acc, t) => acc + t.pnl, 0) >= 0 ? 'text-brand-green' : 'text-brand-red'}`}>
                                {trades.reduce((acc, t) => acc + t.pnl, 0).toFixed(2)} USDT
                            </div>
                        </div>
                        <div className="bg-gray-900 border border-gray-800 px-4 py-2 rounded">
                            <div className="text-gray-500">WIN RATE</div>
                            <div className="text-xl font-bold text-white">
                                {trades.length > 0
                                    ? ((trades.filter(t => t.status === 'WIN').length / trades.length) * 100).toFixed(0)
                                    : 0}%
                            </div>
                        </div>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-8">
                    {/* Entry Form */}
                    <div className="lg:col-span-1">
                        <form onSubmit={handleSubmit} className="bg-gray-900/50 border border-gray-800 p-6 rounded-lg sticky top-8">
                            <h3 className="text-white font-bold mb-4 uppercase tracking-widest text-sm border-b border-gray-800 pb-2">Log New Trade</h3>

                            <div className="space-y-4">
                                <div>
                                    <label className="block text-[10px] text-gray-500 mb-1">PAIR</label>
                                    <input
                                        type="text"
                                        placeholder="BTC"
                                        className="w-full bg-black border border-gray-700 p-2 text-white focus:border-brand-green focus:outline-none uppercase"
                                        value={formData.pair}
                                        onChange={e => setFormData({ ...formData, pair: e.target.value })}
                                    />
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-[10px] text-gray-500 mb-1">DIRECTION</label>
                                        <select
                                            className="w-full bg-black border border-gray-700 p-2 text-white focus:border-brand-green focus:outline-none"
                                            value={formData.action}
                                            onChange={e => setFormData({ ...formData, action: e.target.value })}
                                        >
                                            <option value="LONG">LONG</option>
                                            <option value="SHORT">SHORT</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-[10px] text-gray-500 mb-1">SIZE (USDT)</label>
                                        <input
                                            type="number"
                                            placeholder="1000"
                                            className="w-full bg-black border border-gray-700 p-2 text-white focus:border-brand-green focus:outline-none"
                                            value={formData.size}
                                            onChange={e => setFormData({ ...formData, size: e.target.value })}
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-[10px] text-gray-500 mb-1">ENTRY PRICE</label>
                                        <input
                                            type="number"
                                            className="w-full bg-black border border-gray-700 p-2 text-white focus:border-brand-green focus:outline-none"
                                            value={formData.entry}
                                            onChange={e => setFormData({ ...formData, entry: e.target.value })}
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-[10px] text-gray-500 mb-1">EXIT PRICE</label>
                                        <input
                                            type="number"
                                            className="w-full bg-black border border-gray-700 p-2 text-white focus:border-brand-green focus:outline-none"
                                            value={formData.exit}
                                            onChange={e => setFormData({ ...formData, exit: e.target.value })}
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-[10px] text-gray-500 mb-1">NOTES</label>
                                    <textarea
                                        rows={3}
                                        className="w-full bg-black border border-gray-700 p-2 text-white focus:border-brand-green focus:outline-none resize-none"
                                        value={formData.notes}
                                        onChange={e => setFormData({ ...formData, notes: e.target.value })}
                                    />
                                </div>

                                <button type="submit" className="w-full bg-brand-green text-black font-bold py-3 hover:bg-green-400 transition-colors uppercase tracking-wider">
                                    Add Record
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* Trade List */}
                    <div className="lg:col-span-2">
                        <div className="bg-gray-900/30 border border-gray-800 rounded-lg overflow-hidden min-h-[500px]">
                            <div className="grid grid-cols-12 gap-2 bg-gray-950 p-3 text-[10px] text-gray-500 font-bold uppercase tracking-wider border-b border-gray-800">
                                <div className="col-span-2">Date</div>
                                <div className="col-span-2">Pair</div>
                                <div className="col-span-2">Side</div>
                                <div className="col-span-2">Entry/Exit</div>
                                <div className="col-span-2 text-right">PnL</div>
                                <div className="col-span-2 text-right">Action</div>
                            </div>

                            <div className="divide-y divide-gray-800">
                                {trades.length === 0 ? (
                                    <div className="p-12 text-center text-gray-600">
                                        No Records Found. Start Logging.
                                    </div>
                                ) : trades.map((trade) => (
                                    <div key={trade.id} className="grid grid-cols-12 gap-2 p-4 text-xs items-center hover:bg-gray-800/30 transition-colors">
                                        <div className="col-span-2 text-gray-400">{trade.date}</div>
                                        <div className="col-span-2 font-bold text-white uppercase">{trade.pair}</div>
                                        <div className="col-span-2">
                                            <span className={`px-2 py-1 rounded-sm text-[10px] font-bold ${trade.action === 'LONG' ? 'bg-brand-green/10 text-brand-green' : 'bg-brand-red/10 text-brand-red'}`}>
                                                {trade.action}
                                            </span>
                                        </div>
                                        <div className="col-span-2 text-gray-400">
                                            <div>{trade.entry}</div>
                                            <div className="text-gray-600">{trade.exit || '-'}</div>
                                        </div>
                                        <div className={`col-span-2 text-right font-bold ${trade.pnl > 0 ? 'text-brand-green' : trade.pnl < 0 ? 'text-brand-red' : 'text-gray-400'}`}>
                                            {trade.pnl > 0 ? '+' : ''}{trade.pnl.toFixed(2)}
                                        </div>
                                        <div className="col-span-2 text-right">
                                            <button onClick={() => deleteTrade(trade.id)} className="text-gray-600 hover:text-red-500 transition-colors">
                                                [DEL]
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
