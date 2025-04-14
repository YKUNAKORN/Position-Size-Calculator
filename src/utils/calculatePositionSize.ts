export function calculatePositionSize(
  portfolioBalance: number,
  riskOfRuin: number,
  stopLoss: number,
  leverage: number
): number {
  const RPT = portfolioBalance * (riskOfRuin / 100);
  const size = RPT / stopLoss;
  const adjustedSize = size / leverage;
  return Math.round(adjustedSize * 100);
}