import PerPageNumber from './PerPageNumber';

import './itemsPerPage.scss';

export default function ItemsPerPage(): JSX.Element {
  return (
    <div className="per-page">
      <h3 className="per-page__header">Per page</h3>
      <PerPageNumber displayedValue={5} />
      <PerPageNumber displayedValue={10} />
      <PerPageNumber displayedValue={20} />
    </div>
  );
}
