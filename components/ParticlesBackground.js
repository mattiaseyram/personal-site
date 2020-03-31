import React from 'react'
import Particles from 'react-particles-js'
import { particleColors } from '../lib/colors'

const style = {
    position: 'fixed',
    width: '100%',
    height: '100%',
    right: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: '-1',
    opacity: 0.4,
}

const particlesOptions = {
    particles: {
        number: {
            value: 50,
            density: {
                enable: false,
            },
        },
        color: {
            value: particleColors,
        },
        size: {
            value: 6,
            random: true,
        },
        line_linked: {
            enable: false,
        },
        move: {
            speed: 2,
            bounce: false,
            attract: {
                enable: true,
                rotateX: 1000,
                rotateY: 1000,
            },
        },
        shape: {
            type: 'polygon',
            polygon: {
                nb_sides: 4,
            },
        },
    },
}

export default function ParticlesBackground() {
    return <Particles params={particlesOptions} style={style} />
}
