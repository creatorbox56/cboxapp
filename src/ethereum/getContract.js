const getContractInstance = async (web3, contractDefinition) => {
    const networkId = await web3.eth.net.getId();
    const deployAddress = contractDefinition.networks[networkId].address;

    const instance = new web3.eth.Contract(
        contractDefinition.abi,
        deployAddress
    );
    return instance;
};

export default getContractInstance;