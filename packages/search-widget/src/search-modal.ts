import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styleMap } from 'lit/directives/style-map.js';
import './search-form';

@customElement('search-modal')
export class SearchModal extends LitElement {
  @property({
    type: Boolean,
  })
  open = false;

  @property({ type: String })
  baseUrl = '';

  override render() {
    return html`<div
      class="modal__wrapper"
      style="${styleMap({ display: this.open ? 'flex' : 'none' })}"
    >
      <div class="modal__layer" @click="${this.close}"></div>
      <div class="modal__content">
        ${this.open
          ? html`<search-form baseUrl=${this.baseUrl}></search-form>`
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

  static override styles = css`
    :host {
      --color-modal-layer: var(
        --halo-search-widget-color-modal-layer,
        rgb(107 114 128 / 0.75)
      );
      --color-modal-content-bg: var(
        --halo-search-widget-color-modal-content-bg,
        #fff
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
      padding-top: 2.5rem;
      padding-bottom: 2.5rem;
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
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: stretch;
      border-radius: 5px;
      background-color: var(--color-modal-content-bg);
      width: calc(100vw - 20px);
      max-height: calc(100vh - 5rem);
      max-width: 650px;
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
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    'search-modal': SearchModal;
  }
}
