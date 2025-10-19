export default function ValidarPage() {
    return (
        <main className="flex flex-col justify-center items-center min-h-screen bg-slate-900 p-4">
            <div className="bg-slate-800 border border-slate-700 rounded-xl shadow-2xl p-8 max-w-md w-full text-center flex flex-col items-center">
                {/* Ícone de Selo Verificado */}
                <div className="relative mb-6">
                    <svg className="w-24 h-24 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.6-3.751A11.959 11.959 0 0112 2.714z" />
                    </svg>
                </div>

                <h1 className="text-2xl font-bold text-white mb-2">
                    Pagamento Autenticado
                </h1>

                <p className="text-slate-300 text-lg">
                    Boleto seguro pela <span className="font-semibold text-green-400">ValidaBoleto</span>
                </p>

                <p className="text-xs text-slate-500 mt-6">ID da Verificação: 4a2b9c-f8e1-d7c3-a4b5-e6f2a1b3c4d5</p>
            </div>
        </main>
    );
}