import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./i18n/request.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone'
};

const config = withNextIntl(nextConfig);

config.env = {
    _next_intl_trailing_slash: '1'
};

export default config;
