import css from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ children, onClick, disabled }) => {
  return (
    <button className={css.button} onClick={onClick} disabled={disabled}>
      Load more
      {children}
    </button>
  );
};

export default LoadMoreBtn;
