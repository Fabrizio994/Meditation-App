import Navbar from "../components/Navbar.jsx";
import TimerTool from "../components/TimerTool.jsx";
import Footer from "../components/Footer.jsx";
function Timer() {
  return (
    <>
      <Navbar />
      <h2 className="text-center">Timer</h2>
      <TimerTool />
      <Footer />
    </>
  );
}

export default Timer;
