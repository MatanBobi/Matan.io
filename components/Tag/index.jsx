export const Tag = ({ tag, selected, onClick }) => {
  return (
    <button
      key={tag}
      onClick={() => onClick(tag)}
      aria-pressed={selected}
      className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 border hover:scale-105 active:scale-95 focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2 ${
        selected
          ? "bg-brand-black text-white border-brand-black dark:bg-white dark:text-brand-black dark:border-white"
          : "border-brand-light-grey hover:border-brand-dark-grey dark:border-brand-dark-grey dark:hover:border-brand-light-grey"
      }`}
    >
      {tag}
    </button>
  );
};
