// conf.js


exports.config = {
    directConnect: true,
    framework: 'jasmine',
    capabilities: {
        browserName: 'chrome'
    },
    specs: ['protractor/*.spec.ts'],
    seleniumAddress: 'https://www.freelancer.com/',

    // You could set no globals to true to avoid jQuery '$' and protractor '$'
    // collisions on the global namespace.
    noGlobals: true,
    onPrepare() {
        require('ts-node').register({
            project: require('path').join(__dirname, './tsconfig.json')
        });
    }
};