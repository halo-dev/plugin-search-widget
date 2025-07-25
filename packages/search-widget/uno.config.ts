import {
  defineConfig,
  definePreset,
  presetIcons,
  presetUno,
  presetWind3,
  transformerCompileClass,
  transformerDirectives,
} from 'unocss';

const remRE = /(-?[.\d]+)rem/g;

const presetRemToEm = definePreset(() => {
  return {
    name: '@unocss/preset-rem-to-em',
    postprocess: (util) => {
      util.entries.forEach((i) => {
        const value = i[1];
        if (typeof value === 'string' && remRE.test(value))
          i[1] = value.replace(remRE, (_, p1) => `${p1}em`);
      });
    },
  };
});

export default defineConfig({
  presets: [presetWind3(), presetIcons(), presetRemToEm()],
  transformers: [transformerDirectives(), transformerCompileClass()],
  theme: {
    colors: {
      primary: 'var(--halo-search-widget-primary-color,#4CCBA0)',
      muted: 'var(--halo-search-widget-muted-color,#475569)',
      content:
        'var(--halo-search-widget-content-color,var(--halo-search-widget-color-form-input,#0f172a))',
    },
    borderRadius: {
      base: 'var(--halo-search-widget-base-rounded, 0.4em)',
    },
  },
  shortcuts: {
    'bg-modal':
      'bg-[var(--halo-search-widget-modal-bg-color,var(--halo-search-widget-color-modal-content-bg,#f8fafc))]',
    'bg-hit':
      'bg-[var(--halo-search-widget-hit-bg-color,var(--halo-search-widget-color-result-item-bg,#fff))]',
    'bg-base':
      'bg-[var(--halo-search-widget-base-bg-color,var(--halo-search-widget-color-modal-content-bg,#fff))]',
    'border-divider':
      'border-[var(--halo-search-widget-divider-color,var(--halo-search-widget-color-form-divider,#f1f5f9))]',
    'border-kbd':
      'border-[var(--halo-search-widget-kbd-border-color,var(--halo-search-widget-color-command-kbd-border,#e2e8f0))]',
    'shadow-kbd':
      'shadow-[var(--halo-search-widget-kbd-shadow,0px_2px_0px_0px_rgba(0,0,0,0.08))]',
  },
  safelist: [
    'i-lucide-arrow-up',
    'i-lucide-arrow-down',
    'i-mdi-keyboard-esc',
    'i-lucide-corner-down-left',
    'i-lucide-file-text',
    'i-lucide-history',
    'i-lucide-loader-circle',
    'i-lucide-search',
  ],
});
