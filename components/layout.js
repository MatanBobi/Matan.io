import Footer from "../components/footer";
import Meta from "../components/meta";
import { Header } from "../components/Header/";

export default function Layout({ children }) {
  return (
    <>
      <Meta />
      <div className="min-h-screen bg-brand-background text-white dark">
        <Header />
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
}
