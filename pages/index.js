import React, { useState } from 'react';
//libs
import Head from 'next/head';
import ReactMarkdown from 'react-markdown';
//components
import ParagraphSection from '../components/ParagraphSection';
import ParticlesBackground from '../components/ParticlesBackground';
//content
import content from '../content/home.md';
//styles
import styles from '../styles/global.css';
import ContactSection from '../components/ContactSection';
import ScrollButtons from '../components/ScrollButtons';

const Home = () => {

    const { attributes = { sections: [] } } = content;
    const { title = '', subtitle = '' } = attributes;

    //get sections as map
    const sections = attributes.sections.reduce((obj, section) => {
        obj[section.id] = section;
        return obj;
    }, {});

    const scrollSections = ['intro', 'contact', 'projects'];

    return (
        <div>

            <Head>

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

            <ScrollButtons sections={scrollSections}/>

            <div className="container-top container-center" id={scrollSections[0]}>

                <div className="container container-start">
                    <ReactMarkdown className="title" source={title} />
                </div>

                <div className="container container-end">
                    <ReactMarkdown className="subtitle" source={subtitle} />
                </div>

                <div className="divider" />

                <ParagraphSection section={sections.intro} />

            </div>

            <div className="container-top container-center" id={scrollSections[1]}>

                <ContactSection section={sections.contact} />

            </div>

            <div className="container-top container-center" id={scrollSections[2]}>

                <ContactSection section={sections.projects} />

            </div>

            <style global jsx>{styles}</style>

        </div>
    );
}

export default Home;