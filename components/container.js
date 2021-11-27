export default function Container({ children, className }) {
  return (
    <div
      className={`${
        className ? className : ""
      } container mx-auto px-6 md:px-14`}
    >
      {children}
    </div>
  );
}
