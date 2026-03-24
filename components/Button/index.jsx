import classNames from "classnames";

const defaultClassName =
  "rounded-full py-5 px-7 border-brand-light-grey hover:border-brand-dark-grey border font-bold dark:border-brand-dark-grey dark:hover:border-brand-light-grey transition-all duration-200 focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2";

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
