/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'projects.vertcode.dev',
                pathname: '/media/*'
            }
        ]
    }
}

module.exports = nextConfig
