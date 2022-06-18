import Footer from "./Footer"
import Header from "./Header"
/* TODO: move this component to _app.js */
export default function Home({ children, isHome }) {
  return (
    <>
      <Header isHome={isHome} />
      <main>{children}</main>
      <Footer />
    </>
  );
}