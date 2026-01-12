import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Inter, Archivo_Black, JetBrains_Mono } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const archivo = Archivo_Black({ weight: '400', subsets: ['latin'], variable: '--font-archivo' });
const jetbrains = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${inter.variable} ${archivo.variable} ${jetbrains.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  );
}