import antfu from '@antfu/eslint-config'
import nuxt from './.nuxt/eslint.config.mjs'

export default antfu(

  { rules: {
    'vue/block-order': ['error', {
      order: ['template', 'script', 'style'],
    }],
  } },
  nuxt,
)
