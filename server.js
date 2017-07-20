var express = require('express');
var parser = require('body-parser');
var fs = require('fs');

var app = express();

app.set('port', process.env.OPENSHIFT_NODEJS_PORT || process.env.PORT || 8080);
app.set('ip', process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1");

app.use(parser.urlencoded({extended: true}));
app.use(parser.json());
app.use(express.static('public'));
app.set('view engine', 'ejs');

// get JSON file of bibles
// var bible_en = JSON.parse(fs.readFileSync('data/bible_english_new.json', 'utf8'));

app.get('/', (request, response) => {
    // render views/index.ejs
    // response.render('index.ejs',
    //     {text: bible_en[0]['chapters'][0]['verses']}
    //     );
    response.render('index.ejs');
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

app.listen(app.get('port'), app.get('ip'), function() {
	console.log('Express(Node.js) server is listening at %s:%d', app.get('ip'), app.get('port'));
});
