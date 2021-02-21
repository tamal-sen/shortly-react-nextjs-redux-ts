const {
  PHASE_DEVELOPMENT_SERVER,
  PHASE_PRODUCTION_BUILD,
} = require('next/constants')

const getBuildConfig = () => {
  const path = require('path')

  const nextConfig = {
    env: {
      HOST: 'http://localhost:3000',
      APP_NAME: 'Shortly',
      APP_DESCRIPTION: 'Say bye bye to long urls'
    },
    
    // webpack(config) {
    //   config.module.rules.push({
    //     test: /\.svg$/,
    //     include: path.join(process.cwd(), 'public', 'images'),
    //     use: [
    //       'svg-sprite-loader',
    //       {
    //         loader: 'svgo-loader',
    //         options: {
    //           plugins: [
    //             { removeAttrs: { attrs: '(fill)' } },
    //             { removeTitle: true },
    //             { cleanupIDs: true },
    //             { removeStyleElement: true },
    //           ],
    //         },
    //       },
    //     ],
    //   })
    //   return config
    // },
  }
  return nextConfig
}

module.exports = (phase) => {
  const shouldAddBuildConfig =
    phase === PHASE_DEVELOPMENT_SERVER || phase === PHASE_PRODUCTION_BUILD
  return shouldAddBuildConfig ? getBuildConfig() : {}
}
