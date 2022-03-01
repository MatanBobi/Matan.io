export default function PostTitle({ children }) {
  return (
    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter leading-tight text-left mb-2 md:leading-none md:mb-4">
      {children}
    </h1>
  );
}
