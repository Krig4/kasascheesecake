import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        has: [
          { type: 'host', value: 'kasascheesecake.com' },
          { type: 'host', value: 'www.kasascheesecake.es' },
          { type: 'host', value: 'kasascheesecake.es' },
          { type: 'host', value: 'kasascheesecake.vercel.app' },
        ],
        destination: 'https://www.kasascheesecake.com',
        permanent: true,
      },
    ];
  },
  i18n: {
    locales: ["es", "en"],
    defaultLocale: "es",
  },
};

export default nextConfig;
