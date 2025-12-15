import Footer from "../Footer/Footer.jsx";
import Gapper from "../Gapper/Gapper.jsx";
import Header from "../Header/Header.jsx";
import "./ErrorPage.css";
export default function ErrorPage() {
  return (
    <>
      <Header />
      <Gapper onname={"doublegapper"} />
      <main className="errorname">
        <h1>An Error Occoured</h1>
        <br />
        <p>coundn't find the page</p>
        <br />
        <p>Please click on the icon to get back to Homepage</p>
      </main>
      <Gapper onname={"doublegapper"} />
      <Footer />
    </>
  );
}
