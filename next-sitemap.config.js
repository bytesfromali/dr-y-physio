/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || 'https://www.dryphysio.com',
    generateRobotsTxt: true, // optional
    additionalSitemaps: ['https://blog.dryphysio.com/sitemap_index.xml'],
  };
  