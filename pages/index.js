import React, { useState } from 'react';
//libs
import Head from 'next/head';
import ReactMarkdown from 'react-markdown';
import { withAmp } from 'next/amp'
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

    //get sections as map
    const sections = attributes.sections.reduce((obj, section) => {
        obj[section.id] = section;
        return obj;
    }, {});

    //console.log(sections);

    const scrollSections = ['intro', 'contact', 'experience', 'projects'];

    return (
        <div>

            <Head>

                <title>{title}</title>

                <meta name="google-site-verification" content="_TkikPUrmRwwR5KES8-0-W2iNz8vez5BkIPK4gXOYes" />

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

                <ParagraphSection section={sections.intro} />

                <Links />

            </div>

            <ContactSection section={sections.contact} />

            <CardSection section={sections.experience} />

            <CardSection section={sections.projects} />

            <ScrollButtons sections={scrollSections} />

        </div>
    );
}

export default withAmp(Home);