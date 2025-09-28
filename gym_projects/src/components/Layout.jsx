import Footer from "./Footer";
import Header from "./Header";

const Layout = (props) => {

  const { children } = props;

  const header = <Header />;
  const footer = <Footer />;


  return (
    <>
      { header }
      { children }
      { footer }
    </>
  )
}
export default Layout