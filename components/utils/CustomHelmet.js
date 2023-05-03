import { Helmet } from "react-helmet";
const CustomHelmet = () => {
  return (
    <Helmet>
      <html lang="en" />
      <title>Kacper Woźnicki</title>
      <meta name="description" content="Front-end Developer Kacper Woźnicki" />
      <meta name="keywords" content="portfolio,frontend,developer,it" />
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="theme-color" content="#000000" />
      <meta name="color-scheme" content="dark" />
      <meta property="og:url" content="https://kwoznicki.vercel.app" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Portfolio" />
      <meta property="og:description" content="Front-end Developer Kacper Woźnicki" />
      <meta property="og:image" content="https://kwoznicki.vercel.app/img.jpg" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="kwoznicki.vercel.app" />
      <meta property="twitter:url" content="https://kwoznicki.vercel.app" />
      <meta name="twitter:title" content="Portfolio" />
      <meta name="twitter:description" content="Portfoli Kacper Woźnicki" />
      <meta name="twitter:image" content="https://kwoznicki.vercel.app/img.jpg" />
      <link rel="canonical" href="https://kwoznicki.vercel.app" />
      <link rel="icon" type="image.png" href="/favicon.png" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Lato&family=Roboto:wght@100;400;700;900&display=swap"
        rel="stylesheet"
      />
    </Helmet>
  );
};

export default CustomHelmet;
