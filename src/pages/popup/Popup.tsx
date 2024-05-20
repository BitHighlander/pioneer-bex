import React, { useEffect } from "react";
import logo from "@assets/img/Pioneer.png";
import "@pages/popup/Popup.css";
import { SDK } from "@pioneer-sdk/sdk";
import { v4 as uuidv4 } from "uuid";
const Popup = () => {
  const onStart = async function () {
    try {
      console.log("popup opened!");
      const serviceKey: string | null = localStorage.getItem("serviceKey"); // KeepKey api key
      let queryKey: string | null = localStorage.getItem("queryKey");
      let username: string | null = localStorage.getItem("username");
      if (!queryKey) {
        queryKey = `key:${uuidv4()}`;
        localStorage.setItem("queryKey", queryKey);
      }
      if (!username) {
        username = `user:${uuidv4()}`;
        username = username.substring(0, 13);
        localStorage.setItem("username", username);
      }

      // const blockchains = [
      //   "bitcoin",
      //   "ethereum",
      //   "thorchain",
      //   "bitcoincash",
      //   "litecoin",
      //   "binance",
      //   "cosmos",
      //   "dogecoin",
      // ];
      //
      // // add custom paths
      // const paths: any = [];
      // const spec = "https://pioneers.dev/spec/swagger.json";
      // const wss = "wss://pioneers.dev";
      // // const spec = "http://127.0.0.1:9001/spec/swagger.json";
      // // const wss = "ws://127.0.0.1:9001";
      // const configPioneer: any = {
      //   blockchains,
      //   username,
      //   queryKey,
      //   spec,
      //   wss,
      //   paths,
      // };
      // console.log(configPioneer);
      // const appInit = new SDK(spec, configPioneer);

      //

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
          bro Edit <code>src/pages/popup/Popup.tsx</code> and save to reload.
        </p>
      </header>
    </div>
  );
};

export default Popup;
