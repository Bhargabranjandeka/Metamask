import { useEffect, useState } from "react";

function App() {
  const [walletAddress, setWalletAddress] = useState("");

  const connectWallet = async () => {
    if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
      try {
        /* MetaMask is installed */
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setWalletAddress(accounts[0]);
        console.log(accounts[0]);
      } catch (err) {
        console.error(err.message);
      }
    } else {
      /* MetaMask is not installed */
      alert("metamask is not installed")
    }
  };




  return <div>
    <nav className="navbar">
      <div className="container">
        <div className="navbar-brand">
          <h1 className="navbar-item is-size-4">Ocean Token (OCT)</h1>
        </div>
        <div id="navbarMenu" className="navbar-menu">
          <div className="navbar-end is-align-items-center">
            <button
              className="button is-white connect-wallet"
              onClick={connectWallet}
            >
              <span className="is-link has-text-weight-bold">
                {walletAddress && walletAddress.length > 0
                  ? `Connected: ${walletAddress.substring(
                    0,
                    6
                  )}...${walletAddress.substring(38)}`
                  : "Connect Wallet"}
              </span>
            </button>
          </div>
        </div>
      </div>
    </nav>

  </div>

}

export default App;
