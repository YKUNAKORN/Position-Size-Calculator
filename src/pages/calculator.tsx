import Head from "next/head";
import CalculatorForm from "@/components/CalculatorForm";
import Link from "next/link";

export default function Calculator() {
    return (
        <>
            <Head>
                <title>CryptoNice | CALCULATOR</title>
                <meta name="description" content="Crypto trading risk calculator" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="min-h-screen flex flex-col items-center justify-center p-4">
                {/* Simple Nav Back */}
                <div className="absolute top-8 left-8">
                    <Link href="/" className="text-gray-500 hover:text-brand-green font-mono text-sm tracking-widest uppercase">
                        &lt; RETURN TO TERMINAL
                    </Link>
                </div>
                <CalculatorForm />
            </main>
        </>
    );
}
