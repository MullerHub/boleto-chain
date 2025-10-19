import { useState } from 'react';
// NÃO PRECISAMOS MAIS DE IMPORTAR NADA DE 'qrcode.react'
import Image from 'next/image';
import { sha256 } from '@/lib/hash';

export default function GeradorDeBoleto() {
    const [beneficiario, setBeneficiario] = useState('Empresa Fictícia LTDA');
    const [valor, setValor] = useState('400.00');
    const [vencimento, setVencimento] = useState('2025-10-25');
    const [boletoData, setBoletoData] = useState<string | null>(null);

    const handleGenerate = async () => {
        const dadosCriticos = `${beneficiario}-${valor}-${vencimento}`;
        const hash = await sha256(dadosCriticos);

        localStorage.setItem(hash, dadosCriticos);
        console.log(`Hash ${hash} registado na 'blockchain simulada' para os dados: ${dadosCriticos}`);

        const dadosCompletosParaQr = {
            beneficiario,
            valor,
            vencimento,
            hash,
        };
        setBoletoData(JSON.stringify(dadosCompletosParaQr, null, 2));
    };

    // Variável para construir o URL da imagem do QR Code
    const qrApiUrl = boletoData
        ? `https://api.qrserver.com/v1/create-qr-code/?size=256x256&margin=10&data=${encodeURIComponent(boletoData)}`
        : '';

    return (
        <div className="bg-slate-800 p-6 rounded-lg shadow-lg w-full">
            <h2 className="text-2xl font-bold mb-4 text-blue-300">Emissor de Boletos (Simulado)</h2>
            {/* ... (código do formulário continua igual) ... */}
            <div className="mb-4">
                <label htmlFor="beneficiario" className="block text-sm font-medium text-slate-300 mb-1">Beneficiário</label>
                <input type="text" id="beneficiario" value={beneficiario} onChange={(e) => setBeneficiario(e.target.value)}
                    className="w-full bg-slate-700 border border-slate-600 rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none" />
            </div>
            <div className="mb-4">
                <label htmlFor="valor" className="block text-sm font-medium text-slate-300 mb-1">Valor</label>
                <input type="text" id="valor" value={valor} onChange={(e) => setValor(e.target.value)}
                    className="w-full bg-slate-700 border border-slate-600 rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none" />
            </div>
            <div className="mb-6">
                <label htmlFor="vencimento" className="block text-sm font-medium text-slate-300 mb-1">Vencimento</label>
                <input type="date" id="vencimento" value={vencimento} onChange={(e) => setVencimento(e.target.value)}
                    className="w-full bg-slate-700 border border-slate-600 rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none" />
            </div>
            <button onClick={handleGenerate} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-md transition duration-300">
                Gerar Boleto &quot;Selado&quot; com QR Code
            </button>

            {boletoData && (
                <div className="mt-6 p-4 bg-slate-700 rounded-lg text-center">
                    <h3 className="text-xl font-bold mb-4 text-white">Boleto Gerado com Selo ValidaBoleto</h3>
                    <p className="text-slate-300 mb-4">
                        Scaneie o QR Code abaixo para verificar a autenticidade.<br />
                        (Ou copie o JSON da caixa abaixo para o verificador)
                    </p>
                    <div className="bg-white p-4 inline-block rounded-lg">
                        {/* --- SUBSTITUÍMOS O COMPONENTE PELA TAG <img> --- */}
                        <Image
                            src={qrApiUrl}
                            alt="QR Code do Boleto"
                            width={256}
                            height={256}
                        />
                    </div>
                    <pre className="mt-4 text-left bg-slate-900 p-2 rounded text-xs text-green-400 overflow-x-auto">
                        <code>{boletoData}</code>
                    </pre>
                </div>
            )}
        </div>
    );
}