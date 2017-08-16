var express = require('express');
var session = require('express-session');
var parser = require('body-parser');
var fs = require('fs');
var app = express();

var nb_chapters = [50,40,27,36,34,24,21,4,31,24,22,25,29,36,10,13,10,42,150,31,12,8,66,52,5,48,12,14,3,9,1,4,7,3,3,3,2,14,4,28,16,24,21,28,16,16,13,6,6,4,4,5,3,6,4,3,1,13,5,5,3,5,1,1,1,22];
var testament = {
    'ch': {'ot': '舊約聖經', 'nt': '新約聖經'},
    'en': {'ot': 'Old Testament', 'nt': 'New Testament'},
    'de': {'ot': 'Alten Testaments', 'nt': 'Neuen Testaments'}
};
var booknames = {
    "ch": ["創世紀","出埃及記","利未記","民數記","申命記","約書亞記","士師記","路得記","撒母耳記上","撒母耳記下","列王記上","列王記下","歷代志上","歷代志下","以斯拉記","尼希米記","以斯帖記","約伯記","詩篇","箴言","傳道書","雅歌","以賽亞書","耶利米書","耶利米哀歌","以西結書","但以理書","何西阿書","約珥書","阿摩司書","俄巴底亞書","約拿書","彌迦書","那鴻書","哈巴谷書","西番雅書","哈該書","撒迦利亞書","瑪垃基書","馬太福音","馬可福音","路加福音","約翰福音","使徒行傳","羅馬書","哥林多前書","哥林多後書","加拉太書","以弗所書","腓利比書","歌羅西書","帖撒羅尼迦前書","帖撒羅尼迦後書","提摩太前書","提摩太後書","提多書","腓利門書","希伯來書","雅各書","彼得前書","彼得後書","約翰一書","約翰二書","約翰三書","猶大書","啟示錄"],
    "en": ["Genesis","Exodus","Leviticus","Numbers","Deuteronomy","Joshua","Judges","Ruth","1 Samuel","2 Samuel","1 Kings","2 Kings","1 Chronicles","2 Chronicles","Ezra","Nehemiah","Esther","Job","Psalm","Proverbs","Ecclesiastes","Song of Songs","Isaiah","Jeremiah","Lamentations","Ezekiel","Daniel","Hosea","Joel","Amos","Obadiah","Jonah","Micah","Nahum","Habakkuk","Zephaniah","Haggai","Zechariah","Malachi","Matthew","Mark","Luke","John","Acts","Romans","1 Corinthians","2 Corinthians","Galatians","Ephesians","Philippians","Colossians","1 Thessalonians","2 Thessalonians","1 Timothy","2 Timothy","Titus","Philemon","Hebrews","James","1 Peter","2 Peter","1 John","2 John","3 John","Jude","Revelation"],
    "de": ["Genesis","Exodus","Levitikus","Numeri","Deuteronomium","Josua","Richter","Rut","1 Samuel","2 Samuel","1 Könige","2 Könige","1 Chronik","2 Chronik","Esra","Nehemia","Ester","Hiob","Der Psalter","Sprueche","Prediger","Das Hohelied Salomos","Jesaja","Jeremia","Klagelieder","Hesekiel","Daniel","Hosea","Joel","Amos","Obadja","Jona","Mica","Nahum","Habakuk","Zephanja","Haggai","Sacharja","Maleachi","Matthäus","Markus","Lukas","Johannes","Apostelgeschichte","Römer","1 Korinther","2 Korinther","Galater","Epheser","Philipper","Kolosser","1 Thessalonicher","2 Thessalonicher","1 Timotheus","2 Timotheus","Titus","Philemon","Hebräer","Jakobus","1 Petrus","2 Petrus","1 Johannes","2 Johannes","3 Johannes","Judas","Offenbarung"],
    "jp": ["創世記","出エジプト記","レビ記","民数記","申命記","ヨシュア記","士師記","ルツ記","サムエル記上","サムエル記下","列王紀上","列王紀下","歴代志上","歴代志下","エズラ記","ネヘミヤ記","エステル記","ヨブ記","詩篇","箴言","伝道の書","雅歌","イザヤ書","エレミヤ書","哀歌","エゼキエル書","ダニエル書","ホセア書","ヨエル書","アモス書","オバデヤ書","ヨナ書","ミカ書","ナホム書","ハバクク書","ゼパニヤ書","ハガイ書","ゼカリヤ書","マラキ書","マタイによる福音書","マルコによる福音書","ルカによる福音書","ヨハネによる福音書","使徒行伝","ローマ人への手紙","コリント人への第一の手紙","コリント人への第二の手紙","ガラテヤ人への手紙","エペソ人への手紙","ピリピ人への手紙","コロサイ人への手紙","テサロニケ人への第一の手紙","テサロニケ人への第二の手紙","テモテへの第一の手","テモテへの第二の手紙","テトスへの手紙","ピレモンへの手紙","ヘブル人への手紙","ヤコブの手紙","ペテロの第一の手紙","ペテロの第二の手紙","ヨハネの第一の手紙","ヨハネの第二の手紙","ヨハネの第三の手紙","ユダの手紙","啓示録"],
    "gk": ["Genesis","Exodus","Leviticus","Numbers","Deuteronomy","Joshua","Judges","Ruth","1 Samuel","2 Samuel","1 Kings","2 Kings","1 Chronicles","2 Chronicles","Ezra","Nehemiah","Esther","Job","Psalm","Proverbs","Ecclesiastes","Song of Songs","Isaiah","Jeremiah","Lamentations","Ezekiel","Daniel","Hosea","Joel","Amos","Obadiah","Jonah","Micah","Nahum","Habakkuk","Zephaniah","Haggai","Zechariah","Malachi","Matthew","Mark","Luke","John","Acts","Romans","1 Corinthians","2 Corinthians","Galatians","Ephesians","Philippians","Colossians","1 Thessalonians","2 Thessalonians","1 Timothy","2 Timothy","Titus","Philemon","Hebrews","James","1 Peter","2 Peter","1 John","2 John","3 John","Jude","Revelation"]
};
var abbr_booknames = {
    'ch': ["創","出","利","民","申","書","士","得","撒上","撒下","王上","王下","代上","代下","拉","尼","斯","伯","詩","箴","傳","歌","賽","耶","哀","結","但","何","珥","摩","俄","拿","彌","鴻","哈","番","該","亞","瑪","太","可","路","約","徒","羅","林前","林後","加","弗","腓","西","帖前","帖後","提前","提後","多","門","來","雅","彼前","彼後","約壹","約貳","約參","猶","啟"],
    'en': ["Gen.","Exo.","Lev.","Num.","Deut.","Josh.","Judg.","Ruth","1 Sam.","2 Sam.","1 Kings","2 Kings","1 Chron.","2 Chron.","Ezra","Neh.","Est.","Job","Ps.","Prov.","Eccles.","Song","Isa.","Jer.","Lam.","Ezek.","Dan.","Hos.","Joel","Amos","Obad.","Jonah","Mic.","Nah.","Hab.","Zeph.","Hag.","Zech.","Mal.","Matt.","Mark","Luke","John","Acts","Rom.","1 Cor.","2 Cor.","Gal.","Eph.","Phil.","Col.","1 Thess.","2 Thess.","1 Tim.","2 Tim.","Titus","Philem.","Heb.","James","1 Pet.","2 Pet.","1 John","2 John","3 John","Jude","Rev."]
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
var footnote = {};
bible['ch'] = JSON.parse(fs.readFileSync('data/bible_footnote.json', 'utf8'));
bible['en'] = JSON.parse(fs.readFileSync('data/bible_english.json', 'utf8'));
bible['de'] = JSON.parse(fs.readFileSync('data/bible_german.json', 'utf8'));
bible['nfnt'] = {};
bible['nfnt']['ch'] = JSON.parse(fs.readFileSync('data/bible.json', 'utf8'));
bible['nfnt']['en'] = bible['en'];
footnote['ch'] = JSON.parse(fs.readFileSync('data/footnote.json', 'utf8'));

app.get('/', function(req, res) {
    var lang = req.query.lang;
    if (lang === undefined) {
        lang = 'ch';
    }
    res.render('books.ejs', {
        lang: lang,
        booknames: booknames[lang],
        ot_name: testament[lang]['ot'],
        nt_name: testament[lang]['nt']
    });
});

app.get('/chapter', function(req, res) {
    var lang = req.query.lang;
    var vlang = req.query.vlang;
    var bid = parseInt(req.query.bid);
    var cid = parseInt(req.query.cid);

    // handle undefined variables
    if (lang === undefined) {
        lang = 'ch';
    }
    if (vlang === undefined) {
        vlang = '';
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
    var prev_url = '/chapter?lang='+lang+'&vlang='+vlang+'&bid='+bid+'&cid='+(cid-1);
    if (cid == 1) {
        prev_url = '';
    }

    // check if next chapter exists
    var next_url = '/chapter?lang='+lang+'&vlang='+vlang+'&bid='+bid+'&cid='+(cid+1);
    if (cid == nb_chapters_this_book) {
        next_url = '';
    }

    // check if vice verses are requested
    var viceverses = null;
    if (vlang !== '') {
        viceverses = bible[vlang][bid-1]['chapters'][cid-1]['verses'];
    }

    // render views/chapter.ejs
    res.render('chapter.ejs', {
        lang: lang,
        vlang: vlang,
        bookname: booknames[lang][bid-1],
        chaptername: strings[lang]['chapterPrefix'] + cid + strings[lang]['chapterPostfix'],
        verses: bible[lang][bid-1]['chapters'][cid-1]['verses'],
        vverses: viceverses,
        prevChapterURL: prev_url,
        nextChapterURL: next_url
    });
});

app.get('/fnt', function(req, res) {
    var lang = req.query.lang;
    var fntIdx = req.query.fntIdx;
    res.send(footnote[lang][fntIdx]);
});

app.get('/search', function(req, res) {
    var lang = req.query.lang;
    var search = req.query.search;

    if (search === undefined || search === '') {
        res.render('search.ejs', {lang: lang, results: []});
        return;
    }

    var matches = [];
    var pos = 0;
    var v = "";

    for (var bid = 0; bid < 66; bid++) {
        for (var cid = 0; cid < nb_chapters[bid]; cid++) {
            verses = bible['nfnt'][lang][bid]['chapters'][cid]['verses'];
            for (var key in verses) {
                pos = verses[key].indexOf(search);
                if (pos !== -1) {
                    // console.log('%s %d:%s => %s', abbr_booknames['ch'][bid], cid+1, key, verses[key]);
                    v = verses[key];
                    v = v.slice(0, pos) + '<u>' + v.slice(pos, pos+search.length) + '</u>' + v.slice(pos+search.length);
                    matches.push({
                        addr: abbr_booknames[lang][bid] + '<br>' + (cid+1) + ':' + key,
                        url: '/chapter?lang='+lang+'&vlang=&bid='+(bid+1)+'&cid='+(cid+1),
                        verse: v
                    });
                }
            }
        }
    }

    res.render('search.ejs', {lang: lang, results: matches});
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
        var twoweeks = day * 14;
        req.session.cookie.expires = new Date(Date.now() + twoweeks);
        req.session.cookie.maxAge = twoweeks;
        req.session.authenticated = true;
        res.redirect(req.body.url);
    } else {
        console.log('Login failed!');
        res.redirect(req.body.url);
    }
});

app.listen(app.get('port'), app.get('ip'), function() {
	console.log('Express(Node.js) server is listening at %s:%d', app.get('ip'), app.get('port'));
});
