import {
  defineConfig,
  presetIcons,
  presetUno,
  transformerCompileClass,
  transformerDirectives,
} from 'unocss';
export default defineConfig({
  presets: [presetUno(), presetIcons()],
  transformers: [transformerDirectives(), transformerCompileClass()],
  theme: {
    colors: {
      primary: 'var(--halo-search-widget-primary-color, #4CCBA0)',
    },
  },
});
