var express = require('express');
var parser = require('body-parser');
var fs = require('fs');

var app = express();

var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080;
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';

app.use(parser.urlencoded({extended: true}));
app.use(parser.json());
app.use(express.static('public'));
app.set('view engine', 'ejs');

// get JSON file of bibles
var bible_en = JSON.parse(fs.readFileSync('data/bible_english_new.json', 'utf8'));

app.get('/', (request, response) => {
    // render views/index.ejs
    response.render('index.ejs',
        {text: bible_en[0]['chapters'][0]['verses']}
        );
});

app.get('/chapter', (request, response) => {
    console.log('lang =', request.query.lang);
    console.log('bid =', request.query.bid);
    console.log('cid =', request.query.cid);

    // render views/chapter.ejs
    response.render('chapter.ejs'
        );
});

app.post('/quotes', (request, response) => {
    console.log('Receive a post request');
    console.log(request.body);
});

app.put('/quotes', (request, response) => {
});

app.listen(server_port, server_ip_address, function() {
	console.log('Listening on ' + server_ip_address + ', server_port ' + server_port);
});
