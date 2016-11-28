#!/bin/env node

var express = require('express');
var parser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;
var app = express();
var server;
var db;

var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1'

app.use(parser.urlencoded({extended: true}));
app.use(parser.json())
app.use(express.static('public'));
app.set('view engine', 'ejs');

MongoClient.connect('mongodb://yist:killer99@ds041556.mlab.com:41556/yist-app', (error, database) => {
    if (error) return console.log(error)

    db = database;
    server = app.listen(server_port, server_ip_address, function() {
        console.log('Server listening at http://%s:%s', server_ip_address, server_port);
    });
});

app.get('/', (request, response) => {
    // response.sendFile(__dirname + '/index.html');
    db.collection('quotes').find().toArray((error, result) => {
        if (error) return console.log(error);

        // render views/index.ejs
        response.render('index.ejs', {quotes: result});
    });
});

app.post('/quotes', (request, response) => {
    console.log('Receive a post request');
    console.log(request.body);

    db.collection('quotes').save(request.body, (error, result) => {
        if (error) return console.log(error);

        console.log('Saved to database');
        response.redirect('/');
    });
});

app.put('/quotes', (request, response) => {
    db.collection('quotes').findOneAndUpdate(
        {},
        {
            $set:{
                name:request.body.name,
                quote:request.body.quote
            }
        },
        {},
        {}
    )
});
