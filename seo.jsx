import { Helmet } from "react-helmet-async";

const SEO = ({ title, description, slug, image }) => {
  const siteUrl = "https://example.com";
  const fullUrl = `${siteUrl}/portfolio/${slug}`;
  const metaImage = image || `${siteUrl}/default-og.jpg`;

  return (
    <Helmet>
      <title>{`${title} | Portfolio`}</title>
      <meta name="description" content={description} />
      <link rel="cononical" href={fullUrl} />

      <meta property="og:type" content="article" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" conent={siteUrl} />
      <meta property="og.image" content={metaImage} />

      {/* structured data (json-ld) for search engines */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareSourceCode",
          name: title,
          description: description,
          codeRepository: fullUrl,
        })}
      </script>
    </Helmet>
  );
};

export default SEO;
