# Position Size Calculator 

---

## Features

- **User Inputs**: Accepts portfolio balance, risk percentage, stop loss percentage, and leverage.
- **Real-Time Calculation**: Computes the position size dynamically based on user inputs.
- **Responsive Design**: Optimized for both desktop and mobile devices.
- **Modern Tech Stack**: Built with Next.js, React, and TypeScript for scalability and maintainability.

---

## Installation

Follow these steps to set up the project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/YKUNAKORN/Position-Size-Calculator.git
   cd position-size-calculator
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

---

## Project Structure

```
position-size-calculator/
├── src/
│   ├── pages/               # Next.js pages
│   │   ├── index.tsx        # Main page
│   │   ├── _app.tsx         # App wrapper
│   ├── styles/              # CSS modules
│   │   ├── Home.module.css  # Styles for the home page
│   ├── utils/               # Utility functions
│       ├── calculatePositionSize.ts # Logic for position size calculation
├── public/                  # Static assets
├── package.json             # Project dependencies and scripts
├── tsconfig.json            # TypeScript configuration
└── README.md                # Project documentation
```

---

## How to Use

1. Enter your **Portfolio Balance** in USDT.
2. Specify the **Risk of Ruin** percentage.
3. Enter the **Stop Loss** percentage.
4. Provide the **Leverage** value.
5. Click the **Calculate** button to see the recommended position size.

---

## Technologies Used

- **Next.js**: Framework for server-side rendering and static site generation.
- **React**: JavaScript library for building user interfaces.
- **TypeScript**: Superset of JavaScript for type safety.
- **CSS Modules**: Scoped and modular CSS for styling.

---


## Contributing

Contributions are welcome! If you'd like to contribute, please fork the repository and submit a pull request.

---

## Contact

For any questions or feedback, feel free to reach out at [kunakorn.contact@gmail.com].
