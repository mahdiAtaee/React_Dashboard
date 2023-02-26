const UsersTableFooter = () => {
  return (
    <div className="table_footer_wrapper">
      <div className="pagination_button">
        <span className="before c-pointer">&larr;</span>
        <span className="page active">1</span>
        <span className="page">2</span>
        <span className="page">3</span>
        <span className="next c-pointer">&rarr;</span>
      </div>
      <div className="pagination_count">
        <span>1 از 4 صفحه (34 آیتم)</span>
      </div>
    </div>
  );
};

export default UsersTableFooter;
