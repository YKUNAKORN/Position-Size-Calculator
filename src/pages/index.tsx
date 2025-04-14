import { useState } from "react";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [portfolioBalance, setPortfolioBalance] = useState<number | "">("");
  const [riskOfRuin, setRiskOfRuin] = useState<number | "">("");
  const [stopLoss, setStopLoss] = useState<number | "">("");
  const [leverage, setLeverage] = useState<number | "">("");
  const [positionSize, setPositionSize] = useState<number | null>(null);

  const handleCalculate = () => {
    if (
      portfolioBalance !== "" &&
      riskOfRuin !== "" &&
      stopLoss !== "" &&
      leverage !== ""
    ) {
      const RPT = Number(portfolioBalance) * (Number(riskOfRuin) / 100);
      const size = RPT / Number(stopLoss);
      const adjustedSize = size / Number(leverage);
      const total = Math.round(adjustedSize * 100);
      setPositionSize(total);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>Position Size Calculator</h1>
        <p className={styles.subtitle}>
          A tool to help you calculate your Position Size before entering a trade
        </p>
        <div>
          <label className={styles.label}>
            MY PORTFOLIO BALANCE * (USDT)
            <input
              type="number"
              value={portfolioBalance}
              onChange={(e) => setPortfolioBalance(Number(e.target.value))}
              placeholder="1000"
              className={styles.input}
            />
          </label>
          <label className={styles.label}>
            % RISK OF RUIN *
            <input
              type="number"
              value={riskOfRuin}
              onChange={(e) => setRiskOfRuin(Number(e.target.value))}
              placeholder="3"
              className={styles.input}
            />
          </label>
          <label className={styles.label}>
            % STOP LOSS *
            <input
              type="number"
              value={stopLoss}
              onChange={(e) => setStopLoss(Number(e.target.value))}
              placeholder="1"
              className={styles.input}
            />
          </label>
          <label className={styles.label}>
            LEVERAGE *
            <input
              type="number"
              value={leverage}
              onChange={(e) => setLeverage(Number(e.target.value))}
              placeholder="50"
              className={styles.input}
            />
          </label>
          <button onClick={handleCalculate} className={styles.button}>
            Calculate
          </button>
          {positionSize !== null && (
            <div className={styles.result}>
              <strong>POSITION SIZE:</strong> {positionSize} USDT
              <ul>
                <li>Your Position Size for this trade is {positionSize} USDT</li>
                <li>
                  If you lose this trade, you will have{" "}
                  {positionSize && positionSize !== 0
                    ? (Number(portfolioBalance) / positionSize).toFixed(2)
                    : "unable to calculate"}{" "}
                  opportunities left
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}