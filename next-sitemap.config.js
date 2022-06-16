const siteUrl = process.env.NEXT_PUBLIC_BASE_URL
module.exports = {
  siteUrl,
  generateRobotsTxt: true,
  robotsTxtOptions: {
    additionalSitemaps: [
      `${siteUrl}/server-sitemap-1.xml`,
      `${siteUrl}/server-sitemap-2.xml`,
      `${siteUrl}/server-sitemap-3.xml`,
      `${siteUrl}/server-sitemap-4.xml`,
    ],
  },
  exclude: ['/server-sitemap.xml'],
}
