export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${process.env.DOMAIN}/sitemap.xml`,
    "google-site-verification": "gCNRMxgeOkipYzGkW9Z-9S2TZDbmZqFXi53IGFbrrhI",
  };
}
