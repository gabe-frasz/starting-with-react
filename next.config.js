/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: [
            "github.com",
            "ogimg.infoglobo.com.br",
            "2.bp.blogspot.com",
            "media1.giphy.com",
            "c.tenor.com",
            "i.pinimg.com",
        ],
    },
};

module.exports = nextConfig;
