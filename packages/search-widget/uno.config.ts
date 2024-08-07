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
      muted: 'var(--halo-search-widget-muted-color, #475569)',
      content: 'var(--halo-search-widget-content-color, #0f172a)',
    },
    borderRadius: {
      base: 'var(--halo-search-widget-base-rounded, 0.4em)',
    },
  },
  shortcuts: {
    'bg-modal': 'bg-[var(--halo-search-widget-modal-bg-color,#f8fafc)]',
    'bg-hit': 'bg-[var(--halo-search-widget-hit-bg-color,#fff)]',
    'bg-base': 'bg-[var(--halo-search-widget-base-bg-color,#fff)]',
    'border-divider':
      'border-[var(--halo-search-widget-divider-color,#f1f5f9)]',
    'border-kbd': 'border-[var(--halo-search-widget-kbd-border-color,#e2e8f0)]',
    'shadow-kbd':
      'shadow-[var(--halo-search-widget-kbd-shadow,0px_2px_0px_0px_rgba(0,0,0,0.08))]',
  },
});
