/* var express = require('express');
var bodyParser = require("body-parser");
const session = require('express-session');
var request = require('sync-request');
var app = express();
app.use(bodyParser.json({limit: '10000kb'}));
var tg;
var server = app.listen(5000);
var socket = require('socket.io');
var io = socket(server);
//io.sockets.on('connection', newConnection);
//import mytext from './App01.js';
var { getFullName } = require('./App01');
const helper = require('./ipfsDoStuff');
var r = require('rethinkdb');
var address
let wallet;
var wallet2;
let result_item;
var cKey;
const store = require("store2");
const { once } = require('process');
const { resourceLimits } = require('worker_threads');
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded( {extended: true} ))
app.use(session({
  secret: 'secret-key',
  resave: false,
  saveUninitialized: false,
}))
app.get('/', (req, res) => { res.send('hello world')
  })

app.get('/getRandomSeed', (req, res) => {
    let chars = "0123456789abcdef";
    let result = '0x';
    for (let i = 64; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
    return res.send(result);
})

app.post('/imageupload',(req,res) => {
  //req.file will now be available as a json object, save to mongodb, re: filename, path etc
 // console.log(req.body.body.user.data);
  //req.session.body.body.user._address;
  var b = req.body.body.user._data;
  address = req.body.body.user._address;
  seed = req.body.body.user._seed;
  tubemode = req.body.body.user._tubemode;
  colorset = req.body.body.user._colorset;
  noise = req.body.body.user._noise;
  mutation = req.body.body.user._mutation;
  stroke = req.body.body.user._strokeW;
  complexity =req.body.body.user._complexity;
  rarity = req.body.body.user._rarity;
  
  console.log(seed, tubemode, colorset, noise,mutation, stroke,complexity,rarity);
  wallet2 = address;
  //console.log("Wallet " +wallet);
  //var s = JSON.stringify(b);
  //console.log(s.slice(0,30));
  //console.log(b[0]["imageData"].slice(0,40));
  //let base64Image_tmp = s.split(';base64,').pop();
  //let base64Image_tmp2 = base64Image_tmp.split('"');
  //let base64Image = base64Image_tmp2[0];
   let base64Image = b[0]["imageData"];
   //console.log(base64Image.slice(0,40));

    r.connect({host: 'localhost', port: 28015})
    .then(function(conn) {
        return r.db('mydb').table('braintube').insert({image: base64Image, 
          seed: seed, 
          tube: tubemode,
          noise: noise,
          mutation: mutation,
          stroke: stroke,
          complexity: complexity,
          rarity: rarity,
          colorset: colorset,
          wallet1:req.body.body.user._address}).run(conn);
    })
    .then(function(result) {
        console.log(JSON.stringify(result, null, 2));
    });  

  
      res.send('rabbit')
})

app.post('/getCustomParams', (req, res) => { 
 
  var p0 = req.body.body.user._seed;

  // var p1 = req.body.body.user._spotlight;
  // var p2 = req.body.body.user._neon;
  // var p3 = req.body.body.user._basic;
  // var p4 = req.body.body.user._bg;
  // var p5 = req.body.body.user._wslider;
  // var p6 = req.body.body.user._jslider;
  // var p7 = req.body.body.user._sslider;
  // var p8 = req.body.body.user._cslider;


  var cscript = getFullName(p0);
  //console.log(tg);
  //saveScript(req.body.body.user._seed);
  //var tg = saveScript(req.body.body.user._seed);
  //console.log(saveScript(req.body.body.user._seed));
  //var tpath =  execSync(saveIPFS(cscript, req.body.body.user._seed));
  //console.log('req.body.name', req.body.user['name']);
  helper.doStuff(cscript).then((result) => {
    res.send(result);
  }).catch((err)=>{
    console.log(err);
  })    
    
})


app.post('/getItemDetail', (req, res) => { 
 
   cKey = req.body.body.user._key;
   console.log(cKey);

   getItemDetail((err, cursor, cKey)=> {
    cursor.each((err, data)=> {
    //console.log(JSON.stringify(data));
    res.send(JSON.stringify(data));
    })
  })  
    
})


io.on('connection', (socket)=>{
  // console.log('user connected')
  console.log('a user connected '+ socket.id);
  var f=0;
  socket.on('disconnect', function(){
     console.log('user disconnected ' + socket.id)
     //io.emit('disconnect',socket.id)
     f=0;
  })

  socket.on('detail_data', (data) =>{
    console.log("Get Detail"+data);
    })

  socket.on('send_wallet', (data) =>{
     f=+1;
     console.log('message wallet: ' + data.message);
     console.log('old wallet: ' + wallet);
     const session = socket.request.session; 
     
     if(wallet !== data.message || typeof wallet==='undefined'){
      console.log("false");
      once.done=false;
     }
     wallet = data.message;
     store.setAll({wallet: data.message});

     getInitialSet((err, cursor, wallet)=> {
      if(err) return
      cursor.each((err, data)=> {
          //console.log(JSON.stringify(data, null, 2));
          io.emit('initial_data', data)
      })
    })

    getChanges((err, cursor)=> {
      if(once.done) return
      cursor.each((err, data)=> {
        console.log(JSON.stringify(data, null, 2).slice(0,40));
          once.done = true;
          io.emit('new_data', JSON.stringify(data))
         
         // io.emit('new_data', data)
      })
    })
  })


})


console.log("Server running");



  function getChanges(callbackFunction){

   //console.log("Blub "+store('wallet'));
   // if (!wallet) {
    r.connect({host: 'localhost', port: 28015, db:"mydb"})
    .then(function(conn) {
        cursor =  r.table('braintube')
        .filter({
          //wallet1: "0x88537af94bcc75f33c831ce7535eb195c02b8126"
         wallet1: wallet
        })
        .pluck('id', 'image', 'seed', 'tube', 'colorset', 'mutation', 'rarity', 'noise', 'complexity')
        .changes({
            includeInitial: false,
        
          }).run(conn, callbackFunction);
          
      
    })
  //}
}



function getInitialSet(callbackFunction){

//console.log("getInitialSet "+ wallet);
  r.connect({host: 'localhost', port: 28015, db:"mydb"})
  .then(function(conn) {
      cursor =  r.table('braintube')
      .filter({
        wallet1: "0x88537af94bcc75f33c831ce7535eb195c02b8126"
      })
      .pluck('id', 'image', 'seed','tube', 'colorset', 'mutation', 'rarity', 'noise', 'complexity')
      .run(conn, callbackFunction);
        
       
  })
}

function getItemDetail(callbackFunction){
  r.connect({host: 'localhost', port: 28015, db:"mydb"})
  .then(function(conn) {
      cursor =  r.table('braintube')
      .filter({
        id: cKey
      })
      .pluck('id', 'seed', 'mutation', 'tube', 'colorset', 'noise', 'complexity', 'rarity', 'stroke')
      .run(conn, callbackFunction);
       
  })
}




 */