import { Helmet } from "react-helmet";
const CustomHelmet = () => {
    return(
        <Helmet>
            <title>Kacper Woźnicki</title>
            <meta name="description" content="Front-end Developer Portfolio" />
            <meta name="keywords" content="portfolio,frontend,developer,it" />
            <meta charset="UTF-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="theme-color" content="#000000" />
            <meta name="color-scheme" content="dark" />
            <meta property="og:title" content="Kacper Woźnicki" />
            <meta property="og:type" content="website" />
            <meta property="og:description" content="Front-end Developer Portfolio" />
            <meta property="og:image" content="/img.jpg" />
            <meta property="og:locale" content="en - EN" />
            <meta property="og:url" content="https://kwoznicki.vercel.app" />
            <link rel="canonical" href="https://kwoznicki.vercel.app" />
            <link rel="icon" type="image.png"  href="/favicon.png" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link href="https://fonts.googleapis.com/css2?family=Lato&family=Roboto:wght@100;400;700;900&display=swap" rel="stylesheet" /> 
        </Helmet>
    )
}

export default CustomHelmet;