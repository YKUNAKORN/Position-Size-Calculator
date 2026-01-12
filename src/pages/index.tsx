import Head from "next/head";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Articles from "@/components/Articles";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>CryptoNice | Precision Trading Terminal</title>
        <meta name="description" content="Professional crypto trading tools: Position Calculator, Trading Journal, and Risk Management Fundamentals." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="min-h-screen bg-brand-black">
        <Hero />
        <Features />
        <Articles />
        <Footer />
      </main>
    </>
  );
}