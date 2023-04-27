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


export default class IGallery extends React.Component {
    constructor(props) {
      super(props);    
/*       this.countryList = {
        key: 'test',
        name:'test'
      } */
      //this.handleClick = this.handleClick.bind(this);

      this.state = {
         countryList: [],
         wallet:'',
         key:"default2",
         counter:0    }
         this.wallet = "";
      this.socket = io('http://localhost:3000')
      this.socket.on('new_data', (value) => this.handleMessage(value));
      this.socket.on('initial_data', (value) => this.handleMessage2(value));
      this.socket.on('disconnect', function(){
      this.socket.disconnect();
    });
      this.socket.emit('send_wallet', {message: this.state.wallet} );
    }

    handleMessage(value) {

   
       let imageDataSet=(JSON.parse(value).new_val);
       console.log("New Data "+value['new_val']);
       //let imageDataSet = value2.new_val;
       console.log("Test "+imageDataSet);
       //console.log("Test "+imageDataSet.id);
      this.setState({
          countryList: [ ...this.state.countryList, {key:imageDataSet.id, 
            image:imageDataSet.image, 
            seed:imageDataSet.seed,
            colorset:imageDataSet.colorset,
            tubemode: imageDataSet.tube,
            mutation:imageDataSet.mutation,
            noise: imageDataSet.noise,
            rarity: imageDataSet.rarity,
            complexity: imageDataSet.complexity }, ],
      }) 
    
    }

    handleMessage2(value) {

    console.log("Initial Data "+value.id);
         //let imageDataSet=(JSON.parse(value).new_val);
         //console.log("Test "+imageDataSet);
        // console.log("Test "+value.id);
        this.setState({
            countryList: [ ...this.state.countryList, {key:value.id, 
              image: value.image, 
              seed: value.seed,
              colorset: value.colorset,
              tubemode: value.tube,
              mutation: value.mutation,
              noise: value.noise,
              rarity: value.rarity,
              complexity: value.complexity}, ],
        }) 
      
      }

    handleClick = (_key) => {
/*         console.log("Key in Gallery "+_key);
        console.log('before setState', this.state.key)
       
          
          
          this.setState((state => ({ 
                key: _key})));
         

            this.setState((state) => ({
              counter: state.counter + 1
            }));
            this.setState({key:_key}, () => console.log('after setState', this.state.key));
            console.log("Counter "+this.state.counter);
            console.log('after setState '+this.state.key); */

            //  this.props.history.push( {pathname: "/item",
            //  state: { key:"Steven" }});
      
    }
    componentDidMount() {

    
/*         this.socket.on("new_data", function(msg){
            let imageDataSet=(JSON.parse(msg).new_val);
            this.setState({
                countryList: [ ...this.countryList, {id:imageDataSet.id, name:'india'}, ],
            })
           
        }); */
      }


    UNSAFE_componentWillReceiveProps(nextProps){
          console.log("Next Props "+nextProps.wallet);
          console.log("This Props "+this.props.wallet);
          if(this.props.wallet !== nextProps.wallet){

          console.log("New Wallet2 " + this.state.wallet);
             this.socket.emit('send_wallet', {message: nextProps.wallet} );
             this.setState({
                 wallet: nextProps.wallet
            })
              return true;
          }
         else{
            return false;
         }
      }


    render()

    
    {

    return (

        <div className={styles.gallery}><h1>Gallery</h1>
         
    
    <ImageList cols={6} rowHeight={220}>
        {this.state.countryList.map((data, idx) => (
         <ImageListItem  key={idx} className={styles.imageItem}>
        <Link to={"/item/search?id=" + data.key+"&seed="+data.seed+"&colorset="+data.colorset+"&tube="+data.tubemode+"&mutation="+data.mutation
      +"&rarity="+data.rarity+"&noise="+data.noise} onClick={() => this.handleClick(data.key)}>
          
            <img src={data.image}  width={280} />
            </Link>
            <ImageListItemBar
            title={"Braintube"}
            subtitle={data.key}
            actionIcon={<FavoriteBorder fontSize="large" color="pink"/> }
            actionPosition="right"
          />
          </ImageListItem >
        ))}
      </ImageList >
     
        </div>
      );
    }
    
  }