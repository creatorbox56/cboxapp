
function addVatt(cscript){
    return new Promise((resolve, reject) => {
     
      var buffer = Buffer.from(cscript);
      //var fs = new File([buffer],"test.js", {type: "application/javascript"});
      //var b = new Blob(['hi', 'constructing', 'a', 'blob']);
      //var blob2 = new Blob([buffer], {type:'application/javascript'});
      //new Blob([]);
      //console.log(new Blob([]))
         client.add(buffer).then((res) => {
           pathuri = 'https://sngglz.infura-ipfs.io/ipfs/' + res.path;
           //pathuri = 'https://ipfs.io/ipfs/Qme1HiGd53dGyHe5nWnpf7LtHhfTitc8G92mKjUHpxkHzC';
            let json = JSON.stringify({"name":"testtube","description": "braintube", "animation_url": pathuri, "attributes":[{"trate_type":"Base","value":"Starfish"}]}, null, "\t");
           // console.log(json);
            client.add(json).then((res) => {
            let  tokenpath = res.path;
             resolve(tokenpath);
            }); 

        }); 
    })
   
}



const ipfsClient = require('ipfs-http-client');
const projectId = '2DO2QnaMbeSkpbJRdH5QjyfAK4V';
const projectSecret = '0c846843f6b977a3158fda4c963afae0';
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

module.exports = {
    name: 'test',
    addVatt,
    doStuff: async (cscript) => {
        let pathi = await addVatt(cscript)
        console.log("path "+pathi);
        return pathi;
    }
}