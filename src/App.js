import "./styles.css";
import powerBtn from "./asset/power-btn.png";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="front"></div>
        <div className="bg-container">
          <span className="dot1"></span>
          <span className="dot2"></span>
          <span className="dot3"></span>
          <span className="dot4"></span>
        </div>
        <div className="content">
          <div className="brand-name">
            <h2>Renesas</h2>
            <p>Battery Management System</p>
          </div>
          <div className="intro">
            <p>Next Generation Power Built for you</p>
            <p>
              Accurate monitering, protection and optimised performance,
              ultimate energy efficiency with a revolutionary experience
            </p>
          </div>
          <div>
            <button className="power-btn">
              <div>
                <img src={powerBtn} alt="Power Button" />
              </div>
              <span>Power On</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
