export const Tag = ({ tag, selected, onClick }) => {
  return (
    <button
      key={tag}
      onClick={() => onClick(tag)}
      className={`px-3 py-1 rounded-full text-sm transition-all duration-200 border ${
        selected
          ? "border-brand-dark-grey dark:border-brand-light-grey"
          : "border-brand-light-grey hover:border-brand-dark-grey dark:border-brand-dark-grey dark:hover:border-brand-light-grey"
      }`}
    >
      {tag}
    </button>
  );
};
