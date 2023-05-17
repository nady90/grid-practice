import { useEffect, useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const headingRef = useRef(null);
  const [heading, setHeading] = useState("");

  useEffect(() => {
    window.addEventListener("resize", () => {
      const width = window.innerWidth;
      if (width >= 992) {
        setHeading("Desktop");
      } else if (width <= 992 && width >= 480) {
        setHeading("Tablet");
      } else {
        setHeading("Mobile");
      }
    });

    const width = window.innerWidth;
    if (width >= 992) {
      setHeading("Desktop");
    } else if (width <= 992 && width >= 480) {
      setHeading("Tablet");
    } else {
      setHeading("Mobile");
    }
  }, []);

  return (
    <div className="container">
      <h1 ref={headingRef}>{heading}</h1>
      <div className="grid-container">
        <div className="grid-item header">header</div>
        <div className="grid-item menu">menu</div>
        <div className="grid-item hero">hero</div>
        <div className="grid-item main">main</div>
        <div className="grid-item banner">banner</div>
        <div className="extra-content">
          <div className="grid-item extra">extra</div>
          <div className="grid-item image">image</div>
        </div>
      </div>
    </div>
  );
}

export default App;
