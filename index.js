import express from 'express';
import cors from 'cors';
import {longestWord as longestWordFunction,shortestWord as shortestWordFunction ,wordLengths}  from './wordgame.js';
import { totalPhoneBill, setPrice, getPrices } from './phoneBill.js';
import { enoughAirtime } from './enoughAirtime.js';

const app = express();
const express = express();


app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use(express.static('public'))

app.get("/api", function(req, res){
  res.json({ msg : "My first API"});
});


app.get('/api/wordgame',function(req,res){
    const sentence = req.query.sentence
    const [longestWord, shortestWord, sum] = [longestWordFunction(sentence), shortestWordFunction(sentence), wordLengths(sentence)]
    // let long = longestWord(sentence);
    // let short = shortestWord(sentence);
    // let length = wordLengths(sentence);

    res.json({ longestWord, shortestWord, sum  })
})


app.post('/api/phoneBill/total', function(req, res){
    const bill = req.body.bill;
    
    const total = totalPhoneBill(bill);
    res.json({ total: parseFloat(total) });
});



app.get('/api/phonebill/prices',function (req, res){
    const prices = req.query.price
    getPrices();
    res.json(prices);
});

app.post('/api/phonebill/price', (req, res) => {
    const type = req.body.type;
    const price = req.body.price;

    setPrice(type, price);
    res.json({
        status: 'success',
        message: `The ${type} price was set to ${price}`
    });
});

app.post('/api/enough', (req, res) => {
    const { usage, available } = req.body;
    const result = enoughAirtime(usage, available);
    res.json({ result: parseFloat(result) });
});





let PORT = process.env.PORT || 3007;

app.listen(PORT, function(){
  console.log('App starting on port', PORT);
});