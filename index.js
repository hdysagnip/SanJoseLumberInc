// import express, mongoose, bodyparser and cors
const express = require('express');
const app = new express(); // create instance of express
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const urlEncoded = bodyParser.json(); // use json as body parser
const cors = require('cors');
app.use(cors());

// create mongoose connection
mongoose.connect('mongodb+srv://heidy:root@cluster0-qkgvi.mongodb.net/test?retryWrites=true&w=majority',{ useUnifiedTopology: true, useNewUrlParser: true });

// create User model with name and age as field
const Product = mongoose.model('product',{
    product_name: String,
    category: String,
    quantity: Number,
    price: Number
});

const Sales = mongoose.model('sales',{
    product_id: Number,
    quantity: Number,
    total_price: Number,
    date: Date
});

// set directory to static
app.use(express.static(__dirname+'/dist/SanJoseLumberInc'));

app.get('/',(req,res) => {
    res.sendFile(__dirname+'/dist/SanJoseLumberInc/index.html');
});

app.get('/products', (req, res)  => {     
    Product.find({}, (err, data) => {         
        if (err)res.json({"msg":"Invalid Request"});         
        res.json(data);     
    }); 
}); 

app.post('/product', urlEncoded, (req, res) => {     
    var product = new Product({  
        product_name: req.body.product_name,            
        category: req.body.category,
        quantity: req.body.quantity,
        price: req.body.price   
    });     
    product.save((err) => { 
        if(err) res.json({msg:'Invalid Request!'});         
        res.json({msg:'Record saved!'})     
    }); 
}); 

app.put('/product/:id', urlEncoded, (req, res) => {
    Product.updateOne({_id:req.params.id},{
        product_name: req.body.product_name,            
        category: req.body.category,
        quantity: req.body.quantity,
        price: req.body.price
        }, (err, data) => {
    if(err) res.json({msg:'Invalid request'});
        res.json(data);
    });
});

app.delete('/product/:id', (req, res) => {
    Product.deleteOne({_id:req.params.id},(err,data) => {
    if(err) res.json({msg:'Invalid Request'});
        res.json(data);
    })
});

app.post('/sales', urlEncoded, (req, res) => {     
    var sales = new Sales({  
        product_id: req.body.id,            
        quantity: req.body.quantity,
        total_price: req.body.total_price,
        date: req.body.date   
    });     
    sales.save((err) => { 
        if(err) res.json({msg:'Invalid Request!'});         
        res.json({msg:'Order proceed!'})     
    }); 
}); 

app.delete('/sales/:id', (req, res) => {
    Sales.deleteOne({_id:req.params.id},(err,data) => {
    if(err) res.json({msg:'Invalid Request'});
        res.json(data);
    })
});

// listen to port 9000
const PORT = process.env.PORT || 9000;

app.listen(PORT, () => {
    console.log(`Server running at port ${PORT}`);
});