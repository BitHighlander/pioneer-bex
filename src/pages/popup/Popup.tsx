import React, { useEffect } from "react";
import logo from "@assets/img/Pioneer.png";
import "@pages/popup/Popup.css";
const Popup = () => {
  const onStart = async function () {
    try {

    } catch (e) {
      console.error(e);
    }
  };
  // onStart()
  useEffect(() => {
    onStart();
  }, []); // once on startup

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          bro? Edit <code>src/pages/popup/Popup.tsx</code> and save to reload.
        </p>
      </header>
    </div>
  );
};

export default Popup;
