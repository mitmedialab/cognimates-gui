import GoogleAnalytics from 'react-ga';

<<<<<<< HEAD
GoogleAnalytics.initialize('UA-118003336-1', {
=======
GoogleAnalytics.initialize(process.env.GA_ID, {
>>>>>>> upstream/develop
    debug: (process.env.NODE_ENV !== 'production'),
    titleCase: true,
    sampleRate: (process.env.NODE_ENV === 'production') ? 100 : 0,
    forceSSL: true
});

export default GoogleAnalytics;
