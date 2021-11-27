export default function Container({ children, className }) {
  return (
    <div className={`${className ? className : ""} container mx-auto px-14`}>
      {children}
    </div>
  );
}
