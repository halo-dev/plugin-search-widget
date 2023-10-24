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

  override render() {
    return html`<div
      class="modal-wrapper"
      style="${styleMap({ display: this.open ? 'flex' : 'none' })}"
    >
      <div class="modal-layer" @click="${this.close}"></div>
      <div class="modal-content">
        ${this.open ? html`<search-form></search-form>` : ''}
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
    .modal-wrapper {
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

    .modal-layer {
      position: absolute;
      top: 0px;
      left: 0px;
      height: 100%;
      width: 100%;
      flex: none;
      background-color: rgb(107 114 128 / 0.75);
      transition-property: opacity;
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      transition-duration: 0.15s;
    }

    .modal-content {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: stretch;
      border-radius: 5px;
      background-color: #fff;
      width: calc(100vw - 20px);
      max-height: calc(100vh - 5rem);
      max-width: 650px;
      overflow: auto;
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    'search-modal': SearchModal;
  }
}
