import React from 'react';
//libs
import Head from 'next/head';
import ReactMarkdown from 'react-markdown';
import { GA_TRACKING_ID } from '../lib/gtag';
//components
import ParagraphSection from '../components/ParagraphSection';
import ParticlesBackground from '../components/ParticlesBackground';
import ContactSection from '../components/ContactSection';
import ScrollButtons from '../components/ScrollButtons';
import CardSection from '../components/CardSection';
//content
import content from '../content/home.md';
//styles
import "react-responsive-carousel/lib/styles/carousel.min.css";
import '../static/styles/global.css';
import Links from '../components/Links';

const Home = () => {

    const { attributes = { sections: [] } } = content;
    const { title = '', subtitle = '' } = attributes;

    const sections = attributes.sections.reduce((obj, section) => {
        obj[section.id] = section;
        return obj;
    }, {});

    const scrollSections = ['intro', 'contact', 'experience', 'projects'];

    return (
        <div>

            <Head>

                <meta name="google-site-verification" content="_TkikPUrmRwwR5KES8-0-W2iNz8vez5BkIPK4gXOYes" />

                <script
                    async
                    src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
                />
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}');
          `
                    }}
                />

                <title>{title}</title>

                <meta name="viewport" content="initial-scale=1.0, width=device-width" />

                <link rel='shortcut icon' type='image/x-icon' href='/static/favicon/favicon.ico' />

                <link href={'https://fonts.googleapis.com/css?family=' +
                    [
                        'Playfair+Display:400,400i,700,700i,900,900i',
                        'Karla:400,400i,700'
                    ].join('|')
                } rel="stylesheet"></link>

                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"></link>

            </Head>

            <ParticlesBackground />

            <div className="container-top container-center" id={scrollSections[0]}>

                <div className="container container-start">
                    <ReactMarkdown className="title big-title" source={title} />
                </div>

                <div className="container container-end">
                    <ReactMarkdown className="subtitle" source={subtitle} />
                </div>

                <div className="divider" />

                <ContactSection section={sections.contact} />

            </div>

        </div>
    );
}

export default Home;