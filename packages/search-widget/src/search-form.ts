import { LitElement, html, css, PropertyValueMap } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { Ref, createRef, ref } from 'lit/directives/ref.js';
import type { Hit, Result } from './type';
import { debounce } from 'lodash-es';
import type { DebouncedFunc } from 'lodash-es';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { classMap } from 'lit/directives/class-map.js';
import baseStyles from './styles/base';
import varStyles from './styles/var';

@customElement('search-form')
export class SearchForm extends LitElement {
  constructor() {
    super();
    this.addEventListener('keydown', this.handleKeydown);
  }

  @property({ type: String })
  baseUrl = '';

  @state()
  private hits: Hit[] = [];

  @state()
  private loading: boolean = false;

  @state()
  private selectedIndex = 0;

  inputRef: Ref<HTMLInputElement> = createRef<HTMLInputElement>();

  override render() {
    return html`
      <div class="search-form__input">
        <input
          @input="${this.onInput}"
          placeholder="输入关键词以搜索"
          autocomplete="off"
          autocorrect="off"
          spellcheck="false"
          ${ref(this.inputRef)}
        />
      </div>
      <div class="search-form__result">
        ${!this.loading && this.hits.length === 0
          ? html`<div class="search-form__empty">
              <span>没有搜索结果</span>
            </div>`
          : ''}
        ${this.loading
          ? html`<div class="search-form__loading"><span>搜索中...</span></div>`
          : html`
              <ul class="search-form__result-wrapper" role="list">
                ${this.hits.map(
                  (hit, index) =>
                    html`<li @click="${() => this.handleOpenLink(hit)}">
                      <div
                        class="${classMap({
                          'search-form__result-item': true,
                          selected: index === this.selectedIndex - 1,
                        })}"
                      >
                        <h2 class="search-form__result-item-title">
                          ${unsafeHTML(hit.title)}
                        </h2>
                        <p class="search-form__result-item-content">
                          ${unsafeHTML(hit.content)}
                        </p>
                      </div>
                    </li>`
                )}
              </ul>
            `}
      </div>
      <div class="search-form__commands">
        <div class="search-form__commands-item">
          <span>选择</span>
          <kbd> ↑ </kbd>
          <kbd> ↓ </kbd>
        </div>

        <div class="search-form__commands-item">
          <span>确认</span>
          <kbd> Enter </kbd>
        </div>

        <div class="search-form__commands-item">
          <span>关闭</span>
          <kbd> Esc </kbd>
        </div>
      </div>
    `;
  }

  protected override firstUpdated(
    _changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>
  ) {
    super.firstUpdated(_changedProperties);
    this.inputRef.value?.focus();
  }

  onInput(e: InputEvent) {
    const input = e.target as HTMLInputElement;
    const value = input.value;

    this.selectedIndex = 0;

    if (value === '') {
      this.hits = [];
      return;
    }

    this.loading = true;
    this.fetchHits(value);
  }

  fetchHits: DebouncedFunc<(keyword: string) => Promise<void>> = debounce(
    async (keyword: string) => {
      const response = await fetch(
        `${this.baseUrl}/apis/api.halo.run/v1alpha1/indices/post?keyword=${keyword}&highlightPreTag=%3Cmark%3E&highlightPostTag=%3C/mark%3E`
      );
      const data = (await response.json()) as Result;
      this.hits = data.hits || [];
      this.loading = false;
    },
    300
  );

  handleOpenLink(hit: Hit) {
    window.location.href = hit.permalink;
  }

  handleKeydown = (e: KeyboardEvent) => {
    const { key, ctrlKey } = e;

    if (key === 'ArrowUp' || (key === 'k' && ctrlKey)) {
      this.selectedIndex = Math.max(0, this.selectedIndex - 1);
      e.preventDefault();
    }

    if (key === 'ArrowDown' || (key === 'j' && ctrlKey)) {
      this.selectedIndex = Math.min(this.hits.length, this.selectedIndex + 1);
      e.preventDefault();
    }

    if (key === 'Enter') {
      const hit = this.hits[this.selectedIndex - 1];
      if (hit) {
        this.handleOpenLink(hit);
      }
    }
  };

  static override styles = [
    varStyles,
    baseStyles,
    css`
      .search-form__input {
        border-bottom-width: 1px;
        border-color: var(--color-form-divider);
        padding: 0.625em 1em;
        position: sticky;
        top: 0;
        background-color: var(--color-form-input-bg);
      }

      .search-form__input input {
        width: 100%;
        padding: 0.25em 0px;
        outline: 2px solid transparent;
        outline-offset: 2px;
        border: none;
        font-size: 1em;
        line-height: 1.5em;
        background-color: var(--color-form-input-bg);
        color: var(--color-form-input);
      }

      .search-form__input input::placeholder {
        color: var(--color-form-input-placeholder);
      }

      .search-form__result {
        padding: 0.625em 0.5em;
      }

      .search-form__empty,
      .search-form__loading {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 0.875em;
        line-height: 1.25em;
        color: var(--color-result-empty);
      }

      .search-form__result-wrapper {
        box-sizing: border-box;
        display: flex;
        width: 100%;
        height: 100%;
        flex-direction: column;
        gap: 0.25em;
        list-style: none;
        margin: 0;
        padding: 0;
      }

      .search-form__result-wrapper li {
        cursor: pointer;
      }

      .search-form__result-item {
        display: flex;
        flex-direction: column;
        gap: 0.25em;
        border-radius: 0.375em;
        background-color: var(--color-result-item-bg);
        padding: 0.5em 0.625em;
      }

      .search-form__result-item:hover,
      .search-form__result-item.selected {
        background-color: var(--color-result-item-hover-bg);
      }

      .search-form__result-item-title {
        font-size: 0.875em;
        line-height: 1.25em;
        font-weight: 600;
        padding: 0;
        margin: 0;
        color: var(--color-result-item-title);
      }

      .search-form__result-item-content {
        font-size: 0.75em;
        line-height: 1em;
        color: var(--color-result-item-content);
        padding: 0;
        margin: 0;
      }

      .search-form__result-item-content img {
        width: 50%;
      }

      .search-form__commands {
        border-top-width: 1px;
        border-color: var(--color-form-divider);
        padding: 0.625em 1em;
        display: flex;
        justify-content: flex-end;
      }

      .search-form__commands-item {
        display: inline-flex;
        align-items: center;
        margin-left: 1.25em;
      }

      .search-form__commands-item span {
        font-size: 0.75em;
        line-height: 1em;
        color: var(--color-command-kbd-item);
      }

      .search-form__commands-item kbd {
        color: var(--color-command-kbd-item);
        font-size: 10px;
        text-align: center;
        padding: 0.125em 0.3em;
        border-width: 1px;
        border-radius: 0.25em;
        border-color: var(--color-command-kbd-border);
        min-width: 1.25em;
        margin-left: 0.3em;
        box-shadow: 0 0 #0000, 0 0 #0000, 0 1px 2px 0 rgb(0 0 0 / 0.05);
      }
    `,
  ];
}

declare global {
  interface HTMLElementTagNameMap {
    'search-form': SearchForm;
  }
}
