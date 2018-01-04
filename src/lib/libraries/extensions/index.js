import musicImage from './music.png';
import penImage from './pen.png';
import wedoImage from './wedo.png';
import jiboImage from './Jibo_extension.png';
import alexaImage from './Alexa_extension.png';
import hueImage from './Hue_extension.png';


export default [
    {
        name: 'Music',
        extensionURL: 'music',
        iconURL: musicImage,
        description: 'Play instruments and drums.',
        featured: true
    },
    {
        name: 'Pen',
        extensionURL: 'pen',
        iconURL: penImage,
        description: 'Draw with your sprites.',
        featured: true
    },
    {
        name: 'Lego Wedo',
        extensionURL: 'wedo',
        iconURL: wedoImage,
        description: 'Program with lego wedo.',
        featured: true
    },
    {
        name: 'Jibo',
        extensionURL: 'jibo',
        iconURL: jiboImage,
        description: 'Control Jibo robot.',
        featured: true
    },
    {
        name: 'Alexa',
        extensionURL: 'alexa',
        iconURL: alexaImage,
        description: 'Teach Alexa new skills.',
        featured: true
    },
    {
        name: 'Smart Lights',
        extensionURL: 'hue',
        iconURL: hueImage,
        description: 'Control your home Hue Lights',
        featured: true
    } 
];
