export const Input = ({ children, onChange, value, disabled, placeholder }) => {
  const onChangeWrapper = (e) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };

  return (
    <input
      onChange={onChangeWrapper}
      value={value}
      className="rounded-full w-full py-5 px-7 border-brand-dark-grey bg-brand-background border font-bold"
      disabled={disabled}
      placeholder={placeholder}
    />
  );
};
