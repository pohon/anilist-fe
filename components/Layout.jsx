import Footer from "./Footer";
import Header from "./Header";

export default function Home({ children, isHome }) {
  return (
    <>
      <Header isHome={isHome} />
      <main>{children}</main>
      <Footer />
    </>
  );
}