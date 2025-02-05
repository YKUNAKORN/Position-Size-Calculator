// Position Size Calculator in JavaScript logic
console.log("This is a Position Size Calculator!");

const portfolioBalance = parseInt(prompt("ENTER YOUR PORTFOLIO BALANCE (USDT) : "));
const riskOfRuin = parseInt(prompt("RISK OF RUIN (%) : "));
const SL = parseFloat(prompt("% STOP LOSS (%) : "));
const leverage = parseInt(prompt("LEVERAGE (X): "));

const RPT = portfolioBalance * (riskOfRuin / 100);
const positionSize = RPT / SL;
const adjPositionSize = positionSize / leverage;

const total = Math.round(((RPT / SL) / leverage) * 100);

console.log("Your Position Size is:", total);
