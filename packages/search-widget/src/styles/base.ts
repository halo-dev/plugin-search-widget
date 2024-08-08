import { css } from 'lit';

const baseStyles = css`
  :host {
    font-size: var(--halo-search-widget-base-font-size, 1em);
    font-family: var(
      --halo-search-widget-base-font-family,
      ui-sans-serif,
      system-ui,
      sans-serif,
      'Apple Color Emoji',
      'Segoe UI Emoji',
      'Segoe UI Symbol',
      'Noto Color Emoji'
    );
  }
`;

export default baseStyles;
