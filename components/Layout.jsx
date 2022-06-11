import Footer from "./Footer";
import Header from "./Header";

export default function Home({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}