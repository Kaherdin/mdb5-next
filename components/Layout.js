import Nav from "./Nav";
import Meta from "./Meta";
import Footer from "./Footer";
import { MDBContainer } from "mdb-react-ui-kit";

const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <Nav />

      <main>
        <MDBContainer>{children}</MDBContainer>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
