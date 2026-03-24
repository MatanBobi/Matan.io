export const Input = ({
  children,
  onChange,
  value,
  disabled,
  placeholder,
  role,
  ...rest
}) => {
  const onChangeWrapper = (e) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };

  return (
    <input
      onChange={onChangeWrapper}
      value={value}
      className="rounded-full w-full py-4 px-6 border-brand-light-grey bg-white dark:border-brand-dark-grey dark:bg-brand-background border font-bold transition-all focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2 focus-visible:outline-none"
      disabled={disabled}
      placeholder={placeholder}
      role={role}
      {...rest}
    />
  );
};
