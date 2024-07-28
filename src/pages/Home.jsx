import Navbar from "../components/Navbar.jsx";
import { Link } from "react-router-dom";
import MedPos from "../assets/img/med-image.jpg";
import Footer from "../components/Footer.jsx";
import "../assets/css/Home.css";
function Home() {
  return (
    <>
      <Navbar />

      <div className="text-center">
        <img src={MedPos} alt="Med-pos" />
      </div>
      <div className="text-center">
        <button type="button" className="btn btn-primary m-2 mb-5 px-5 py-2">
          <Link className="link" to={`/Blog`}>
            Blog
          </Link>
        </button>
        <button type="button" className="btn btn-info m-2 mb-5 px-5 py-2">
          <Link className="link" to={`/Timer`}>
            Timer
          </Link>
        </button>
      </div>
      <Footer />
    </>
  );
}

export default Home;
