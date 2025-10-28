// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
   overrides: [
    {
      "files": [
        "pages/**/*.vue",
        "layouts/**/*.vue",
        "app.vue" // Also ignore the root app.vue
      ],
      "rules": {
        "vue/multi-word-component-names": "off"
      }
    }
  ]
)
