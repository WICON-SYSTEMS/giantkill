import { Helmet } from "react-helmet-async";

interface SitemapUrl {
  loc: string;
  lastmod: string;
  changefreq: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority: number;
}

const sitemapUrls: SitemapUrl[] = [
  {
    loc: "https://giantkill.com/",
    lastmod: new Date().toISOString().split("T")[0],
    changefreq: "weekly",
    priority: 1.0,
  },
  {
    loc: "https://giantkill.com/about",
    lastmod: new Date().toISOString().split("T")[0],
    changefreq: "monthly",
    priority: 0.8,
  },
  {
    loc: "https://giantkill.com/product",
    lastmod: new Date().toISOString().split("T")[0],
    changefreq: "weekly",
    priority: 0.9,
  },
  {
    loc: "https://giantkill.com/how-it-works",
    lastmod: new Date().toISOString().split("T")[0],
    changefreq: "monthly",
    priority: 0.7,
  },
  {
    loc: "https://giantkill.com/testimonials",
    lastmod: new Date().toISOString().split("T")[0],
    changefreq: "weekly",
    priority: 0.6,
  },
  {
    loc: "https://giantkill.com/contact",
    lastmod: new Date().toISOString().split("T")[0],
    changefreq: "monthly",
    priority: 0.8,
  },
];

export default function SitemapGenerator() {
  const generateSitemap = () => {
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapUrls
  .map(
    (url) => `  <url>
    <loc>${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>`;

    return sitemap;
  };

  return (
    <Helmet>
      <script type="application/xml">
        {generateSitemap()}
      </script>
    </Helmet>
  );
}

// Robots.txt generator
export function RobotsTxt() {
  const robotsTxt = `User-agent: *
Allow: /

# Sitemaps
Sitemap: https://giantkill.com/sitemap.xml

# Disallow admin areas
Disallow: /admin/
Disallow: /api/
Disallow: /_next/
Disallow: /static/

# Allow important pages
Allow: /product
Allow: /about
Allow: /contact
Allow: /testimonials
Allow: /how-it-works`;

  return (
    <Helmet>
      <script type="text/plain">
        {robotsTxt}
      </script>
    </Helmet>
  );
}
