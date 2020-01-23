const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json())

const data = require('./dane');
let owce = data.getOwce();
console.log(owce);

app.get('/', function (req, res) {
  res.send('owca taboret')
})

app.get('/owce', function (req, res) {
  res.json(owce);
})

app.post('/owce', function (req,res){
  const owca = {
    location:'parking',
    ID:parseInt(Math.random()*1000),
    Age:req.body.Age,
    needsShaving:false,
    broken:false,
  }
  console.log("dostaliśmy owcę:", owca);
  owce.push(owca);
  res.json(owca);
})

app.delete('/owce/:ID', function (req, res) {
   const ID = req.params.ID;
   owce = owce.filter( owca => owca.ID != ID);
   res.send('ojej! usuwamy owcę ' + ID)
})

// dodać edycję owiec 
app.patch('/owce/:ID', function (req,res){
  const owca = owce.find(owca => owca.ID == req.params.ID)
  if(typeof req.body.Age !== "undefined") owca.Age = req.body.Age;
  if(typeof req.body.location !== "undefined") owca.location = req.body.location;
  if(typeof req.body.needsShaving !== "undefined") owca.needsShaving = req.body.needsShaving;
  if(typeof req.body.broken !== "undefined") owca.broken = req.body.broken;
  res.json(owca);
})

app.listen(8080, () => console.log(`Example app listening on port ${8080}!`))