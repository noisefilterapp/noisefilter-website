module.exports = {
  plugins: [
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-postcss',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/`
      }
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Noise Filter',
        short_name: 'Noise Filter',
        start_url: '/',
        display: 'standalone',
        icon: 'static/favicon/favicon128.png',
        crossOrigin: 'use-credentials'
      }
    }
  ]
}
