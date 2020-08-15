const express = require('express')
const app = express()
const ejs = require('ejs')
const expresslayout = require('express-ejs-layouts')
const path = require('path')



app.get('/',(req,res) =>{
    res.render('home')
})
app.get('/',(req,res) =>{
    res.render('home')
})


app.use(expresslayout)
app.set('views', path.join(__dirname,'/Resources/Views'))
app.set('view engine', 'ejs')

//Assets
app.use(express.static('Public'))


const PORT = process.env.PORT || 3000

app.listen(PORT, () =>{

    console.log(`Launching on Port ${PORT}`,)

})


