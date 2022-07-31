// This file isn't transpiled, so we muse use CommonJS and ES5

//Register Babel to transpile before our tests are run
require('@babel/register')();

//Disable Webpack features that Mocha doesn't understand
require.extensions['.css']=function() {};
