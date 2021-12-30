import classNames from "classnames";

const defaultClassName =
  "rounded-full py-5 px-7 border-brand-light-grey dark:border-brand-dark-grey border font-bold";

export const Button = ({ children, onClick, disabled, className }) => {
  return (
    <button
      onClick={onClick}
      className={classNames(defaultClassName, className)}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
