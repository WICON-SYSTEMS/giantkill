import { Helmet } from "react-helmet-async";

interface MetaTagsProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: "website" | "article" | "product";
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  locale?: string;
  alternateLocales?: string[];
}

export default function MetaTags({
  title = "Giant Kill - The Ultimate Protection for Your Cocoa Crops",
  description = "Giant Kill is a powerful systemic and contact regenerating insecticide - The best solution for capsid control. Trusted by over 1,000 farmers in Cameroon.",
  keywords = [
    "giant kill",
    "insecticide",
    "capsid control",
    "cocoa farming",
    "agricultural pest control",
    "cameroon",
    "crop protection",
    "pesticide",
    "thiamen",
    "emamectine",
  ],
  image = "/images/giant-kill-hero.jpg",
  url = "https://giantkill.com",
  type = "website",
  author = "VI MA Cameroon",
  publishedTime,
  modifiedTime,
  locale = "en_US",
  alternateLocales = ["fr_CM"],
}: MetaTagsProps) {
  const fullTitle = title.includes("Giant Kill") ? title : `${title} | Giant Kill`;
  const fullUrl = url.startsWith("http") ? url : `https://giantkill.com${url}`;
  const fullImage = image.startsWith("http") ? image : `https://giantkill.com${image}`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(", ")} />
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Giant Kill" />
      <meta property="og:locale" content={locale} />
      {alternateLocales.map((altLocale) => (
        <meta key={altLocale} property="og:locale:alternate" content={altLocale} />
      ))}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />
      <meta name="twitter:site" content="@giantkill" />
      <meta name="twitter:creator" content="@giantkill" />

      {/* Additional Meta Tags */}
      <meta name="theme-color" content="#00B14F" />
      <meta name="msapplication-TileColor" content="#00B14F" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="Giant Kill" />

      {/* Canonical URL */}
      <link rel="canonical" href={fullUrl} />

      {/* Alternate Languages */}
      {alternateLocales.map((altLocale) => (
        <link
          key={altLocale}
          rel="alternate"
          hrefLang={altLocale}
          href={`https://giantkill.com/${altLocale.split("_")[0]}${url}`}
        />
      ))}

      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://wa.me" />

      {/* Favicon */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />

      {/* Article specific meta tags */}
      {type === "article" && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {type === "article" && modifiedTime && (
        <meta property="article:modified_time" content={modifiedTime} />
      )}
      {type === "article" && (
        <meta property="article:author" content={author} />
      )}

      {/* Product specific meta tags */}
      {type === "product" && (
        <>
          <meta property="product:price:amount" content="Contact for pricing" />
          <meta property="product:price:currency" content="XAF" />
          <meta property="product:availability" content="in stock" />
          <meta property="product:condition" content="new" />
        </>
      )}
    </Helmet>
  );
}
