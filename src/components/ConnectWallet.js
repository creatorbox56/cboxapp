import React, {Component} from "react";

import getWeb3 from "../ethereum/getWeb3";
import getContract from "../ethereum/getContract"; 
import contractDefinition from "../build/contracts/ARTCollectible.json";
import Spinner from "react-bootstrap/Spinner";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import Form from "react-bootstrap/Form";
import styles from "../styles/ConnectWallet.module.scss";

class ConnectWallet extends Component{
   
    constructor(props) {
        super(props);
        
        this.state = {

        address: "CONNECT WALLET",
        errorMessage: "",

        };

       
    }

    connectWalletHandler = async(event) => {
    event.preventDefault();
     try {
        if(window.ethereum) {
            window.ethereum.request({ method: 'eth_requestAccounts' })
            .then(result => {
                this.accountChangedHandler(result[0]);
            })
           
            }
     }
     catch(error){
        this.setState({errorMessage: "Please install Metamask"})
     }

    
    };

    accountChangedHandler = (newAccount) => {
        if(newAccount.toString()!= ""){
            let newAccount1 = newAccount.toString();
            let result = newAccount1.replace(newAccount1.substring(5,35),"...")
            this.setState({address: result})
            const data = "This is data from Child Component to the Parent Component."
            this.props.childToParent(newAccount1)
        }
      else{
        this.setState({address: "CONNECT WALLET"});
      }
    }

    childToParent = () => {
        const data = "This is data from Child Component to the Parent Component."
    }

    chainChangedHandler = () => {
        window.location.reload();
        this.setState({address: "CONNECT WALLET"});
    }

    componentDidMount = () => {
        try{
            window.ethereum.on('accountsChanged', this.accountChangedHandler);
            window.ethereum.on('chainChanged', this.chainChangedHandler);
        }
    
        catch(error){
            this.setState({error: "Please install metamask"})
        }
    }

render(){
   
    return(
 
            <Form onSubmit={this.connectWalletHandler}>
              <div className={styles.address}>
             <a href="/" onClick={this.connectWalletHandler}>{this.state.address}</a></div>
            </Form>
     
        )
    }
}

export default ConnectWallet;