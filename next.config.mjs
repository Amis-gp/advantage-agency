import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./i18n/request.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
    webpack: (config) => {
        config.resolve.fallback = { fs: false };
        return config;
    }
};

const config = withNextIntl(nextConfig);

config.env = {
    _next_intl_trailing_slash: '1'
};

export default config;
