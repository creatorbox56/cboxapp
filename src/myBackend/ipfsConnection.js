

 exports.saveIPFS = (cscript, text) => {
    const ipfsClient = require('ipfs-http-client');
    const projectId = '28s9Sl0dgLYkIdoCnT9SH1SCes8';
    const projectSecret = '8dd9e897d0744812ccada4ff9084d654';

    const auth =
      'Basic ' + Buffer.from(projectId + ':' + projectSecret).toString('base64')
  
    const client = ipfsClient.create({
      host: 'ipfs.infura.io',
      port: 5001,
      protocol: 'https',
      //method: 'POST',
      //apiPath: '/api/v0/',
       headers: {
         authorization: auth
       },
     
    })


   
    //var json2 =  JSON.stringify(json,  null, "\t");
    //  client.add(buf, async(err, res) => {
    //     console.log(res);
    //     if(err){
    //         console.log(err)
    //     }
    //     else {
    //         const hash = await res[0].hash;
    //         console.log(hash);
    //     }
    // });
    //   client.add('Hello World', (err, res) => {
    //   console.log(res);
    //   if(err){
    //     console.log(err)
    //   }
    //   else {
    //     console.log(res);
    //   }
    // });
    client.add(cscript).then((res) => {

        console.log(res.path);

          pathuri = 'https://ipfs.infura.io/ipfs/' + res.path;
          let json = JSON.stringify('{"name":"tiles","description": "tile project", "animation_url":"' + pathuri +'", "attributes":[{"id":"1","name":"CEO Steve Jobs"}]}, null, "\t"');
          console.log(json);
          client.add(json).then((res) => {
          console.log(res.path);
          const tokenpath = res.path;
          console.log("yeagg");
          });
        
    

     
  });
  //   client.pin.add(buf).then((res) => {
  //     console.log(res.path);
  // });
/*     let req = client.pin.add(json, (err, res) => {
      if(err){
        console.log(err);
      }
      console.log(res);
      // let body = '';
      // res.on('data', function (chunk) {
      //     body += chunk;
      }); */
 
    //var original = Promise.resolve(result);
    // let result2 =  await client.add(buf)
    //       .then(result2 => {
    //       //   pathuri = 'https://ipfs.infura.io/ipfs/' + result2.path;
    //          console.log(result2.path);
 
    //        });
// const options = {
//     host: 'ipfs.infura.io',
//     port: 5001,
//     path: '/api/v0/',
//     method: 'POST',
//     auth: projectId + ':' + projectSecret,
// };


//}
    // client.add('Hello World', (res) => {
      
    //     console.log(res);
    //     });
  
        //var s = JSON.stringify(data.i.imageData);
        // let s = "test";
        // //let base64Image = s.split(';base64,').pop();
        // //var buf = Buffer.from(base64Image, 'base64');
        // //var buf = 
        // //var json;
        // let result2 = client.add(text)
        //   .then(result2 => {
        //     pathuri = 'https://ipfs.infura.io/ipfs/' + result2.path;
        //     console.log(pathuri);
        //   //  let json = '{"name":"tiles","description": "tile project", "animation_url":"ipfs://QmXthoVP25rsvMbngoZfdM8En53tP3Dtz7nCczqTSexiDZ/", "attributes":[{"id":"1","name":"CEO Steve Jobs"}]}';
        //     let json = '{"name":"tiles","description": "tile project", "image":"'+ pathuri +'", "attributes":[{"id":"1","name":"CEO Steve Jobs"}]}';
        //     let obj = JSON.parse(json);
        //     let result3 = client.add(json)
        //       .then(result3 => {
    
        //         console.log('https://ipfs.infura.io/ipfs/' + result3.path);
        //         let meta = 'https://ipfs.infura.io/ipfs/' + result3.path;

        //         return meta;
        //         //var data ={meta};
                
        //         //io.to(socket.id).emit('mouse',meta);
        //         // io.to(socket.id).emit('mouse', {
        //         //   data: meta
        //         // });
        //         //io.to(socket.id).emit("data",{data:meta})
                   
        //       });
    
        //   });

        
    
      
};

