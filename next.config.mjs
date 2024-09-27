/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true
    },
    images: {
        domains: ['levelupbucket.s3.sa-east-1.amazonaws.com'],
    }
};

export default nextConfig;
