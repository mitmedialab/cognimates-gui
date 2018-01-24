import boostImage from './boost.png';
import musicImage from './music.png';
import penImage from './pen.png';
import wedoImage from './wedo.png';
import jiboImage from './Jibo_extension.png';
import alexaImage from './Alexa_extension.png';
import hueImage from './Hue_extension.png';
import speechImage from './speech.png';
import videoImage from './video-sensing.png';


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
    }, 
    {
        name: 'Speech',
        extensionURL: '',
        iconURL: speechImage,
        description: 'Talk to your projects.',
        featured: true,
        disabled: true
    },
    {
        name: 'Video Sensing',
        extensionURL: '',
        iconURL: videoImage,
        description: 'Detect motion with the camera.',
        featured: true,
        disabled: true
    },
    {
        name: 'LEGO Boost',
        extensionURL: '',
        iconURL: boostImage,
        description: 'Build robots and more.',
        featured: true,
        disabled: true
    }
];
