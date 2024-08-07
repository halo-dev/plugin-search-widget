import { HaloDocument, SearchOption, SearchResult } from '@halo-dev/api-client';
import resetStyles from '@unocss/reset/tailwind.css?inline';
import { LitElement, css, html, unsafeCSS } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { Ref, createRef, ref } from 'lit/directives/ref.js';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { DebouncedFunc, debounce, uniqBy } from 'lodash-es';
import varStyles from './styles/var';

const HISTORY_KEY = 'halo:search-widgets:history:hits';

@customElement('search-form')
export class SearchForm extends LitElement {
  @property({ type: String })
  baseUrl = '';

  @property({ type: Object })
  options = {};

  @state()
  private keyword = '';

  @state()
  private searchResult?: SearchResult;

  @state()
  private loading: boolean = false;

  @state()
  private selectedIndex = 0;

  @state()
  private historyHits: HaloDocument[] = [];

  inputRef: Ref<HTMLInputElement> = createRef<HTMLInputElement>();

  constructor() {
    super();

    this.addEventListener('keydown', this.handleKeydown);

    this.historyHits = JSON.parse(
      localStorage.getItem(HISTORY_KEY) || '[]'
    ) as HaloDocument[];

    setTimeout(() => {
      this.inputRef.value?.focus();
    }, 0);
  }

  override render() {
    return html`
      <div class="p-3 z-1 bg-gray-100 sticky top-0 border-b">
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

      ${this.keyword ? this.renderItems() : this.renderHistoryItems()}

      <div
        class="border-t search-form__commands p-3 bg-white sticky bottom-0 space-x-5 flex justify-end"
      >
        <div class="search-form__commands-item flex items-center space-x-1.5">
          <kbd
            class="inline-flex justify-center items-center py-1 px-1.5 bg-white border border-gray-200 font-mono text-sm text-gray-800 rounded-md shadow-[0px_2px_0px_0px_rgba(0,0,0,0.08)] dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-200 dark:shadow-[0px_2px_0px_0px_rgba(255,255,255,0.1)]"
          >
            <i class="i-lucide-arrow-up"></i>
          </kbd>
          <kbd
            class="inline-flex justify-center items-center py-1 px-1.5 bg-white border border-gray-200 font-mono text-sm text-gray-800 rounded-md shadow-[0px_2px_0px_0px_rgba(0,0,0,0.08)] dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-200 dark:shadow-[0px_2px_0px_0px_rgba(255,255,255,0.1)]"
          >
            <i class="i-lucide-arrow-down"></i>
          </kbd>
          <span class="text-xs">选择</span>
        </div>

        <div class="search-form__commands-item flex items-center space-x-1.5">
          <kbd
            class="inline-flex justify-center items-center py-1 px-1.5 bg-white border border-gray-200 font-mono text-sm text-gray-800 rounded-md shadow-[0px_2px_0px_0px_rgba(0,0,0,0.08)] dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-200 dark:shadow-[0px_2px_0px_0px_rgba(255,255,255,0.1)]"
          >
            <i class="i-lucide-corner-down-left"></i>
          </kbd>
          <span class="text-xs">确认</span>
        </div>

        <div class="search-form__commands-item flex items-center space-x-1.5">
          <kbd
            class="inline-flex justify-center items-center py-1 px-1.5 bg-white border border-gray-200 font-mono text-sm text-gray-800 rounded-md shadow-[0px_2px_0px_0px_rgba(0,0,0,0.08)] dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-200 dark:shadow-[0px_2px_0px_0px_rgba(255,255,255,0.1)]"
          >
            <i class="i-mdi-keyboard-esc text-base"></i>
          </kbd>
          <span class="text-xs">关闭</span>
        </div>
      </div>
    `;
  }

  renderItems() {
    return html`<div class="search-form__result p-3">
      ${!this.searchResult?.hits?.length ? this.renderEmpty() : ''}
      <ul class="search-form__result-wrapper space-y-1.5" role="list">
        ${this.searchResult?.hits?.map((hit, index) =>
          this.renderListItem(hit, index, 'i-lucide-file-text')
        )}
      </ul>
    </div>`;
  }

  renderEmpty() {
    return html`<div
      class="search-form__empty flex py-4 justify-center text-sm text-zinc-600"
    >
      <span>没有搜索结果</span>
    </div>`;
  }

  renderHistoryItems() {
    return html`
      <div class="search-form__result p-3">
        ${this.historyHits.length
          ? html`<div class="flex justify-between items-center">
                <h3 class="text-sm font-medium text-zinc-600">搜索历史</h3>
                <span
                  class="text-xs cursor-pointer text-zinc-500 hover:text-zinc-900"
                  @click=${this.handleClearHistory}
                >
                  清除历史
                </span>
              </div>
              <ul
                class="search-form__result-wrapper mt-3 space-y-1.5"
                role="list"
              >
                ${this.historyHits?.map((hit, index) =>
                  this.renderListItem(hit, index, 'i-lucide-history')
                )}
              </ul>`
          : this.renderEmpty()}
      </div>
    `;
  }

  renderListItem(hit: HaloDocument, index: number, listIcon: string) {
    return html`
      <li
        @click="${() => this.handleOpenLink(hit)}"
        @mouseenter=${() => (this.selectedIndex = index)}
        class="search-form__result-item shadow-sm flex items-center space-x-3 rounded cursor-pointer p-3 bg-white [&_mark]:text-primary [&_mark]:font-semibold [&_mark]:bg-transparent ${index ===
        this.selectedIndex
          ? '!bg-primary [&_mark]:!text-white [&_mark]:underline'
          : ''}"
        data-index=${index}
      >
        <span
          class="flex-none shrink ${listIcon} ${this.selectedIndex === index
            ? 'text-white'
            : 'text-zinc-500'}"
        ></span>
        <div class="flex-1 space-y-1 min-w-0">
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
        </div>
        <span
          class="i-lucide-corner-down-left flex-none shrink text-white invisible ${this
            .selectedIndex === index
            ? '!visible'
            : ''}"
        ></span>
      </li>
    `;
  }

  onInput(e: InputEvent) {
    const input = e.target as HTMLInputElement;
    const value = input.value;

    this.keyword = value || '';

    this.selectedIndex = 0;

    if (value === '') {
      this.searchResult = undefined;
      return;
    }

    this.loading = true;
    this.fetchHits(value);
  }

  handleClearHistory() {
    localStorage.removeItem(HISTORY_KEY);
    this.historyHits = [];
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
    localStorage.setItem(
      HISTORY_KEY,
      JSON.stringify(uniqBy([hit, ...this.historyHits], 'id'))
    );

    this.historyHits = JSON.parse(
      localStorage.getItem(HISTORY_KEY) || '[]'
    ) as HaloDocument[];

    window.location.href = hit.permalink;
  }

  handleKeydown = (e: KeyboardEvent) => {
    const { key, ctrlKey } = e;

    const hits = this.keyword ? this.searchResult?.hits : this.historyHits;

    if (!hits) {
      return;
    }

    if (key === 'ArrowUp' || (key === 'k' && ctrlKey)) {
      this.selectedIndex = Math.max(0, this.selectedIndex - 1);
      this.handleScrollIntoSelected();
      e.preventDefault();
    }

    if (key === 'ArrowDown' || (key === 'j' && ctrlKey)) {
      this.selectedIndex = Math.min(hits.length || 0, this.selectedIndex + 1);
      this.handleScrollIntoSelected();
      e.preventDefault();
    }

    if (key === 'Enter') {
      const hit = hits[this.selectedIndex];
      if (hit) {
        this.handleOpenLink(hit);
      }
    }
  };

  handleScrollIntoSelected() {
    const selectedElement = this.shadowRoot?.querySelector(
      `[data-index="${this.selectedIndex}"]`
    );
    if (selectedElement) {
      selectedElement.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  }

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

      .search-form__commands-item {
      }

      .search-form__commands-item span {
      }
    `,
  ];
}

declare global {
  interface HTMLElementTagNameMap {
    'search-form': SearchForm;
  }
}
