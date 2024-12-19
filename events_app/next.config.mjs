/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**", // Allow all paths from the hostname
      },
      {
        protocol: "https",
        hostname: "wembleypark.com",
        port: "",
        pathname: "/**", // Allow all paths from the hostname
      },
      {
        protocol: "https",
        hostname: "www.royalparks.org.uk",
        port: "",
        pathname: "/**", // Allow all paths from the hostname
      },
    ],
  },
};

export default nextConfig;
