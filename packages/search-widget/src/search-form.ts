import type {
  HaloDocument,
  SearchOption,
  SearchResult,
} from '@halo-dev/api-client';
import { msg } from '@lit/localize';
import resetStyles from '@unocss/reset/tailwind.css?inline';
import { type DebouncedFunction, debounce } from 'es-toolkit';
import { uniqBy } from 'es-toolkit/compat';
import { css, html, LitElement, unsafeCSS } from 'lit';
import { property, state } from 'lit/decorators.js';
import { createRef, type Ref, ref } from 'lit/directives/ref.js';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { HISTORY_KEY, MAX_HISTORY_ITEMS } from './constants';
import baseStyles from './styles/base';

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
      <div class="p-3 z-1 bg-base sticky top-0 border-b border-divider">
        <form
          class="flex items-center ring-2 h-12 rounded-base px-2.5 ring-primary bg-base"
          @submit=${(e: Event) => e.preventDefault()}
        >
          <span
            class="shrink flex-none size-6 text-primary ${
              this.loading
                ? 'i-lucide-loader-circle animate-spin'
                : 'i-lucide-search'
            }"
          ></span>
          <input
            @input="${this.onInput}"
            placeholder=${msg('Enter keywords to search')}
            autocomplete="off"
            spellcheck="false"
            ${ref(this.inputRef)}
            class="flex-1 min-w-0 outline-none text-content h-full px-2.5 bg-transparent"
          />
          ${
            this.keyword
              ? html`
                <span
                  @click=${this.handleClearInput}
                  class="flex-none cursor-pointer shrink i-lucide-x size-5 text-muted hover:text-content"
                ></span>
              `
              : ''
          }
        </form>
      </div>

      ${this.keyword ? this.renderItems() : this.renderHistoryItems()}

      <div
        class="border-t border-divider p-3 bg-base sticky bottom-0 space-x-5 flex justify-end"
      >
        ${[
          {
            text: html`${msg('Select')}`,
            kbdIcons: ['i-lucide-arrow-up', 'i-lucide-arrow-down'],
          },
          {
            text: html`${msg('Confirm')}`,
            kbdIcons: ['i-lucide-corner-down-left'],
          },
          {
            text: html`${msg('Close')}`,
            kbdIcons: ['i-mdi-keyboard-esc'],
          },
        ].map(
          (item) => html`
            <div class="flex items-center space-x-1.5">
              ${item.kbdIcons.map(
                (icon) => html`
                  <kbd
                    class="inline-flex justify-center items-center py-1 px-1.5 bg-base border border-kbd font-mono text-sm text-content rounded-base shadow-kbd"
                  >
                    <i class="${icon}"></i>
                  </kbd>
                `
              )}
              <span class="text-xs text-muted">${item.text}</span>
            </div>
          `
        )}
      </div>
    `;
  }

  handleClearInput() {
    this.keyword = '';
    this.searchResult = undefined;
    if (this.inputRef.value) {
      this.inputRef.value.value = '';
      this.inputRef.value.focus();
    }
  }

  renderItems() {
    return html`<div class="p-3">
      ${!this.searchResult?.hits?.length ? this.renderEmpty() : ''}
      <ul class="space-y-1.5" role="list">
        ${this.searchResult?.hits?.map((hit, index) =>
          this.renderListItem(hit, index, 'i-lucide-file-text')
        )}
      </ul>
    </div>`;
  }

  renderEmpty() {
    return html`<div class="flex py-4 justify-center text-sm text-muted">
      <span>${msg('No search results')}</span>
    </div>`;
  }

  renderHistoryItems() {
    return html`
      <div class="p-3">
        ${
          this.historyHits.length
            ? html`<div class="flex justify-between items-center">
                <h3 class="text-sm font-medium text-primary">
                  ${msg('Recent')}
                </h3>
                <span
                  class="text-xs cursor-pointer text-muted hover:text-content"
                  @click=${this.handleClearHistory}
                >
                  ${msg('Clear')}
                </span>
              </div>
              <ul class="mt-3 space-y-1.5" role="list">
                ${this.historyHits?.map((hit, index) =>
                  this.renderListItem(hit, index, 'i-lucide-history')
                )}
              </ul>`
            : this.renderEmpty()
        }
      </div>
    `;
  }

  renderListItem(hit: HaloDocument, index: number, listIcon: string) {
    return html`
      <li
        @click="${() => this.handleOpenLink(hit)}"
        @mouseenter=${() => {
          this.selectedIndex = index;
        }}
        class="shadow-sm flex items-center space-x-3 rounded-base cursor-pointer p-3 bg-hit [&_mark]:text-primary [&_mark]:font-semibold [&_mark]:bg-transparent ${
          index === this.selectedIndex
            ? '!bg-primary [&_mark]:!text-white [&_mark]:underline'
            : ''
        }"
        data-index=${index}
      >
        <span
          class="flex-none shrink ${listIcon} ${
            this.selectedIndex === index ? 'text-white' : 'text-muted'
          }"
        ></span>
        <div class="flex-1 space-y-1.5 min-w-0">
          <h2
            class="text-sm font-medium ${
              this.selectedIndex === index ? 'text-white' : 'text-content'
            }"
          >
            ${unsafeHTML(hit.title)}
          </h2>
          ${
            hit.description
              ? html`
                <p
                  class="text-xs leading-6 ${
                    this.selectedIndex === index
                      ? 'text-white/90'
                      : 'text-muted'
                  }"
                >
                  ${unsafeHTML(hit.description)}
                </p>
              `
              : ''
          }
        </div>
        <span
          class="i-lucide-corner-down-left flex-none shrink text-white invisible ${
            this.selectedIndex === index ? '!visible' : ''
          }"
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

  fetchHits: DebouncedFunction<(keyword: string) => Promise<void>> = debounce(
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
    const updatedHistory = uniqBy([hit, ...this.historyHits], 'id').slice(
      0,
      MAX_HISTORY_ITEMS
    );
    localStorage.setItem(HISTORY_KEY, JSON.stringify(updatedHistory));
    this.historyHits = updatedHistory;
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
    baseStyles,
    css`
      @unocss-placeholder;
    `,
  ];
}

customElements.get('search-form') ||
  customElements.define('search-form', SearchForm);

declare global {
  interface HTMLElementTagNameMap {
    'search-form': SearchForm;
  }
}
