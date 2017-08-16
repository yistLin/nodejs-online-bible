var chapters = [50,40,27,36,34,24,21,4,31,24,22,25,29,36,10,13,10,42,150,31,12,8,66,52,5,48,12,14,3,9,1,4,7,3,3,3,2,14,4,28,16,24,21,28,16,16,13,6,6,4,4,5,3,6,4,3,1,13,5,5,3,5,1,1,1,22];
var books = {
    "ch": ["創世紀","出埃及記","利未記","民數記","申命記","約書亞記","士師記","路得記","撒母耳記上","撒母耳記下","列王記上","列王記下","歷代志上","歷代志下","以斯拉記","尼希米記","以斯帖記","約伯記","詩篇","箴言","傳道書","雅歌","以賽亞書","耶利米書","耶利米哀歌","以西結書","但以理書","何西阿書","約珥書","阿摩司書","俄巴底亞書","約拿書","彌迦書","那鴻書","哈巴谷書","西番雅書","哈該書","撒迦利亞書","瑪垃基書","馬太福音","馬可福音","路加福音","約翰福音","使徒行傳","羅馬書","哥林多前書","哥林多後書","加拉太書","以弗所書","腓利比書","歌羅西書","帖撒羅尼迦前書","帖撒羅尼迦後書","提摩太前書","提摩太後書","提多書","腓利門書","希伯來書","雅各書","彼得前書","彼得後書","約翰一書","約翰二書","約翰三書","猶大書","啟示錄"],
    "en": ["Genesis","Exodus","Leviticus","Numbers","Deuteronomy","Joshua","Judges","Ruth","1 Samuel","2 Samuel","1 Kings","2 Kings","1 Chronicles","2 Chronicles","Ezra","Nehemiah","Esther","Job","Psalm","Proverbs","Ecclesiastes","Song of Songs","Isaiah","Jeremiah","Lamentations","Ezekiel","Daniel","Hosea","Joel","Amos","Obadiah","Jonah","Micah","Nahum","Habakkuk","Zephaniah","Haggai","Zechariah","Malachi","Matthew","Mark","Luke","John","Acts","Romans","1 Corinthians","2 Corinthians","Galatians","Ephesians","Philippians","Colossians","1 Thessalonians","2 Thessalonians","1 Timothy","2 Timothy","Titus","Philemon","Hebrews","James","1 Peter","2 Peter","1 John","2 John","3 John","Jude","Revelation"],
    "de": ["Genesis","Exodus","Levitikus","Numeri","Deuteronomium","Josua","Richter","Rut","1 Samuel","2 Samuel","1 Könige","2 Könige","1 Chronik","2 Chronik","Esra","Nehemia","Ester","Hiob","Der Psalter","Sprueche","Prediger","Das Hohelied Salomos","Jesaja","Jeremia","Klagelieder","Hesekiel","Daniel","Hosea","Joel","Amos","Obadja","Jona","Mica","Nahum","Habakuk","Zephanja","Haggai","Sacharja","Maleachi","Matthäus","Markus","Lukas","Johannes","Apostelgeschichte","Römer","1 Korinther","2 Korinther","Galater","Epheser","Philipper","Kolosser","1 Thessalonicher","2 Thessalonicher","1 Timotheus","2 Timotheus","Titus","Philemon","Hebräer","Jakobus","1 Petrus","2 Petrus","1 Johannes","2 Johannes","3 Johannes","Judas","Offenbarung"],
    "jp": ["創世記","出エジプト記","レビ記","民数記","申命記","ヨシュア記","士師記","ルツ記","サムエル記上","サムエル記下","列王紀上","列王紀下","歴代志上","歴代志下","エズラ記","ネヘミヤ記","エステル記","ヨブ記","詩篇","箴言","伝道の書","雅歌","イザヤ書","エレミヤ書","哀歌","エゼキエル書","ダニエル書","ホセア書","ヨエル書","アモス書","オバデヤ書","ヨナ書","ミカ書","ナホム書","ハバクク書","ゼパニヤ書","ハガイ書","ゼカリヤ書","マラキ書","マタイによる福音書","マルコによる福音書","ルカによる福音書","ヨハネによる福音書","使徒行伝","ローマ人への手紙","コリント人への第一の手紙","コリント人への第二の手紙","ガラテヤ人への手紙","エペソ人への手紙","ピリピ人への手紙","コロサイ人への手紙","テサロニケ人への第一の手紙","テサロニケ人への第二の手紙","テモテへの第一の手","テモテへの第二の手紙","テトスへの手紙","ピレモンへの手紙","ヘブル人への手紙","ヤコブの手紙","ペテロの第一の手紙","ペテロの第二の手紙","ヨハネの第一の手紙","ヨハネの第二の手紙","ヨハネの第三の手紙","ユダの手紙","啓示録"],
    "gk": ["Genesis","Exodus","Leviticus","Numbers","Deuteronomy","Joshua","Judges","Ruth","1 Samuel","2 Samuel","1 Kings","2 Kings","1 Chronicles","2 Chronicles","Ezra","Nehemiah","Esther","Job","Psalm","Proverbs","Ecclesiastes","Song of Songs","Isaiah","Jeremiah","Lamentations","Ezekiel","Daniel","Hosea","Joel","Amos","Obadiah","Jonah","Micah","Nahum","Habakkuk","Zephaniah","Haggai","Zechariah","Malachi","Matthew","Mark","Luke","John","Acts","Romans","1 Corinthians","2 Corinthians","Galatians","Ephesians","Philippians","Colossians","1 Thessalonians","2 Thessalonians","1 Timothy","2 Timothy","Titus","Philemon","Hebrews","James","1 Peter","2 Peter","1 John","2 John","3 John","Jude","Revelation"]
}

$(document).ready(function(){
    // get information from $_GET
    var lang = location.href.match(/lang=([a-z]+)/)[1];
    var vlang = location.href.match(/vlang=([a-z]+)/);
    if (vlang)
        vlang = vlang[1];
    else
        vlang = '';
    var cid = location.href.match(/cid=([0-9]+)/)[1];
    var bid = location.href.match(/bid=([0-9]+)/)[1];

    // bookPicker, chapterPicker, versionPicker initializing
    var bookpicker = $('#bookpicker');
    for (var i = 0; i < books[lang].length; i++) {
        bookpicker.append(
          "<option value=" + (i+1) + ">" + books[lang][i] + "</option>"
        );
    }
    for (var i = 0; i < 50; i++) {
        $('#chapterpicker').append(
            '<option value="' + (i+1) + '">' + (i+1) + '</option>'
        )
    }
    $('#versionpicker').append(
        '<option value="ch">中文</option>' +
        '<option value="en">English</option>' +
        '<option value="de">Deutsch</option>'
        // '<option value="jp">にほんご</option>' +
        // '<option value="gk">Ελληνικά</option>'
    );
    $('#viceversionpicker').append(
        '<option value="">無</option>' +
        '<option value="ch">中文</option>' +
        '<option value="en">English</option>' +
        '<option value="de">Deutsch</option>'
        // '<option value="jp">にほんご</option>' +
        // '<option value="gk">Ελληνικά</option>'
    );

    // handle chapterPicker content
    bookpicker.on('change', function() {
        var bookNo = bookpicker.val();
        $('#chapterpicker').empty();
        var optionList = "";
        for (var i = 0; i < chapters[bookNo-1]; i++)
            optionList += '<option value="' + Number(i+1) + '">' + Number(i+1) + '</option>';
        $('#chapterpicker').append(optionList);
    });

    $('#versionpicker').val(lang);
    $('#viceversionpicker').val(vlang);
    bookpicker.val(bid);
    bookpicker.trigger('change');
    $('#chapterpicker').val(cid);

    // menu icon rotate when being clicked on
    var rotateAngle = 0;
    $('.draggable-btn').click(function() {
        rotateAngle += 180;
        $(this).children().rotate({
            duration: 200,
            animateTo: rotateAngle,
            callback: function() {
                $('#dragOutBox').slideToggle();
            }
        });
    });

    // handle click on chinese footnote
    $('a.notes').click(function() {
        var footnote_index = $(this).attr('id').substr(5);
        var footnoteNum = footnote_index.split('_')[4];
        var verse = $(this).parent().parent().html();
        $.get('/fnt', {lang: 'ch', fntIdx: footnote_index}).done(function(data) {
            showFootnoteModal('註解', footnoteNum, verse, data);
        });
    });

    $('#goto_btn').click(function() {
        window.location = '/chapter?lang=' + $('#versionpicker').val() + '&vlang=' + $('#viceversionpicker').val() + '&bid=' + $('#bookpicker').val() + '&cid=' + $('#chapterpicker').val();
    });
});

function updateBookPickerLang() {
    var tempBook = $('#bookpicker').val();
    var tempVersion = $('#versionpicker').val();
    $('#bookpicker').empty();
    for (var i = 0; i < books[tempVersion].length; i++) {
        $('#bookpicker').append(
          "<option value=" + (i+1) + ">" + books[tempVersion][i] + "</option>"
        );
    }
    $('#bookpicker').val(tempBook);
}

var showFootnoteModal = function(titlePrefix, ftNumber, verse, ft) {
  var msgModal = $('<div class="modal fade" tabindex="-1" role="dialog" id="msgModal">').append(
    $('<div class="modal-dialog">').append(
      $('<div class="modal-content">').append(
        $('<div class="modal-header">').append(
          $('<button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>'),
          $('<h4 class="modal-title footnote-title" id="modal-title">').text(titlePrefix+"#"+ftNumber)
        ),
        $('<div class="modal-body">').append(
          $('<p class="footnote-verse" id="footnote-verse">').html("<blockquote><i>"+verse+"</i></blockquote>"),
          $('<p class="footnote-content" id="footnote-content">').html(ft)
        ),
        $('<div class="modal-footer">').append(
          $('<p style="text-align: center;">').append(
            $('<a class="amen" data-dismiss="modal">').html("Amen!")
          )
        )
      )
    )
  );

  msgModal.on('show.bs.modal', function() {
    setModalMaxHeight(this);
  });

  msgModal.on('shown.bs.modal', function() {
    $('span > a.notes').click(function() {
        var footnote_index = $(this).attr('id').substr(5);
        var footnoteNum = footnote_index.split('_')[4];
        $.get('/fnt', {lang: 'ch', fntIdx: footnote_index}).done(function(data) {
            $('#modal-title').text(titlePrefix+"#"+footnoteNum);
            $('#footnote-content').html(data);
        });
    });
    // $('i > sup > a.en_notes').on('click', function() {
    //   var footnote_id = $(this).attr('fntId');
    //   var footnoteNum = $(this).text();
    //   $('#modal-title').text(titlePrefix+"#"+footnoteNum);
    //   $('#footnote-content').html(en_footnotes[footnote_id]);
    // });
  });

  msgModal.on('hidden.bs.modal', function(){
    msgModal.remove();
  });

  $(window).resize(function() {
    if ($('.modal.in').length != 0) {
      setModalMaxHeight($('.modal.in'));
    }
  });

  msgModal.modal('show');
};

function setModalMaxHeight(element) {
  this.$element     = $(element);  
  this.$content     = this.$element.find('.modal-content');
  var borderWidth   = this.$content.outerHeight() - this.$content.innerHeight();
  var dialogMargin  = $(window).width() < 768 ? 20 : 60;
  var contentHeight = $(window).height() - (dialogMargin + borderWidth);
  var headerHeight  = this.$element.find('.modal-header').outerHeight() || 0;
  var footerHeight  = this.$element.find('.modal-footer').outerHeight() || 0;
  var maxHeight     = (contentHeight - (headerHeight + footerHeight)) * 0.7;

  this.$content.css({
      'overflow': 'hidden'
  });
  
  this.$element
    .find('.modal-body').css({
      'max-height': maxHeight,
      'overflow-y': 'auto'
  });
}

var showTempMsgModal = function(msg) {
  var msgModal = $('<div class="modal fade" id="msgModal">').append(
    $('<div class="modal-dialog">').append(
      $('<div class="modal-content">').append(
        $('<div class="modal-header">').append(
          $('<button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>'),
          $('<h4 class="modal-title">').text('提示訊息')
        ),
        $('<div class="modal-body">').append(
          $('<p class="lead text-center">').text(msg)
        )
      )
    )
  );
  msgModal.modal('show');

  msgModal.on('hidden.bs.modal', function(){
    msgModal.remove();
  });

  setTimeout(function(){
    msgModal.modal('hide');
  }, 1000);
};
