export async function sha256(message: string): Promise<string> {
    const msgBuffer = new TextEncoder().encode(message); // Codifica a string em bytes
    const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer); // Calcula o hash
    const hashArray = Array.from(new Uint8Array(hashBuffer)); // Converte ArrayBuffer em Array de bytes
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join(''); // Converte bytes para string hexadecimal
    return hashHex;
}