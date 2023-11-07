module.exports = (nextConfig = {}) => {
  return {
    ...nextConfig,
    webpack: (config, options) => {
      config.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      });
      return config;
    },
    basePath: '',
    pageExtensions: ['jsx', 'js', 'ts', 'tsx'],
  };
};
