import { Helmet } from 'react-helmet';
import Img from '../../public/Ogimage.jpg'
const CustomHelmet = () => {

    const title = 'Kacper Woźnicki'
    const description = 'Front-end Developer Portfolio';
    const keywords = 'portfolio,frontend,developer,it';
    const siteURL = 'https://kwoznicki.vercel.app';

    return(
        <Helmet>
            <title>{title}</title>
            <meta name='description' content={description} />
            <meta name='keywords' content={keywords} />
            <meta charset='UTF-8' />
            <meta http-equiv='X-UA-Compatible' content='IE=edge' />
            <meta name='viewport' content='width=device-width, initial-scale=1.0' />
            <meta name='theme-color' content='#000000' />
            <meta name='color-scheme' content='dark' />
            <meta property='og:title' content={title} />
            <meta property='og:type' content='website' />
            <meta property='og:description' content={description} />
            <meta property='og:image' content={Img} />
            <meta property='og:locale' content='en - EN' />
            <meta property='og:url' content={siteURL} />
            <link rel='canonical' href={siteURL} />
            <link rel='icon' type='image/ico' href='../../public/favicon.ico' />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link href="https://fonts.googleapis.com/css2?family=Lato&family=Roboto:wght@100;400;700;900&display=swap" rel="stylesheet" /> 
        </Helmet>
    )
}

export default CustomHelmet;