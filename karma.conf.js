module.exports = function(config) {
  config.set({

    basePath: '',
    frameworks: ['jasmine'],

    files: [
      'app/**/*.ts'
    ],

    exclude: [
      '**/*.d.ts'
    ],

    preprocessors: {
      '**/*.ts': ['typescript'],
      'app/**/!(*spec).ts': ['typescript', 'coverage']
    },

    typescriptPreprocessor: {
      options: {
        sourceMap: true,
        noResolve: false
      },
      transformPath: function(path) {
        return path.replace(/\.ts$/, '.js');
      }
    },

    reporters: ['spec'],

    port: 9876,
    colors: true,

    logLevel: config.LOG_INFO,

    autoWatch: false,

    browsers: [],

    customLaunchers: {
      android: {
        base: 'NS',
        platform: 'android'
      },
      ios: {
        base: 'NS',
        platform: 'ios'
      },
      ios_simulator: {
        base: 'NS',
        platform: 'ios',
        arguments: ['--emulator']
      }
    },

    singleRun: true,

    junitReporter: {
      outputDir: 'test-report/junit',
      useBrowserName: true,
      properties: {}
    }
  })
};
