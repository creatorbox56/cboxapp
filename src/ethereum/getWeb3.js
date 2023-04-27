import Web3 from  "web3";

const resolveWeb3 = (resolve) => {
    let { web3 } = window;
    const alreadyInjected = typeof web3 !== "undefined";

if (alreadyInjected){
    console.log("Injected Web3 detected");
    web3 = new Web3(web3.currentProvider);
}

resolve(web3);
};

export default () =>
new Promise((resolve) => {
    window.addEventListener("load", () => {
        resolveWeb3(resolve);
    });

    if (document.readyState === "complete"){
        resolveWeb3(resolve);
    }
});
