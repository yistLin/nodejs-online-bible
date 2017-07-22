var express = require('express');
var session = require('express-session');
var parser = require('body-parser');
var fs = require('fs');
var app = express();

var nb_chapters = [50,40,27,36,34,24,21,4,31,24,22,25,29,36,10,13,10,42,150,31,12,8,66,52,5,48,12,14,3,9,1,4,7,3,3,3,2,14,4,28,16,24,21,28,16,16,13,6,6,4,4,5,3,6,4,3,1,13,5,5,3,5,1,1,1,22];
var booknames = {
    "ch": ["創世紀","出埃及記","利未記","民數記","申命記","約書亞記","士師記","路得記","撒母耳記上","撒母耳記下","列王記上","列王記下","歷代志上","歷代志下","以斯拉記","尼希米記","以斯帖記","約伯記","詩篇","箴言","傳道書","雅歌","以賽亞書","耶利米書","耶利米哀歌","以西結書","但以理書","何西阿書","約珥書","阿摩司書","俄巴底亞書","約拿書","彌迦書","那鴻書","哈巴谷書","西番雅書","哈該書","撒迦利亞書","瑪垃基書","馬太福音","馬可福音","路加福音","約翰福音","使徒行傳","羅馬書","哥林多前書","哥林多後書","加拉太書","以弗所書","腓利比書","歌羅西書","帖撒羅尼迦前書","帖撒羅尼迦後書","提摩太前書","提摩太後書","提多書","腓利門書","希伯來書","雅各書","彼得前書","彼得後書","約翰一書","約翰二書","約翰三書","猶大書","啟示錄"],
    "en": ["Genesis","Exodus","Leviticus","Numbers","Deuteronomy","Joshua","Judges","Ruth","1 Samuel","2 Samuel","1 Kings","2 Kings","1 Chronicles","2 Chronicles","Ezra","Nehemiah","Esther","Job","Psalm","Proverbs","Ecclesiastes","Song of Songs","Isaiah","Jeremiah","Lamentations","Ezekiel","Daniel","Hosea","Joel","Amos","Obadiah","Jonah","Micah","Nahum","Habakkuk","Zephaniah","Haggai","Zechariah","Malachi","Matthew","Mark","Luke","John","Acts","Romans","1 Corinthians","2 Corinthians","Galatians","Ephesians","Philippians","Colossians","1 Thessalonians","2 Thessalonians","1 Timothy","2 Timothy","Titus","Philemon","Hebrews","James","1 Peter","2 Peter","1 John","2 John","3 John","Jude","Revelation"],
    "de": ["Genesis","Exodus","Levitikus","Numeri","Deuteronomium","Josua","Richter","Rut","1 Samuel","2 Samuel","1 Könige","2 Könige","1 Chronik","2 Chronik","Esra","Nehemia","Ester","Hiob","Der Psalter","Sprueche","Prediger","Das Hohelied Salomos","Jesaja","Jeremia","Klagelieder","Hesekiel","Daniel","Hosea","Joel","Amos","Obadja","Jona","Mica","Nahum","Habakuk","Zephanja","Haggai","Sacharja","Maleachi","Matthäus","Markus","Lukas","Johannes","Apostelgeschichte","Römer","1 Korinther","2 Korinther","Galater","Epheser","Philipper","Kolosser","1 Thessalonicher","2 Thessalonicher","1 Timotheus","2 Timotheus","Titus","Philemon","Hebräer","Jakobus","1 Petrus","2 Petrus","1 Johannes","2 Johannes","3 Johannes","Judas","Offenbarung"],
    "jp": ["創世記","出エジプト記","レビ記","民数記","申命記","ヨシュア記","士師記","ルツ記","サムエル記上","サムエル記下","列王紀上","列王紀下","歴代志上","歴代志下","エズラ記","ネヘミヤ記","エステル記","ヨブ記","詩篇","箴言","伝道の書","雅歌","イザヤ書","エレミヤ書","哀歌","エゼキエル書","ダニエル書","ホセア書","ヨエル書","アモス書","オバデヤ書","ヨナ書","ミカ書","ナホム書","ハバクク書","ゼパニヤ書","ハガイ書","ゼカリヤ書","マラキ書","マタイによる福音書","マルコによる福音書","ルカによる福音書","ヨハネによる福音書","使徒行伝","ローマ人への手紙","コリント人への第一の手紙","コリント人への第二の手紙","ガラテヤ人への手紙","エペソ人への手紙","ピリピ人への手紙","コロサイ人への手紙","テサロニケ人への第一の手紙","テサロニケ人への第二の手紙","テモテへの第一の手","テモテへの第二の手紙","テトスへの手紙","ピレモンへの手紙","ヘブル人への手紙","ヤコブの手紙","ペテロの第一の手紙","ペテロの第二の手紙","ヨハネの第一の手紙","ヨハネの第二の手紙","ヨハネの第三の手紙","ユダの手紙","啓示録"],
    "gk": ["Genesis","Exodus","Leviticus","Numbers","Deuteronomy","Joshua","Judges","Ruth","1 Samuel","2 Samuel","1 Kings","2 Kings","1 Chronicles","2 Chronicles","Ezra","Nehemiah","Esther","Job","Psalm","Proverbs","Ecclesiastes","Song of Songs","Isaiah","Jeremiah","Lamentations","Ezekiel","Daniel","Hosea","Joel","Amos","Obadiah","Jonah","Micah","Nahum","Habakkuk","Zephaniah","Haggai","Zechariah","Malachi","Matthew","Mark","Luke","John","Acts","Romans","1 Corinthians","2 Corinthians","Galatians","Ephesians","Philippians","Colossians","1 Thessalonians","2 Thessalonians","1 Timothy","2 Timothy","Titus","Philemon","Hebrews","James","1 Peter","2 Peter","1 John","2 John","3 John","Jude","Revelation"]
};
var strings = {
    "ch": {
        "chapterPrefix":"第 ",
        "chapterPostfix":" 章"
    },
    "en": {
        "chapterPrefix":"Chapter ",
        "chapterPostfix":""
    },
    "de": {
        "chapterPrefix":"Kapitel ",
        "chapterPostfix":""
    },
    "jp": {
        "chapterPrefix":"第 ",
        "chapterPostfix":" 章"
    },
    "gk": {
        "chapterPrefix":"Chapter ",
        "chapterPostfix":""
    }
};

// set up basic configurations
app.set('port', process.env.OPENSHIFT_NODEJS_PORT || process.env.PORT || 8080);
app.set('ip', process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1");
app.set('view engine', 'ejs');

// check logged in
function checkAuth (req, res, next) {
    if (req.url.substring(0, 6) !== '/login') {
        console.log('Request page', req.url);
        if (!req.session || !req.session.authenticated) {
            console.log('Auth error, redirect to /login');
            res.redirect('/login?url='+encodeURIComponent(req.url));
            return;
        }
        else {
            console.log('Auth success!');
        }
    }
    next();
}

app.use(parser.urlencoded({extended: true}));
app.use(parser.json());
app.use(express.static('public'));
app.use(session({
    secret: 'example',
    resave: false,
    saveUninitialized: true,
    cookie: {secure: false}
}));
app.use(checkAuth);

// get JSON file of bibles
var bible = {};
bible['ch'] = JSON.parse(fs.readFileSync('data/bible.json', 'utf8'));
bible['en'] = JSON.parse(fs.readFileSync('data/bible_english.json', 'utf8'));

app.get('/', function(req, res) {
    res.render('books.ejs');
});

app.get('/chapter', function(req, res) {
    var lang = req.query.lang;
    var bid = parseInt(req.query.bid);
    var cid = parseInt(req.query.cid);

    // handle undefined variables
    if (lang === undefined) {
        lang = 'ch';
    }
    if (bid === undefined) {
        bid = 1;
        cid = 1;
    }
    if (cid === undefined) {
        cid = 1;
    }

    // check the range of bid
    if (bid < 1 || bid > 66) {
        res.send('bid exceeded the range!');
        return;
    }

    // check the range of cid
    var nb_chapters_this_book = nb_chapters[bid-1];
    if (cid < 1 || cid > nb_chapters_this_book) {
        res.send('cid exceeded the range!');
        return;
    }

    // check if previous chapter exists
    var prev_url = '/chapter?lang='+lang+'&bid='+bid+'&cid='+(cid-1);
    if (cid == 1) {
        prev_url = '';
    }

    // check if next chapter exists
    var next_url = '/chapter?lang='+lang+'&bid='+bid+'&cid='+(cid+1);
    if (cid == nb_chapters_this_book) {
        next_url = '';
    }

    // render views/chapter.ejs
    res.render('chapter.ejs', {
        bookname: booknames[lang][bid-1],
        chaptername: strings[lang]['chapterPrefix'] + cid + strings[lang]['chapterPostfix'],
        verses: bible[lang][bid-1]['chapters'][cid-1]['verses'],
        prevChapterURL: prev_url,
        nextChapterURL: next_url
    });
});

app.get('/login', function(req, res) {
    console.log('Request /login, with url =', req.query.url);
    res.render('login.ejs', {request_url: req.query.url});
});

app.post('/login', function(req, res) {
    console.log('POST to /login');
    if (req.body.username && req.body.username === "saints" && req.body.password && req.body.password === "welcome") {
        console.log('Login successed!');
        var day = 604800000;
        req.session.cookie.expires = new Date(Date.now() + day);
        req.session.cookie.maxAge = day;
        req.session.authenticated = true;
        res.redirect(req.body.url);
    } else {
        console.log('Login failed!');
        res.redirect('login.ejs');
    }
});

app.listen(app.get('port'), app.get('ip'), function() {
	console.log('Express(Node.js) server is listening at %s:%d', app.get('ip'), app.get('port'));
});
