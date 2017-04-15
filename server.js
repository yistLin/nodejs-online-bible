#!/bin/node env

var express = require('express');
var parser = require('body-parser');
// var MongoClient = require('mongodb').MongoClient;
var app = express();
var server;
var db;

var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1'

app.use(parser.urlencoded({extended: true}));
app.use(parser.json())
app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', (request, response) => {
    // render views/index.ejs
    response.render('index.ejs', {quotes: result});
});

app.post('/quotes', (request, response) => {
    console.log('Receive a post request');
    console.log(request.body);

    // db.collection('quotes').save(request.body, (error, result) => {
    //     if (error) return console.log(error);

    //     console.log('Saved to database');
    //     response.redirect('/');
    // });
});

app.put('/quotes', (request, response) => {
    // db.collection('quotes').findOneAndUpdate(
    //     {},
    //     {
    //         $set:{
    //             name:request.body.name,
    //             quote:request.body.quote
    //         }
    //     },
    //     {},
    //     {}
    // )
});
