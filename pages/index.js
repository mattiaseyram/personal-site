import React from 'react';
//libs
import Head from 'next/head'
import ReactMarkdown from 'react-markdown'
//components
import Section from '../components/Section';
import ParticlesBackground from '../components/ParticlesBackground';
//content
import content from '../content/home.md';
//styles
import styles from '../styles/global.css';

const particlesOptions = {
    particles: {
        number: {
            value: 80,
            density: {
                enable: true,
                value_area: 800
            }
        }
    }
};
const Home = () => {

    const { attributes } = content;
    const { title, subtitle } = attributes;

    const sections = attributes.sections && attributes.sections.reduce((obj, section) => {
        obj[section.id] = section;
        return obj;
    }, {});

    return (
        <div>
            <Head>
                <link href={`https://fonts.googleapis.com/css?family=${
                    [
                        'Playfair+Display:400,400i,700,700i,900,900i',
                        'Karla:400,400i,700'
                    ].join('|')
                    }`} rel="stylesheet"></link>
            </Head>

            <ParticlesBackground />

            <div className="top-container">

                <div className="container-start">
                    <ReactMarkdown className="title" source={title} />
                </div>

                <div className="container-end">
                    <ReactMarkdown className="subtitle" source={subtitle} />
                </div>

                {attributes.sections && attributes.sections.map((section, i) =>
                    <Section key={i} {...section} />)}
            </div>
            <style global jsx>{styles}</style>
        </div>
    );
}

export default Home;