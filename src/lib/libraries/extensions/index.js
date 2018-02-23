import boostImage from './boost.png';
import musicImage from './music.png';
import penImage from './pen.png';
import wedoImage from './wedo.png';
import jiboImage from './Jibo_extension.png';
import alexaImage from './Alexa_extension.png';
import cognimateImage from './Cognimate_extension.png';
import hueImage from './Hue_extension.png';
import speechImage from './speech.png';
import videoImage from './video-sensing.png';
import cozmoImage from './Cozmo_extension.png';
import ergoImage from './Ergo_extension.png';
import sentimentImage from './Sentiment_extension.png';
import clarifaiImage from './Clarifai_extension.png';
import circuitImage from './CP_extension.png';
import microbitImage from './Microbit_extension.png';


export default [
    {
        name: 'Cognimate',
        extensionURL: 'cognimate',
        iconURL: cognimateImage,
        description: 'Your coding learning companion',
        featured: true
    },
    {
        name: 'Jibo',
        extensionURL: 'jibo',
        iconURL: jiboImage,
        description: 'Control Jibo robot',
        featured: true
    },
    {
        name: 'Alexa',
        extensionURL: 'alexa',
        iconURL: alexaImage,
        description: 'Teach Alexa new skills',
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
        name: 'Cozmo',
        extensionURL: 'cozmo',
        iconURL: cozmoImage,
        description: 'Control Cozmo robot',
        featured: true
        // disabled: true
    },
    {
        name: 'Sentiment Analysis',
        extensionURL: 'sentiment',
        iconURL: sentimentImage,
        description: 'Detect sentiment of your messages',
        featured: true
        // disabled: true
    },
    {
        name: 'ErgoJr Robot',
        extensionURL: 'ergo',
        iconURL: ergoImage,
        description: 'Control ErgoJr robot',
        featured: true
        // disabled: true
    },
    {
        name: 'Image classification',
        extensionURL: 'clarifai',
        iconURL: clarifaiImage,
        description: 'Detect images from your camera',
        featured: true
        // disabled: true
    },
    {
        name: 'Circuit Playground',
        extensionURL: 'circuit',
        iconURL: circuitImage,
        description: 'Change board LEDS and sounds',
        featured: true
        // disabled: true
    },
    {
        name: 'Microbit',
        extensionURL: 'microbit',
        iconURL: microbitImage,
        description: 'Detect gestures and program display',
        featured: true
        // disabled: true
    },
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
        extensionURL: 'wedo2',
        iconURL: wedoImage,
        description: 'Program with lego wedo.',
        featured: true
    },
    {
        name: 'Tracking',
        extensionURL: 'tracking',
        iconURL: wedoImage,
        description: 'Tracking.',
        featured: true
    }
];
