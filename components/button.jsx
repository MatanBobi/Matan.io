export default function Button({ children, onClick, disabled }) {
  return (
    <button
      className="bg-indigo-500 pt-2 pb-2 pr-6 pl-6 rounded-md text-white"
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
