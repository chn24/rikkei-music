import Footer from "./components/Footer";
import Header from "./components/Header";

const Layout = ({ children }) => {
  return (
    <div id="layout">
      <Header />
      {children}

      <Footer />
    </div>
  );
};

export default Layout;
