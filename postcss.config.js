import postcssPresetEnv from 'postcss-preset-env'

export default {
  plugins: [
    postcssPresetEnv({
      features: {
        "nesting-rules": true,
        "media-query-ranges": true,
        "custom-media-queries": true
      }
    })
  ]
}