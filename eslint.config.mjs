import { createConfigForNuxt } from '@nuxt/eslint-config/flat'

export default createConfigForNuxt({
  features: {
    formatters: true,
    stylistic: {
      semi: false,
      quotes: 'single',
      arrowParens: true,
      commaDangle: 'always-multiline',
      indent: 2,
      quoteProps: 'as-needed',
      blockSpacing: true,
      braceStyle: '1tbs',
    },
  },
}).override('nuxt/vue/single-root', {
  rules: {
    'vue/no-multiple-template-root': 'off',
  },
})
