import * as React from 'react';

interface IOwnProps {
  itemsPerPage: number;
  totalItems: number;
  currentPage: number;
  onChangePage: (pageNumber: number) => void;
}

const Pagination: React.FC<IOwnProps> = ({
  itemsPerPage,
  totalItems,
  currentPage,
  onChangePage,
}) => {
  const totalPages: number = totalItems / itemsPerPage;

  const onChange = (number: number, e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    onChangePage(number);
  };

  const renderPageNumbers = () =>
    Array.from({ length: totalPages }, (_, i) => i + 1).map(
      (number: number, i) => (
        <li
          key={i}
          className={`page-item ${currentPage === number && 'active'}`}
        >
          <a
            className="page-link"
            onClick={(e) => {
              onChange(number, e);
            }}
            href="#"
          >
            {number}
          </a>
        </li>
      )
    );

  return (
    <>
      {totalItems > itemsPerPage && (
        <nav>
          <ul className="pagination">
            {currentPage > 1 ? (
              <li className="page-item">
                <a
                  className="page-link"
                  href="#"
                  onClick={(e) => {
                    onChange(currentPage - 1, e);
                  }}
                >
                  Previous
                </a>
              </li>
            ) : (
              <li className="page-item disabled">
                <a className="page-link" href="#">
                  Previous
                </a>
              </li>
            )}
            {renderPageNumbers()}
            {currentPage !== totalPages ? (
              <li className="page-item">
                <a
                  className="page-link"
                  href="#"
                  onClick={(e) => {
                    onChange(currentPage + 1, e);
                  }}
                >
                  Next
                </a>
              </li>
            ) : (
              <li className="page-item disabled">
                <a
                  className="page-link"
                  href="#"
                  onClick={(e) => {
                    onChange(currentPage + 1, e);
                  }}
                >
                  Next
                </a>
              </li>
            )}
          </ul>
        </nav>
      )}
    </>
  );
};

export default Pagination;
