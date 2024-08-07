import resetStyles from '@unocss/reset/tailwind.css?inline';
import { LitElement, css, html, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styleMap } from 'lit/directives/style-map.js';
import './search-form';
import varStyles from './styles/var';

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

  override render() {
    return html`<div
      class="modal__wrapper"
      style="${styleMap({ display: this.open ? 'flex' : 'none' })}"
    >
      <div class="modal__layer" @click="${this.close}"></div>
      <div class="modal__content shadow-lg bg-zinc-100">
        ${this.open
          ? html`<search-form
              .baseUrl=${this.baseUrl}
              .options=${this.options}
            ></search-form>`
          : ''}
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
    window.removeEventListener('keydown', this.handleKeydown);
    super.disconnectedCallback();
  }

  static override styles = [
    unsafeCSS(resetStyles),
    varStyles,
    css`
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
        position: absolute;
        top: 0px;
        left: 0px;
        height: 100%;
        width: 100%;
        flex: none;
        background-color: var(--color-modal-layer);
        animation: fadeIn 0.15s both;
      }

      .modal__content {
        border-radius: var(--base-border-radius);
        background-color: var(--color-modal-content-bg);
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
