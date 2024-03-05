import { css } from 'lit';

const varStyles = css`
  :host {
    --base-font-size: var(--halo-search-widget-base-font-size, 1rem);
    --base-border-radius: var(--halo-search-widget-base-border-radius, 0.4em);
    --base-font-family: var(
      --halo-search-widget-base-font-family,
      ui-sans-serif,
      system-ui,
      -apple-system,
      BlinkMacSystemFont,
      Segoe UI,
      Roboto,
      Helvetica Neue,
      Arial,
      Noto Sans,
      sans-serif,
      'Apple Color Emoji',
      'Segoe UI Emoji',
      Segoe UI Symbol,
      'Noto Color Emoji'
    );
    --color-modal-layer: var(
      --halo-search-widget-color-modal-layer,
      rgb(107 114 128 / 0.75)
    );
    --color-modal-content-bg: var(
      --halo-search-widget-color-modal-content-bg,
      #fff
    );
    --color-form-input-bg: var(--halo-search-widget-color-form-input-bg, #fff);
    --color-form-input: var(--halo-search-widget-color-form-input, #333);
    --color-form-input-placeholder: var(
      --halo-search-widget-color-form-input-placeholder,
      rgb(107 114 128)
    );
    --color-form-divider: var(
      --halo-search-widget-color-form-divider,
      rgb(243 244 246)
    );
    --color-result-empty: var(
      --halo-search-widget-color-result-empty,
      rgb(107 114 128)
    );
    --color-result-item-bg: var(
      --halo-search-widget-color-result-item-bg,
      rgb(249 250 251)
    );
    --color-result-item-hover-bg: var(
      --halo-search-widget-color-result-item-hover-bg,
      rgb(243 244 246)
    );
    --color-result-item-title: var(
      --halo-search-widget-color-result-item-title,
      #333
    );
    --color-result-item-content: var(
      --halo-search-widget-color-result-item-content,
      rgb(75, 85, 99)
    );
    --color-command-kbd-item: var(
      --halo-search-widget-color-command-kbd-item,
      #333
    );
    --color-command-kbd-border: var(
      --halo-search-widget-color-command-kbd-border,
      #e5e7eb
    );
  }
`;

export default varStyles;
