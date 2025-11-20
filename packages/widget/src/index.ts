import { SearchModal } from '@halo-dev/search-widget';
import '@halo-dev/search-widget/var.css';
import type { SearchOption } from '@halo-dev/api-client';

export { SearchModal };

const searchModalElement = document.createElement(
  'search-modal'
) as SearchModal;

document.body.append(searchModalElement);

export function open(options: SearchOption) {
  searchModalElement.options = options;
  searchModalElement.open = true;
}
