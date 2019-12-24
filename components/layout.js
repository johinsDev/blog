import Header from "./header";
import "../styles/main.css";
import Footer from "./footer";

export default function Layout(props) {
  return (
    <>
      <Header />
      <main className="w-full h-full flex flex-col flex-1">
        {props.children}
      </main>
      {!props.removeFooter && <Footer />}
    </>
  );
}
