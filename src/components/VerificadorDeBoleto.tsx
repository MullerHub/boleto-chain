import { useState } from 'react';
import { sha256 } from '@/lib/hash';

export default function VerificadorDeBoleto() {
    const [qrCodeData, setQrCodeData] = useState('');
    const [verificationResult, setVerificationResult] = useState<'idle' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const handleVerify = async () => {
        setVerificationResult('idle');
        setErrorMessage('');
        const inputData = qrCodeData.trim();

        if (!inputData) {
            setErrorMessage('Por favor, insira os dados para verificação.');
            setVerificationResult('error');
            return;
        }

        let hashToVerify: string | undefined;

        try {
            // Tenta interpretar como JSON. Se conseguir, pega o hash de dentro.
            const parsedData = JSON.parse(inputData);
            hashToVerify = parsedData.hash;
        } catch (e) {
            // Se não for JSON, assume que a própria string é o hash.
            hashToVerify = inputData;
        }

        if (!hashToVerify) {
            setVerificationResult('error');
            setErrorMessage("Não foi possível extrair um hash dos dados fornecidos.");
            return;
        }

        if (localStorage.getItem(hashToVerify) !== null) {
            setVerificationResult('success');
        } else {
            setVerificationResult('error');
            setErrorMessage('Hash não encontrado no registro. O boleto pode ser inválido ou fraudulento.');
        }
    };

    return (
        <div className="bg-slate-800 p-6 rounded-lg shadow-lg w-full mt-8">
            <h2 className="text-2xl font-bold mb-4 text-green-300">Verificador de Autenticidade (Simulado)</h2>
            {/* --- CORREÇÃO DAS ASPAS --- */}
            <p className="text-slate-300 mb-4">
                Cole aqui o JSON gerado pelo &quot;Emissor de Boletos&quot; para simular o scan do QR Code.
                Para testar fraude, altere um carácter no JSON antes de colar.
            </p>
            <textarea
                rows={8}
                className="w-full bg-slate-700 p-2 rounded-md text-slate-100 focus:ring-2 focus:ring-green-500 focus:outline-none"
                placeholder="Cole aqui os dados do QR Code para simular o scan..."
                value={qrCodeData}
                onChange={(e) => setQrCodeData(e.target.value)}
            />
            <button onClick={handleVerify} className="w-full mt-4 bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-md transition duration-300">
                Verificar Boleto
            </button>

            {verificationResult === 'success' && (
                <div className="mt-4 p-3 bg-green-200 border border-green-400 text-green-800 rounded-md text-center">
                    <p className="font-bold">✅ Boleto Autêntico!</p>
                    <p>Os dados correspondem ao registro oficial.</p>
                </div>
            )}

            {verificationResult === 'error' && (
                <div className="mt-4 p-3 bg-red-200 border border-red-400 text-red-800 rounded-md text-center">
                    <p className="font-bold">❌ Falha na Verificação!</p>
                    <p>{errorMessage}</p>
                </div>
            )}
        </div>
    );
}
