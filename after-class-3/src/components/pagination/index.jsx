const Pagination = ({ currentPage, handleChange, totalPages }) => {

    if (totalPages < 2) return null;
    
    return (
      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center">
          <li className={`page-item ${currentPage <= 1 ? "disabled" : ""}`}>
            <button onClick={() => handleChange(1)} className="page-link">
              Inicio
            </button>
          </li>
          {currentPage > 2 && (
            <li className="page-item">
              <button
                onClick={() => handleChange(currentPage - 2)}
                className="page-link"
              >
                {currentPage - 2}
              </button>
            </li>
          )}
          {currentPage > 1 && (
            <li className="page-item">
              <button
                onClick={() => handleChange(currentPage - 1)}
                className="page-link"
              >
                {currentPage - 1}
              </button>
            </li>
          )}
  
          <li className={`page-item disabled`}>
            <button onClick={() => handleChange(1)} className="page-link">
              {currentPage}
            </button>
          </li>
          {currentPage < totalPages && (
            <li className="page-item">
              <button
                onClick={() => handleChange(currentPage + 1)}
                className="page-link"
              >
                {currentPage + 1}
              </button>
            </li>
          )}
          {currentPage < totalPages - 1 && (
            <li className="page-item">
              <button
                onClick={() => handleChange(currentPage + 2)}
                className="page-link"
              >
                {currentPage + 2}
              </button>
            </li>
          )}
          <li
            className={`page-item ${currentPage >= totalPages ? "disabled" : ""}`}
          >
            <button
              onClick={() => handleChange(totalPages)}
              className="page-link"
            >
              Última
            </button>
          </li>
        </ul>
      </nav>
    )
}

export { Pagination }