const express = require('express')
const ejs = require('ejs')
const bp = require('body-parser')


app = express()
app.use(bp.urlencoded({extened:true}))
app.set('view engine', 'ejs')
app.listen(3000)

items=["Reading", "Bloging"]


app.get('/',function(req,res){
    
    res.render("index",{list:items})
})

app.post('/',function(req,res){
    var text = req.body.list
    items.push(text)
    res.redirect('/')

})

