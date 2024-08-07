import { HaloDocument, SearchOption, SearchResult } from '@halo-dev/api-client';
import resetStyles from '@unocss/reset/tailwind.css?inline';
import { LitElement, PropertyValueMap, css, html, unsafeCSS } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { Ref, createRef, ref } from 'lit/directives/ref.js';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import type { DebouncedFunc } from 'lodash-es';
import { debounce } from 'lodash-es';
import varStyles from './styles/var';

@customElement('search-form')
export class SearchForm extends LitElement {
  @property({ type: String })
  baseUrl = '';

  @property({ type: Object })
  options = {};

  @state()
  private searchResult?: SearchResult;

  @state()
  private loading: boolean = false;

  @state()
  private selectedIndex = 0;

  inputRef: Ref<HTMLInputElement> = createRef<HTMLInputElement>();

  constructor() {
    super();

    this.addEventListener('keydown', this.handleKeydown);
  }

  override render() {
    return html`
      <div class="p-3 bg-gray-100 sticky top-0 border-b">
        <form
          class="flex items-center ring-2 h-12 rounded-md px-2.5 ring-primary bg-white"
        >
          <span
            class="shrink flex-none size-6 text-primary ${this.loading
              ? 'i-lucide-loader-circle animate-spin'
              : 'i-lucide-search'}"
          ></span>
          <input
            @input="${this.onInput}"
            placeholder="输入关键词以搜索"
            autocomplete="off"
            spellcheck="false"
            ${ref(this.inputRef)}
            class="flex-1 min-w-0 outline-none h-full px-2.5 bg-transparent"
          />
          <span
            class="flex-none shrink i-lucide-right size-6 text-primary"
          ></span>
        </form>
      </div>
      <div class="search-form__result p-3 h-full">
        ${!this.loading && this.searchResult?.hits?.length === 0
          ? html`<div class="search-form__empty">
              <span>没有搜索结果</span>
            </div>`
          : ''}
        <ul class="search-form__result-wrapper space-y-1.5" role="list">
          ${this.searchResult?.hits?.map(
            (hit, index) =>
              html`<li
                @click="${() => this.handleOpenLink(hit)}"
                @mouseenter=${() => (this.selectedIndex = index)}
                class="search-form__result-item rounded cursor-pointer space-y-1 p-3 bg-white [&>*>mark]:text-primary [&>*>mark]:font-semibold [&>*>mark]:bg-transparent ${index ===
                this.selectedIndex
                  ? '!bg-primary [&>*>mark]:!text-white [&>*>mark]:underline'
                  : ''}"
              >
                <h2
                  class="search-form__result-item-title text-sm font-medium ${this
                    .selectedIndex === index
                    ? 'text-white'
                    : 'text-zinc-900'}"
                >
                  ${unsafeHTML(hit.title)}
                </h2>
                ${hit.description
                  ? html`
                      <p
                        class="search-form__result-item-content text-xs ${this
                          .selectedIndex === index
                          ? 'text-white/90'
                          : 'text-zinc-600'}"
                      >
                        ${unsafeHTML(hit.description)}
                      </p>
                    `
                  : ''}
              </li>`
          )}
        </ul>
      </div>
      <div class="search-form__commands p-3 bg-white sticky bottom-0">
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
      this.searchResult = undefined;
      return;
    }

    this.loading = true;
    this.fetchHits(value);
  }

  fetchHits: DebouncedFunc<(keyword: string) => Promise<void>> = debounce(
    async (keyword: string) => {
      const searchOptions: SearchOption = {
        ...this.options,
        highlightPostTag: '</mark>',
        highlightPreTag: '<mark>',
        keyword,
        limit: 20,
      };

      const response = await fetch(
        `/apis/api.halo.run/v1alpha1/indices/-/search`,
        {
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(searchOptions),
          method: 'post',
        }
      );

      const data = (await response.json()) as SearchResult;
      this.searchResult = data;
      this.loading = false;
    },
    300
  );

  handleOpenLink(hit: HaloDocument) {
    window.location.href = hit.permalink;
  }

  handleKeydown = (e: KeyboardEvent) => {
    const { key, ctrlKey } = e;

    if (key === 'ArrowUp' || (key === 'k' && ctrlKey)) {
      this.selectedIndex = Math.max(0, this.selectedIndex - 1);
      e.preventDefault();
    }

    if (key === 'ArrowDown' || (key === 'j' && ctrlKey)) {
      this.selectedIndex = Math.min(
        this.searchResult?.hits?.length || 0,
        this.selectedIndex + 1
      );
      e.preventDefault();
    }

    if (key === 'Enter') {
      const hit = this.searchResult?.hits?.[this.selectedIndex - 1];
      if (hit) {
        this.handleOpenLink(hit);
      }
    }
  };

  static override styles = [
    unsafeCSS(resetStyles),
    varStyles,
    css`
      @unocss-placeholder;

      .search-form__empty {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 0.875em;
        line-height: 1.25em;
        color: var(--color-result-empty);
      }

      .search-form__result-item {
      }

      .search-form__result-item.selected {
      }

      .search-form__result-item-title {
      }

      .search-form__result-item-content {
      }

      .search-form__result-item-content img {
      }

      .search-form__commands {
        border-top-width: 1px;
        border-color: var(--color-form-divider);
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
