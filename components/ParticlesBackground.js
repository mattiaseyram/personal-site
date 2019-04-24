import React from 'react';
//libs
import Particles from 'react-particles-js';

const particlesOptions = {
    particles: {
        number: {
            value: 50,
            density: {
                enable: false
            }
        },
        color: {
            value: ["#43758D", "#A44B74", "#00B796", "#00AFDB", "#FFADE3"]
        },
        size: {
            value: 6,
            random: true
        },
        line_linked: {
            enable: false
        },
        move: {
            speed: 2
        }
    }
};

const ParticlesBackground = (props) => (
    <Particles className='particles' params={particlesOptions} />
);

export default ParticlesBackground;