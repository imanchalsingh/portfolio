import { useState, useEffect } from "react";
import "./App.css";
import Portfolio from "./components/ui/Portfolio";

function App() {
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {isDesktop ? (
        <Portfolio />
      ) : (
        <div className="device-warning">
          <p>
            It's not available on mobile or tablet. Please open it on a desktop
            device.
          </p>
        </div>
      )}
    </>
  );
}

export default App;
