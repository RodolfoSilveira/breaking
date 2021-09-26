module.exports = {
  stories: ['../src/components/**/stories.tsx'],
  addons: ['@storybook/addon-essentials'],
  webpackFinal: (config) => {
    config.resolve.modules.push(`../src`)
    return config
  },
  babel: async (options) => ({
    ...options,
    plugins: [
      [
        "@babel/plugin-proposal-class-properties",
        { "loose": false }
      ],
      ["@babel/plugin-proposal-private-property-in-object", { "loose": false }],
      ["@babel/plugin-proposal-private-methods", { "loose": false }]
    ]
  })
};
