export default function PostTitle({ children }) {
  return (
    <h1 className="dark:text-white text-brand-black text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter leading-tight text-left mb-3 md:leading-none md:mb-5 text-balance">
      {children}
    </h1>
  );
}
