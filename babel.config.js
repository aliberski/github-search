module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  env: {
    production: {
      // NOTE: remove all console logs from production builds
      plugins: ['transform-remove-console'],
    },
  },
  plugins: [
    [
      // NOTE: resolve paths and allow absolute imports
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          assets: './src/assets',
          constants: './src/constants',
          components: './src/components',
          controllers: './src/controllers',
          navigation: './src/navigation',
          screens: './src/screens',
          store: './src/store',
          translation: './src/translation',
        },
      },
    ],
  ],
};
