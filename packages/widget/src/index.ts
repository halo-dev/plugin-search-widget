import { SearchModal } from '@halo-dev/search-widget';
import '@halo-dev/search-widget/var.css';
import type { SearchOption } from '@halo-dev/api-client';

export { SearchModal };

const searchModalElement = document.createElement(
  'search-modal'
) as SearchModal;

document.body.append(searchModalElement);

export interface OpenOptions {
  /**
   * Search options for the search API
   */
  searchOptions?: SearchOption;
  /**
   * Whether to lock the body scroll when modal is open
   * @default true
   */
  lockScroll?: boolean;
}

export function open(options?: SearchOption | OpenOptions) {
  // Handle backward compatibility
  if (options) {
    // Check if it's the new OpenOptions format
    if ('searchOptions' in options || 'lockScroll' in options) {
      const openOptions = options as OpenOptions;
      searchModalElement.options = openOptions.searchOptions || {};
      if (openOptions.lockScroll !== undefined) {
        searchModalElement.lockScroll = openOptions.lockScroll;
      }
    } else {
      // Legacy SearchOption format
      searchModalElement.options = options;
    }
  }
  searchModalElement.open = true;
}
