const express = require('express')
const app = express()
const port = 3000

//gunakan ejs

app.set('view engine','ejs')

app.get('/', (req, res) => {
  
  res.render('index');

   
});

app.get('/about', (req, res) => { //respon 
    res.render('index');

});

app.get('/contact', (req, res) => { // apa itu path ? 
  res.send('ini adalah contact')    //respon
})

app.get('/product/:id',(req, res) => { //request 
    res.send('product ID : ' + req.params.id);
})
app.use('/',(req,res) => {
    res.status(404) // menambahkan status
    res.send('test');

}) 
//menjalankan midleware or halaman yang tidak ada

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// halo