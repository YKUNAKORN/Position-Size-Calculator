import { useState } from "react";

export default function CalculatorForm() {
    const [portfolioBalance, setPortfolioBalance] = useState<number | "">("");
    const [riskOfRuin, setRiskOfRuin] = useState<number | "">("");
    const [stopLoss, setStopLoss] = useState<number | "">("");
    const [leverage, setLeverage] = useState<number | "">("");
    const [positionSize, setPositionSize] = useState<number | null>(null);

    const handleCalculate = () => {
        if (portfolioBalance !== "" && riskOfRuin !== "" && stopLoss !== "" && leverage !== "") {
            const RPT = Number(portfolioBalance) * (Number(riskOfRuin) / 100);
            const size = RPT / Number(stopLoss);
            const adjustedSize = size / Number(leverage);
            const total = Math.round(adjustedSize * 100);
            setPositionSize(total);
        }
    };

    return (
        <div className="bg-brand-black border-2 border-brand-green p-8 max-w-md mx-auto relative group">
            {/* Decorative corners */}
            <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-brand-green bg-black z-10" />
            <div className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-brand-green bg-black z-10" />
            <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b-2 border-l-2 border-brand-green bg-black z-10" />
            <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-brand-green bg-black z-10" />

            <h2 className="text-3xl font-heading uppercase text-center mb-2 text-white tracking-tighter">
                LONG / <span className="text-brand-red">SHORT</span>
            </h2>
            <div className="flex h-1 w-full bg-gray-800 mb-8 overflow-hidden">
                <div className="h-full bg-brand-green w-1/2"></div>
                <div className="h-full bg-brand-red w-1/2"></div>
            </div>

            <div className="space-y-6">
                <FloatingLabelInput
                    label="PORTFOLIO (USDT)"
                    value={portfolioBalance}
                    onChange={setPortfolioBalance}
                    placeholder="1000"
                    type="success"
                />
                <FloatingLabelInput
                    label="RISK %"
                    value={riskOfRuin}
                    onChange={setRiskOfRuin}
                    placeholder="3"
                    type="error"
                />
                <FloatingLabelInput
                    label="STOP LOSS %"
                    value={stopLoss}
                    onChange={setStopLoss}
                    placeholder="1"
                    type="error"
                />
                <FloatingLabelInput
                    label="LEVERAGE (x)"
                    value={leverage}
                    onChange={setLeverage}
                    placeholder="50"
                    type="neutral"
                />

                <button
                    onClick={handleCalculate}
                    className="w-full mt-8 btn-green"
                >
                    EXECUTE ORDER
                </button>

                {positionSize !== null && (
                    <div className="mt-8 border-2 border-dashed border-gray-700 p-4 bg-gray-900/50">
                        <div className="flex justify-between items-end">
                            <span className="text-gray-400 font-mono text-sm">POSITION SIZE_</span>
                            <span className="text-2xl font-bold text-brand-green font-mono">{positionSize} USDT</span>
                        </div>
                        <div className="flex justify-between items-end mt-2">
                            <span className="text-gray-500 font-mono text-xs">MAX LOSS_</span>
                            <span className="text-sm text-brand-red font-mono">-{((Number(portfolioBalance) * (Number(riskOfRuin) / 100))).toFixed(2)} USDT</span>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

function FloatingLabelInput({ label, value, onChange, placeholder, type = "neutral" }: any) {
    const colorClass = type === 'success' ? 'text-brand-green' : type === 'error' ? 'text-brand-red' : 'text-gray-400';
    const borderFocusClass = type === 'error' ? 'focus:border-brand-red' : 'focus:border-brand-green';

    return (
        <div className="relative">
            <label className={`block ${colorClass} text-xs font-bold font-mono mb-1 tracking-widest uppercase`}>
                {label}
            </label>
            <input
                type="number"
                value={value}
                onChange={(e) => onChange(Number(e.target.value))}
                placeholder={placeholder}
                className={`w-full bg-black border-2 border-gray-800 p-3 text-white focus:outline-none ${borderFocusClass} transition-all font-mono`}
            />
        </div>
    )
}
