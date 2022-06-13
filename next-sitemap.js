export const siteUrl = window.location.origin
module.exports = {
  siteUrl,
  generateRobotsTxt: true,
  robotsTxtOptions: {
    additionalSitemaps: [
      `${siteUrl}/sitemap.xml`,
      `${siteUrl}/sitemap-2.xml`,
      `${siteUrl}/sitemap-3.xml`,
      `${siteUrl}/server-sitemap.xml`,
    ],
  },
}
