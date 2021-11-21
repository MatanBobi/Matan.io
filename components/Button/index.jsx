export const Button = ({ children, onClick, disabled }) => {
  return (
    <button
      onClick={onClick}
      className="rounded-full py-5 px-7 border-brand-dark-grey border font-bold"
      disabled={disabled}
    >
      {children}
    </button>
  );
};
