// src/utils/onStartApp.tsx
import { usePioneer } from "@coinmasters/pioneer-react";
import { WalletOption, availableChainsByWallet } from "@coinmasters/types";

export const useOnStartApp = () => {
  const { onStart } = usePioneer();

  const onStartApp = async () => {
    try {
      const walletsVerbose = [];
      // Dynamic import for keepkeyWallet
      // const keepkeyModule = await import("@coinmasters/wallet-keepkey");
      // const keepkeyWallet = keepkeyModule.keepkeyWallet;
      //
      // const pioneerSetup: any = {
      //   appName: "Pioneer Template",
      //   appIcon: "https://pioneers.dev/coins/pioneerMan.png",
      // };
      //
      // const walletKeepKey = {
      //   type: WalletOption.KEEPKEY,
      //   icon: "https://pioneers.dev/coins/keepkey.png",
      //   chains: availableChainsByWallet[WalletOption.KEEPKEY],
      //   wallet: keepkeyWallet,
      //   status: "offline",
      //   isConnected: false,
      // };
      //
      // // Push the keepkey wallet to the wallets array
      // walletsVerbose.push(walletKeepKey);
      //
      // // Call onStart with the populated walletsVerbose array and pioneerSetup object
      // onStart(walletsVerbose, pioneerSetup);
    } catch (e) {
      console.error("Failed to start app!", e);
    }
  };

  return onStartApp;
};
