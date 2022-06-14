module.exports = {
  siteName: 'Be Gay',
  siteUrl: 'http://jane.barnesy.me',
  siteDescription: 'This is my gay website',
  titleTemplate: '%s - Be Gay Barnes',
  icon: 'src/favicon.png',

  chainWebpack (config) {
    config.mode('development')
    config.resolve.alias.set('@images', '@/assets/images')
  }
}
