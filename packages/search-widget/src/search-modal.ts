import resetStyles from '@unocss/reset/tailwind.css?inline';
import { css, html, LitElement, type PropertyValues, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styleMap } from 'lit/directives/style-map.js';
import { OverlayScrollbars } from 'overlayscrollbars';
import overlayscrollbarsStyles from 'overlayscrollbars/styles/overlayscrollbars.css?inline';
import './search-form';
import baseStyles from './styles/base';

@customElement('search-modal')
export class SearchModal extends LitElement {
  @property({
    type: Boolean,
  })
  open = false;

  @property({ type: String })
  baseUrl = '';

  @property({ type: Object })
  options = {};

  constructor() {
    super();

    setTimeout(() => {
      const modalContent = this.shadowRoot?.querySelector(
        '.modal__content'
      ) as HTMLElement;
      if (modalContent) {
        OverlayScrollbars(modalContent, {
          scrollbars: {
            autoHide: 'scroll',
            autoHideDelay: 600,
          },
        });
      }
    }, 0);
  }

  override willUpdate(changedProperties: PropertyValues) {
    if (!changedProperties.has('open')) {
      return;
    }

    if (this.open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.removeProperty('overflow');
    }
  }

  override render() {
    return html`<div
      class="modal__wrapper"
      style="${styleMap({ display: this.open ? 'flex' : 'none' })}"
    >
      <div class="modal__layer" @click="${this.close}"></div>
      <div
        data-overlayscrollbars-initialize
        class="modal__content shadow-xl bg-modal"
      >
        ${
          this.open
            ? html`<search-form
              .baseUrl=${this.baseUrl}
              .options=${this.options}
            ></search-form>`
            : ''
        }
      </div>
    </div>`;
  }

  close() {
    this.open = false;
  }

  handleKeydown = (e: KeyboardEvent) => {
    const { key } = e;

    if (key === 'Escape') {
      this.close();
      e.preventDefault();
    }
  };

  override connectedCallback() {
    super.connectedCallback();
    window.addEventListener('keydown', this.handleKeydown);
  }

  override disconnectedCallback() {
    super.disconnectedCallback();
    window.removeEventListener('keydown', this.handleKeydown);
  }

  static override styles = [
    unsafeCSS(resetStyles),
    unsafeCSS(overlayscrollbarsStyles),
    baseStyles,
    css`
      :host {
        // @deprecated --halo-search-widget-color-modal-layer and
        // --halo-search-widget-base-border-radius will be removed in future
        --base-rounded: var(
          --halo-search-widget-base-rounded,
          var(--halo-search-widget-base-border-radius, 0.4em)
        );
        --modal-layer-color: var(
          --halo-search-widget-modal-layer-color,
          var(--halo-search-widget-color-modal-layer, rgb(107 114 128 / 0.75))
        );
      }

      .modal__wrapper {
        position: fixed;
        left: 0px;
        top: 0px;
        display: flex;
        height: 100%;
        width: 100%;
        flex-direction: row;
        align-items: flex-start;
        justify-content: center;
        padding-top: 3em;
        padding-bottom: 3em;
        z-index: 999;
      }

      .modal__layer {
        background-color: var(--modal-layer-color, rgb(107 114 128 / 0.75));
        position: absolute;
        top: 0px;
        left: 0px;
        height: 100%;
        width: 100%;
        flex: none;
        animation: fadeIn 0.15s both;
      }

      .modal__content {
        border-radius: var(--base-rounded, 0.4em);
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: stretch;
        width: calc(100vw - 20px);
        max-height: calc(100vh - 5em);
        max-width: 580px;
        overflow: auto;
        animation: fadeInUp 0.3s both;
      }

      @keyframes fadeIn {
        from {
          opacity: 0;
        }

        to {
          opacity: 1;
        }
      }

      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translate3d(0, 10%, 0);
        }

        to {
          opacity: 1;
          transform: translate3d(0, 0, 0);
        }
      }

      @unocss-placeholder;
    `,
  ];
}

declare global {
  interface HTMLElementTagNameMap {
    'search-modal': SearchModal;
  }
}
