# Position Size Calculator 📈

## Overview
The **Position Size Calculator** is a simple JavaScript tool that helps traders calculate their optimal position size based on portfolio balance, risk percentage, stop loss, and leverage. 

## Features
- Takes user input for **portfolio balance, risk of ruin, stop loss, and leverage**.
- Calculates the **adjusted position size** based on risk management principles.
- Displays the final position size to the user.

## How It Works
1. The user enters their **portfolio balance (USDT)**.
2. The user specifies their **risk of ruin (%)**.
3. The user inputs their **stop loss percentage (%)**.
4. The user selects their **leverage (X)**.
5. The calculator computes the optimal **position size** and displays it.

## Formula Used
\[
RPT = \text{portfolioBalance} \times \left(\frac{\text{riskOfRuin}}{100}\right)
\]
\[
\text{positionSize} = \frac{RPT}{\text{stopLoss}}
\]
\[
\text{adjPositionSize} = \frac{\text{positionSize}}{\text{leverage}}
\]
\[
\text{total} = \text{Math.round}\left(\left(\frac{RPT}{\text{stopLoss}}\right) / \text{leverage} \times 100\right)
\]

## Installation & Usage
1. Clone or download the project files.
2. Open the **HTML file** in a browser that supports JavaScript.
3. Follow the prompts to enter your trading parameters.
4. View your calculated **position size** in the console.

## Example Output
