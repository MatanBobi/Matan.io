export const HamburgerMenu = ({ onChange, value }) => {
  return (
    <label className="ham-menu flex flex-col cursor-pointer" htmlFor="check">
      <input
        className="hidden peer"
        type="checkbox"
        id="check"
        onChange={onChange}
        value={value}
      />
      <span className="bg-brand-background dark:bg-white w-2/4 peer-checked:origin-bottom"></span>
      <span className="bg-brand-background dark:bg-white w-full peer-checked:origin-top"></span>
      <span className="bg-brand-background dark:bg-white w-3/4 peer-checked:origin-bottom peer-checked:w-2/4"></span>
    </label>
  );
};

