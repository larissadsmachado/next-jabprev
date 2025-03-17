const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "jaboataoprev.pe.gov.br", // Permite subdomínios
      },
    ],
  },
  reactStrictMode: false, // Desativa o Strict Mode
};

export default nextConfig;
