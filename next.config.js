const path = require('path')
const plasmic = require('@plasmicapp/loader/next')
const withPlasmic = plasmic({
                                projects: ['fdPG9BG6yyv3uFnjM1W4kf'], // An array of project ids.
                                watch: false,
                                initArgs: {
                                    //'style-scheme': 'css-modules',
                                    'code-lang': 'ts',
                                },
                            })
module.exports = withPlasmic({
                                 trailingSlash: true,
                                 // Your NextJS config.
                                 webpack ( config, { isServer } ) {
                                     config.module.rules.push({
                                                                  test: /\.svg$/,
                                                                  use: ['@svgr/webpack'],
                                                              })


                                     return config
                                 },
                             })
