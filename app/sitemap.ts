export default function sitemap() {
  return [
    {
      url: `${process.env.DOMAIN}/paket`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: `${process.env.DOMAIN}/`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
    },
  ];
}
