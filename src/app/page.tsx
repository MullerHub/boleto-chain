"use client";
import GeradorDeBoleto from "@/components/GeradorDeBoleto";
import VerificadorDeBoleto from "@/components/VerificadorDeBoleto";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-900 text-gray-200 font-sans flex flex-col items-center p-4 sm:p-8">
      <div className="w-full max-w-2xl">
        <header className="text-center mb-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-blue-400">VeriPay Hackathon Demo</h1>
          <p className="text-slate-400 mt-2">Selo de Confiança Descentralizado para Boletos</p>
        </header>
        <main className="space-y-8">
          <GeradorDeBoleto />
          <VerificadorDeBoleto />
        </main>
      </div>
    </div>
  );
}