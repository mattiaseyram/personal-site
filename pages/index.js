import React from 'react';
//libs
import Head from 'next/head'
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

    const sections = attributes.sections && attributes.sections.reduce((obj, section) => {
        obj[section.id] = section;
        return obj;
    }, {});

    return (
        <div className="container">
            <ParticlesBackground/>

            {attributes.sections && attributes.sections.map((section, i) =>
                <Section key={i} {...section} />)}

            <style global jsx>{styles}</style>
        </div>
    );
}

export default Home;