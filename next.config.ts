const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "https://jaboataoprev.jaboatao.pe.gov.br", 
      },
    ],
  },
  reactStrictMode: false, // Desativa o Strict Mode
};

export default nextConfig;
