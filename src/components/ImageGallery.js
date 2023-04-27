import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import { GridList, GridListTile } from "@material-ui/core";
import ImageList from '@material-ui/core/ImageList'
import { Container } from 'react-bootstrap';

const socket = io();

function ImageGallery() {
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [lastPong, setLastPong] = useState(null);
 // const [valuesArray, setValues] = useState("null");
  const people = [
    { name: "name 1" },
    { name: "name 2" },
    { name: "name 3" },
    { name: "name 4" },
    { name: "name 5" },
    { name: "name 6" },
    { name: "name 7" },
    { name: "name 8" }
  ];
  const [countryList, setCountries] = useState([]);
  const [valuesArray,setValues]=useState({
    id:'',
    value:''
})
let details = [];
let obj;
  
let wholeArray = [];          
 let tmp;             
  useEffect(() => {
    socket.on('connect', () => {
      setIsConnected(true);

      socket.on('new_data', function(msg) {
       // console.log('new_data', msg)
     
            //setValues(JSON.parse(msg).new_val);
            let imageDataSet=(JSON.parse(msg).new_val);
           // setValues({id:imageDataSet.id, value:imageDataSet.id})

           // setValues(valuesArray => [{id:"Test",...valuesArray}] );
            //wholeArray = Object.keys(companyData).map(key => companyData[key]);
            //tmp = {name: imageDataSet.id};
            //wholeArray.push(tmp);

/*             setValues((valuesArray) => [
                ...valuesArray,
                {id:imageDataSet.id, value:imageDataSet.id},
              ]);
            console.log(valuesArray); */
            setCountries((countryList) => [ ...countryList, {id:imageDataSet.id, name:'india'}, ]);
    
        
           // console.log(Object.values(companyData))
           //console.log(JSON.parse(msg));
           //setData(Object.entries(JSON.parse(msg).new_val).map(([key, value]) => ({key, value})));
           // console.log(obj);
          //  console.log(companyData.id);
         // console.log(Object.keys(wholeArray).map(key => [key, wholeArray[key]]))


      })
    });

    socket.on('disconnect', () => {
      setIsConnected(false);
    });

    socket.on('pong', () => {
      setLastPong(new Date().toISOString());
    });

    return () => {
      socket.off('connect');
      socket.off('disconnect');
      socket.off('pong');
    };
  }, []);




  return (

    <div className="image"><h1>Gallery</h1>


<GridList cellHeight={200} cols={4} style={{ height: 600 }}>
        {countryList.map((data) => (
          <GridListTile key={data.id}>
           
            <p>{data.id}</p>
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

export default ImageGallery;