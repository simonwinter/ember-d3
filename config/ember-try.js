const getChannelURL = require('ember-source-channel-url')

module.exports = function() {
  return Promise.all([
    getChannelURL('release'),
    getChannelURL('beta'),
    getChannelURL('canary')
  ]).then(urls => {
    return {
      useYarn: true,
      scenarios: [
        {
          name: 'ember-lts-2.16',
          env: {
            EMBER_OPTIONAL_FEATURES: JSON.stringify({ 'jquery-integration': true })
          },
          npm: {
            devDependencies: {
              '@ember/jquery': '^0.5.1',
              'ember-source': '~2.16.0',
              d3: '4.0.0'
            }
          }
        },

        {
          name: 'ember-2.18-d3-4.1',
          env: {
            EMBER_OPTIONAL_FEATURES: JSON.stringify({ 'jquery-integration': true })
          },
          npm: {
            devDependencies: {
              '@ember/jquery': '^0.5.1',
              'ember-source': '~2.18.0',
              d3: '4.1.0'
            }
          }
        },

        {
          name: 'ember-2.18-d3-4.7',
          npm: {
            devDependencies: {
              'ember-source': '~2.18.0',
              d3: '4.7.0'
            }
          }
        },

        {
          name: 'ember-2.18-d3-4.4.13',
          npm: {
            devDependencies: {
              'ember-source': '~2.18.0',
              d3: '4.13.0'
            }
          }
        },

        {
          name: 'ember-3.0-d3-5.0.0',
          npm: {
            devDependencies: {
              'ember-source': '~3.0.0',
              d3: '^5.0.0'
            }
          }
        },

        {
          name: 'ember-3.0-d3-4.1',
          npm: {
            devDependencies: {
              'ember-source': '~3.0.0'
            },
            dependencies: {
              d3: '^4.1.0'
            }
          }
        },
        {
          name: 'ember-release',
          npm: {
            devDependencies: {
              'ember-source': urls[0]
            }
          }
        },
        {
          name: 'ember-beta',
          npm: {
            devDependencies: {
              'ember-source': urls[1]
            }
          }
        },
        {
          name: 'ember-canary',
          npm: {
            devDependencies: {
              'ember-source': urls[2]
            }
          }
        },
        {
          name: 'ember-default',
          npm: {
            devDependencies: {}
          }
        },
        {
          name: 'ember-default-with-jquery',
          env: {
            EMBER_OPTIONAL_FEATURES: JSON.stringify({
              'jquery-integration': true
            })
          },
          npm: {
            devDependencies: {
              '@ember/jquery': '^0.5.1'
            }
          }
        }
      ]
    }
  })
}
