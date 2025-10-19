/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com', // Mantemos este
      },
      {
        protocol: 'https',
        hostname: 'plus.unsplash.com', // E este
      },
      // --- ADICIONE ESTE NOVO BLOCO ---
      {
        protocol: 'https',
        hostname: 'api.qrserver.com',
      },
      // --------------------------------
    ],
  },
};

export default nextConfig;