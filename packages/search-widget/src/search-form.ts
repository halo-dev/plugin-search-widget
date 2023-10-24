import { LitElement, html, css, PropertyValueMap } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { Ref, createRef, ref } from 'lit/directives/ref.js';
import type { Hit, Result } from './type';
import { debounce } from 'lodash-es';
import type { DebouncedFunc } from 'lodash-es';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { classMap } from 'lit/directives/class-map.js';

@customElement('search-form')
export class SearchForm extends LitElement {
  constructor() {
    super();
    this.addEventListener('keydown', this.handleKeydown);
  }

  @state()
  private hits: Hit[] = [];

  @state()
  private loading: boolean = false;

  @state()
  private selectedIndex = 0;

  inputRef: Ref<HTMLInputElement> = createRef<HTMLInputElement>();

  override render() {
    return html`
      <div class="search-input">
        <input
          @input="${this.onInput}"
          placeholder="输入关键词以搜索"
          autocomplete="off"
          autocorrect="off"
          spellcheck="false"
          ${ref(this.inputRef)}
        />
      </div>
      <div class="search-result">
        ${!this.loading && this.hits.length === 0
          ? html`<div class="search-empty">
              <span>没有搜索结果</span>
            </div>`
          : ''}
        ${this.loading
          ? html`<div class="search-loading"><span>搜索中...</span></div>`
          : html`
              <ul class="search-result-wrapper" role="list">
                ${this.hits.map(
                  (hit, index) =>
                    html`<li @click="${() => this.handleOpenLink(hit)}">
                      <div
                        class="${classMap({
                          'search-result-item': true,
                          selected: index === this.selectedIndex - 1,
                        })}"
                      >
                        <h2 class="search-result-item-title">
                          ${unsafeHTML(hit.title)}
                        </h2>
                        <p class="search-result-item-content">
                          ${unsafeHTML(hit.content)}
                        </p>
                      </div>
                    </li>`
                )}
              </ul>
            `}
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
        `https://ryanc.cc/apis/api.halo.run/v1alpha1/indices/post?keyword=${keyword}&highlightPreTag=%3Cmark%3E&highlightPostTag=%3C/mark%3E`
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
      const hit = this.hits[this.selectedIndex];
      if (hit) {
        this.handleOpenLink(hit);
      }
    }
  };

  static override styles = css`
    :host * {
      box-sizing: border-box;
      border-width: 0;
      border-style: solid;
      border-color: #e5e7eb;
      font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
        Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif,
        'Apple Color Emoji', 'Segoe UI Emoji', Segoe UI Symbol,
        'Noto Color Emoji';
      font-feature-settings: normal;
      font-variation-settings: normal;
    }

    .search-input {
      border-bottom-width: 1px;
      border-color: rgb(243 244 246);
      padding: 0.625rem 1rem;
      position: sticky;
      top: 0;
      background-color: #fff;
    }

    .search-input input {
      width: 100%;
      padding: 0.25rem 0px;
      outline: 2px solid transparent;
      outline-offset: 2px;
      border: none;
      font-size: 1rem;
      line-height: 1.5rem;
    }

    .search-result {
      padding: 0.625rem 0.5rem;
    }

    .search-empty,
    .search-loading {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 0.875rem;
      line-height: 1.25rem;
      color: rgb(107 114 128);
    }

    .search-result-wrapper {
      box-sizing: border-box;
      display: flex;
      width: 100%;
      height: 100%;
      flex-direction: column;
      gap: 0.25rem;
      list-style: none;
      margin: 0;
      padding: 0;
    }

    .search-result-wrapper li {
      cursor: pointer;
    }

    .search-result-item {
      display: flex;
      flex-direction: column;
      gap: 0.25rem;
      border-radius: 0.375rem;
      background-color: rgb(249 250 251);
      padding: 0.5rem 0.625rem;
    }

    .search-result-item:hover,
    .search-result-item.selected {
      background-color: rgb(243 244 246);
    }

    .search-result-item-title {
      font-size: 0.875rem;
      line-height: 1.25rem;
      font-weight: 600;
      padding: 0;
      margin: 0;
    }

    .search-result-item-content {
      font-size: 0.75rem;
      line-height: 1rem;
      color: rgb(75 85 99);
      padding: 0;
      margin: 0;
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    'search-form': SearchForm;
  }
}
