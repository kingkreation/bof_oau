import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

const SEO: React.FC<SEOProps> = ({
  title = 'BOF OAU - The Students\' Professional Bureau of Finance',
  description = 'The Students\' Professional Bureau of Finance, Obafemi Awolowo University - Empowering students with financial literacy and professional development.',
  keywords = 'BOF, OAU, Bureau of Finance, Obafemi Awolowo University, Student Finance, Financial Literacy, Professional Development',
  image = '/images/img_d64c46b0a850558.png',
  url = 'https://bofoau.com',
  type = 'website'
}) => {
  const fullTitle = title.includes('BOF OAU') ? title : `${title} | BOF OAU`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />

      {/* Additional Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="author" content="BOF OAU" />
      <link rel="canonical" href={url} />
    </Helmet>
  );
};

export default SEO;
