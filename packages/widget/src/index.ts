import { SearchModal } from '@halo-dev/search-widget';
import '@halo-dev/search-widget/var.css';

export { SearchModal };

const searchModalElement = document.createElement(
  'search-modal'
) as SearchModal;

document.body.append(searchModalElement);

export function open() {
  searchModalElement.open = true;
}
