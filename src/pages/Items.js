import io from 'socket.io-client';
import React, { Component } from "react";
import { GridList, GridListTile } from "@material-ui/core";
import ImageList from '@material-ui/core/ImageList'
import { Container } from 'react-bootstrap';
import { ImageListItem } from '@material-ui/core'
import { ImageListItemBar } from '@material-ui/core';
import ListSubheader from '@material-ui/core';
import IconButton from '@material-ui/core';
import InfoIcon from '@material-ui/core';
import styles from '../styles/ImageGallery.module.scss';
import Delete from '@mui/icons-material/Delete';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import { BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import queryString from 'querystring';
import { useLocation } from 'react-router';
import { withRouter } from 'react-router-dom';

export default class Items extends Component {
    _isMounted = false;
    constructor(props) {
      super(props);    
/*       this.countryList = {
        key: 'test',
        name:'test'
      } */
      this.state = {
         key: '',
         queries:''
      }

      
      //this.wallet = "";
     // this.socket = io('http://localhost:3000')
      //this.socket.on('detail_data', (value) => this.handleMessage(value));
   
      //this.socket.emit('send_wallet', {message: this.state.wallet} );
    }

    handleMessage(value) {

   
    //    let imageDataSet=(JSON.parse(value).new_val);
    //    console.log("New Data "+value['new_val']);
    //    //let imageDataSet = value2.new_val;
    //    console.log("Test "+imageDataSet);
    //    //console.log("Test "+imageDataSet.id);
    //   this.setState({
    //       countryList: [ ...this.state.countryList, {key:imageDataSet.id, image:imageDataSet.image}, ],
    //   }) 
    
    }
    componentWillUnmount() {
       this._isMounted = false;
      
      }
    
    componentDidMount() {
        this._isMounted = true;
        console.log(this.props);
        console.log(this.props.params.id);
        console.log(queryString.parse(window.location.search));
/*         this.socket.on("new_data", function(msg){
            let imageDataSet=(JSON.parse(msg).new_val);
            this.setState({
                countryList: [ ...this.countryList, {id:imageDataSet.id, name:'india'}, ],
            })
           
        }); */
      }



    UNSAFE_componentWillReceiveProps(nextProps){

        console.log(this.props);
        console.log(this.props.params.id);
        console.log(queryString.parse(window.location.search));
        //   console.log("Next Props "+nextProps.id);
        //   console.log("This Props "+this.props.id);
        //  // if(this.props.key !== nextProps.key){

        //   console.log("New Key " + this.state.id);
        //      //this.socket.emit('send_key', {message: nextProps.key} );
        //      this.setState({
        //          key: nextProps.id
        //     })
        //       return true;
          //}
         //else{
           // return false;
         //}
      }

    
    render()
    {


        // const search = this.props.location.search;

    return (
       
        <div className={styles.gallery}><h1>Gallery</h1>
         
        <p></p>
 {/*    <ImageList cols={2} rowHeight={320}>
        {this.state.countryList.map((data, idx) => (
         <ImageListItem  key={idx} className={styles.imageItem}  actionIcon={<FavoriteBorder fontSize="large" color="pink"/> }
          actionPosition="top">
      
           <Link to="/item">
            <img src={data.image}  width={320}/><ItemDetail key="Test"></ItemDetail> 
           </Link>
            <ImageListItemBar
            title={"Braintube"}
            subtitle={data.key}
            actionIcon={<FavoriteBorder fontSize="large" color="pink"/> }
            actionPosition="top"
          />
          </ImageListItem >
        ))}
      </ImageList > */}
     
        </div>
      );
    }
    
  }