import React, {Component} from "react";

//import getWeb3 from "../ethereum/getWeb3";
import getContract from "../ethereum/getContract";
import contractDefinition from "../build/contracts/ARTCollectible.json";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import axios from "axios";
import Web3 from 'web3';
import styles from "../styles/Mint.module.scss"
//const { useRef, useState, useEffect } = React;
export default class Mint extends Component{

    constructor(props) {
        super(props);
    this.state = {
        web3: null,
        contract: null,
        errorMessage : "",
        amount: 1,
        loading:false,
        seed: props.seed
    
    };
}


 shouldComponentUpdate(nextProps) {
    if(this.props.seed !== nextProps.seed){
        console.log('setting state '+nextProps.seed);
        this.setState({
           seed: nextProps
         })
         return true;
        }
       
        else{
            return false;
        }
    // Perform the required
    // activity inside it
}
    _onSubmitMint = async(event) => {
        event.preventDefault();
         //alert("mint" + this.state.amount);
        const { contract, web3, amount, seed } = this.state;
        //var BN = web3.utils.BN;

        this.setState({loading: true, errorMessage: ""});
        //console.log(seed);
        try{

           
            let toPay = 0.05*amount;
            const web3 = new Web3(Web3.givenProvider);
            const accounts = await web3.eth.requestAccounts();
            const contract = await getContract(web3, contractDefinition);
            //const accounts = await web3.eth.getAccounts();
            //console.log(accounts[0]);
             let res = await axios.post('/getCustomParams', {
                headers: {
              'Content-Type': 'application/json'
              },
              body: ({
              user: {
                  _seed: seed, 
             
                  }
                  })
                })
      
              
      
                let data = res.data; 
            
              let tokenp = "https://sngglz.infura-ipfs.io/ipfs/"+data;
              console.log(tokenp);
           
            await contract.methods.mintfromWeb(amount, tokenp).send({
                from: accounts[0],
                value: web3.utils.toWei(toPay.toString(), "ether")
            });
        }
        catch(err){
            this.setState({errorMessage: err.message});
        }

        this.setState({loading: false})

    };
    // async componentDidMount(){
    //     try{
    //         const web3 = await Web3;
    //         const contract = await getContract(web3, contractDefinition);
    //         this.setState({web3, contract});
    //         //console.log(web3);
    //         console.log("Test "+contract);
    //     }
    //     catch(error){
    //         this.setState({errorMessage: "no web3 provider found"})
    //     }
    // }

    render()
    {
        return <Container fluid>
            <Form onSubmit={this._onSubmitMint}>
                {/* <Button id={styles.btn_mint} variant="dark" type="submit" disabled={this.state.loading}>{this.state.loading ? <Spinner animation="border"></Spinner> : "Mint"}</Button> */}
                   <Button id={styles.btn_mint} variant="dark" type="submit" disabled="true">Mint</Button> 
                </Form>
        </Container>;
    }

}

