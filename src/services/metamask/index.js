import authenticationService from "../authentication";

export default class Metamask {
  static isMetamaskAvailable(ethereum) {
    if (!ethereum) {
      setTimeout(() => {
        window.open("https://metamask.io/");
      }, 2000);
      return false;
    }
    return true;
  }

  static async signMessage(message, nonce, account) {
    const { ethereum } = window;
    const params = [message, account, nonce];
    return ethereum.request({
      method: "personal_sign",
      params,
    });
  }
  static async requestAccount(payload) {
    const { ethereum } = window;
    if (this.isMetamaskAvailable(ethereum)) {
      try {
        const accounts = await ethereum.request({
          method: "eth_requestAccounts",
        });
        if (accounts?.length > 0) {
          const {
            data: { nonce },
          } = await authenticationService.getMetamaskUser({
            publicAddress: accounts[0],
          });
          const message = `I am signing my one-time nonce: ${nonce}`;
          const signature = await this.signMessage(message, nonce, accounts[0]);
          const { data } = await authenticationService.verifyMetamaskSignature({
            publicAddress: accounts[0],
            signature,
            referralCode: payload,
          });
          data.walletAddress = accounts[0];
          return { data };
        }
      } catch (error) {
        return {
          error,
        };
      }
    } else {
      return {
        error: Error("Please install the metamask extension"),
      };
    }
  }

  static async connectToMetamask(userId) {
    const { ethereum } = window;
    if (this.isMetamaskAvailable(ethereum)) {
      try {
        const accounts = await ethereum.request({
          method: "eth_requestAccounts",
        });
        if (accounts?.length > 0) {
          const response = await authenticationService.getMetamaskUser({
            publicAddress: accounts[0],
            userId,
          });
          if (response?.error) return { error: response.error };
          const { data: nonce } = response;
          const message = `I am signing my one-time nonce: ${nonce}`;
          const signature = await this.signMessage(message, nonce, accounts[0]);
          const { data, error } =
            await authenticationService.verifyMetamaskSignature({
              publicAddress: accounts[0],
              signature,
              userId,
            });
          if (data) {
            data.walletAddress = accounts[0];
            return { data };
          }
          if (error) {
            return { error };
          }
        }
      } catch (error) {
        console.log("Metamask Error -> L53", error);
        return {
          error,
        };
      }
    } else {
      return {
        error: Error("Please install the metamask extension"),
      };
    }
  }
}
