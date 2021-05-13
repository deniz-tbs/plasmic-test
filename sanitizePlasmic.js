const replace = require('replace-in-file');
const options = {
    files: './.plasmic/components/plasmic/**/*.tsx',
    from: `// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */`,
    to: '',
};

const results = replace.sync(options);
