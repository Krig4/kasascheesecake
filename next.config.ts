// next.config.js
module.exports = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/maintenance',
        permanent: false,
      },
    ];
  },
};
