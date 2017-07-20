var chapters = [50,40,27,36,34,24,21,4,31,24,22,25,29,36,10,13,10,42,150,31,12,8,66,52,5,48,12,14,3,9,1,4,7,3,3,3,2,14,4,28,16,24,21,28,16,16,13,6,6,4,4,5,3,6,4,3,1,13,5,5,3,5,1,1,1,22];
var books = {
    "ch": ["創世紀","出埃及記","利未記","民數記","申命記","約書亞記","士師記","路得記","撒母耳記上","撒母耳記下","列王記上","列王記下","歷代志上","歷代志下","以斯拉記","尼希米記","以斯帖記","約伯記","詩篇","箴言","傳道書","雅歌","以賽亞書","耶利米書","耶利米哀歌","以西結書","但以理書","何西阿書","約珥書","阿摩司書","俄巴底亞書","約拿書","彌迦書","那鴻書","哈巴谷書","西番雅書","哈該書","撒迦利亞書","瑪垃基書","馬太福音","馬可福音","路加福音","約翰福音","使徒行傳","羅馬書","哥林多前書","哥林多後書","加拉太書","以弗所書","腓利比書","歌羅西書","帖撒羅尼迦前書","帖撒羅尼迦後書","提摩太前書","提摩太後書","提多書","腓利門書","希伯來書","雅各書","彼得前書","彼得後書","約翰一書","約翰二書","約翰三書","猶大書","啟示錄"],
    "en": ["Genesis","Exodus","Leviticus","Numbers","Deuteronomy","Joshua","Judges","Ruth","1 Samuel","2 Samuel","1 Kings","2 Kings","1 Chronicles","2 Chronicles","Ezra","Nehemiah","Esther","Job","Psalm","Proverbs","Ecclesiastes","Song of Songs","Isaiah","Jeremiah","Lamentations","Ezekiel","Daniel","Hosea","Joel","Amos","Obadiah","Jonah","Micah","Nahum","Habakkuk","Zephaniah","Haggai","Zechariah","Malachi","Matthew","Mark","Luke","John","Acts","Romans","1 Corinthians","2 Corinthians","Galatians","Ephesians","Philippians","Colossians","1 Thessalonians","2 Thessalonians","1 Timothy","2 Timothy","Titus","Philemon","Hebrews","James","1 Peter","2 Peter","1 John","2 John","3 John","Jude","Revelation"],
    "de": ["Genesis","Exodus","Levitikus","Numeri","Deuteronomium","Josua","Richter","Rut","1 Samuel","2 Samuel","1 Könige","2 Könige","1 Chronik","2 Chronik","Esra","Nehemia","Ester","Hiob","Der Psalter","Sprueche","Prediger","Das Hohelied Salomos","Jesaja","Jeremia","Klagelieder","Hesekiel","Daniel","Hosea","Joel","Amos","Obadja","Jona","Mica","Nahum","Habakuk","Zephanja","Haggai","Sacharja","Maleachi","Matthäus","Markus","Lukas","Johannes","Apostelgeschichte","Römer","1 Korinther","2 Korinther","Galater","Epheser","Philipper","Kolosser","1 Thessalonicher","2 Thessalonicher","1 Timotheus","2 Timotheus","Titus","Philemon","Hebräer","Jakobus","1 Petrus","2 Petrus","1 Johannes","2 Johannes","3 Johannes","Judas","Offenbarung"],
    "jp": ["創世記","出エジプト記","レビ記","民数記","申命記","ヨシュア記","士師記","ルツ記","サムエル記上","サムエル記下","列王紀上","列王紀下","歴代志上","歴代志下","エズラ記","ネヘミヤ記","エステル記","ヨブ記","詩篇","箴言","伝道の書","雅歌","イザヤ書","エレミヤ書","哀歌","エゼキエル書","ダニエル書","ホセア書","ヨエル書","アモス書","オバデヤ書","ヨナ書","ミカ書","ナホム書","ハバクク書","ゼパニヤ書","ハガイ書","ゼカリヤ書","マラキ書","マタイによる福音書","マルコによる福音書","ルカによる福音書","ヨハネによる福音書","使徒行伝","ローマ人への手紙","コリント人への第一の手紙","コリント人への第二の手紙","ガラテヤ人への手紙","エペソ人への手紙","ピリピ人への手紙","コロサイ人への手紙","テサロニケ人への第一の手紙","テサロニケ人への第二の手紙","テモテへの第一の手","テモテへの第二の手紙","テトスへの手紙","ピレモンへの手紙","ヘブル人への手紙","ヤコブの手紙","ペテロの第一の手紙","ペテロの第二の手紙","ヨハネの第一の手紙","ヨハネの第二の手紙","ヨハネの第三の手紙","ユダの手紙","啓示録"],
    "gk": ["Genesis","Exodus","Leviticus","Numbers","Deuteronomy","Joshua","Judges","Ruth","1 Samuel","2 Samuel","1 Kings","2 Kings","1 Chronicles","2 Chronicles","Ezra","Nehemiah","Esther","Job","Psalm","Proverbs","Ecclesiastes","Song of Songs","Isaiah","Jeremiah","Lamentations","Ezekiel","Daniel","Hosea","Joel","Amos","Obadiah","Jonah","Micah","Nahum","Habakkuk","Zephaniah","Haggai","Zechariah","Malachi","Matthew","Mark","Luke","John","Acts","Romans","1 Corinthians","2 Corinthians","Galatians","Ephesians","Philippians","Colossians","1 Thessalonians","2 Thessalonians","1 Timothy","2 Timothy","Titus","Philemon","Hebrews","James","1 Peter","2 Peter","1 John","2 John","3 John","Jude","Revelation"]
}
var books_abbr = ["創","出","利","民","申","書","士","得","撒上","撒下","王上","王下","代上","代下","拉","尼","斯","伯","詩","箴","傳","歌","賽","耶","哀","結","但","何","珥","摩","俄","拿","彌","鴻","哈","番","該","亞","瑪","太","可","路","約","徒","羅","林前","林後","加","弗","腓","西","帖前","帖後","提前","提後","多","門","來","雅","彼前","彼後","約壹","約貳","約參","猶","啟"];
var en_books_abbr = ["Gen.","Exo.","Lev.","Num.","Deut.","Josh.","Judg.","Ruth","1 Sam.","2 Sam.","1 Kings","2 Kings","1 Chron.","2 Chron.","Ezra","Neh.","Est.","Job","Ps.","Prov.","Eccles.","Song","Isa.","Jer.","Lam.","Ezek.","Dan.","Hos.","Joel","Amos","Obad.","Jonah","Mic.","Nah.","Hab.","Zeph.","Hag.","Zech.","Mal.","Matt.","Mark","Luke","John","Acts","Rom.","1 Cor.","2 Cor.","Gal.","Eph.","Phil.","Col.","1 Thess.","2 Thess.","1 Tim.","2 Tim.","Titus","Philem.","Heb.","James","1 Pet.","2 Pet.","1 John","2 John","3 John","Jude","Rev."];
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

// for global footnote accessing
var footnotes = [];
var en_footnotes = [];

// for crawling
var currentBook = 1;
var currentChapter = 1;
var currentVersion = "ch";
var currentViceVersion = "en";

$(document).ready(function(){

    // ajax loading effect
    $(document).on({
        ajaxStart: function() {$('body').addClass('loading');},
        ajaxStop: function() {$('body').removeClass('loading');}
    });

    
    // bookPicker, chapterPicker, versionPicker initializing
    var bookpicker = $('#bookpicker');
    for (var i = 0; i < books[currentVersion].length; i++) {
        bookpicker.append(
          "<option value=" + (i+1) + ">" + books[currentVersion][i] + "</option>"
        );
    }
    for (var i = 0; i < 50; i++) {
        $('#chapterpicker').append(
            '<option value="' + Number(i+1) + '">' + Number(i+1) + '</option>'
        )
    }
    $('#versionpicker').append(
        '<option value="ch">中文</option>' +
        '<option value="en">English</option>' +
        '<option value="de">Deutsch</option>' +
        '<option value="jp">にほんご</option>' +
        '<option value="gk">Ελληνικά</option>'
    )
    $('#viceversionpicker').append(
        '<option value="">無</option>' +
        '<option value="ch">中文</option>' +
        '<option value="en">English</option>' +
        '<option value="de">Deutsch</option>' +
        '<option value="jp">にほんご</option>' +
        '<option value="gk">Ελληνικά</option>'
    )

    // handle chapterPicker content
    bookpicker.on('change', function() {
        var bookNo = bookpicker.val();
        $('#chapterpicker').empty();
        var optionList = "";
        for (var i = 0; i < chapters[bookNo-1]; i++)
            optionList += '<option value="' + Number(i+1) + '">' + Number(i+1) + '</option>';
        $('#chapterpicker').append(optionList);
    });

    // handle viceversionpicker content
    $('#versionpicker').on('change', function() {
        updateBookPickerLang();
    });

    // handle displaying footnote
    if (typeof $.cookie('ORVB_showFt') !== "undefined") {
        if (parseInt($.cookie('ORVB_showFt')) == 1) {
            $('#showFt').prop('checked', true);
        } else {
            $('#showFt').prop('checked', false);
        }
    }
    $('#showFt').on('change', function() {
        toggleFootnote();
    });

    // from cookie set up initial value of book and chapter
    if (typeof $.cookie('ORVB_book') === "undefined" ||
        typeof $.cookie('ORVB_chapter') === "undefined" ||
        typeof $.cookie('ORVB_version') === "undefined" ||
        typeof $.cookie('ORVB_viceversion') === "undefined" ) {
        console.log("one of Cookie is undefined");
    } else {
        $('#bookpicker').val(parseInt($.cookie('ORVB_book')));
        $('#bookpicker').trigger('change');
        $('#chapterpicker').val(parseInt($.cookie('ORVB_chapter')));
        $('#versionpicker').val($.cookie('ORVB_version'));
        $('#viceversionpicker').val($.cookie('ORVB_viceversion'));
        updateBookPickerLang();
        crawVersesByUserInput();
    }

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
});

function toggleFootnote() {
    if ($('#showFt').prop('checked')) {
        $('.notes').show();
        $('.en_notes').parent().show();
        $.cookie('ORVB_showFt', 1, {expires: 14, path: '/'});
    } else {
        $('.notes').hide();
        $('.en_notes').parent().hide();
        $.cookie('ORVB_showFt', 0, {expires: 14, path: '/'});
    }
}

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

function crawVersesByUserInput() {
    currentBook = $('#bookpicker').val();
    currentChapter = $('#chapterpicker').val();
    currentVersion = $('#versionpicker').val();
    currentViceVersion = $('#viceversionpicker').val();
    crawVerses();
}

function crawVerses() {
    var bookNumber = currentBook;
    var chapterNumber = currentChapter;
    var majorVersion = currentVersion;
    var viceVersion = currentViceVersion;

    // set cookie (ORVB = online recovery version bible)
    $.cookie('ORVB_book', bookNumber, {expires: 14, path: '/'});
    $.cookie('ORVB_chapter', chapterNumber, {expires: 14, path: '/'});
    $.cookie('ORVB_version', majorVersion, {expires: 14, path: '/'});
    $.cookie('ORVB_viceversion', viceVersion, {expires: 14, path: '/'});

    $('#verse_container').empty();
    var title_str = "<span class=\"" + majorVersion + "_verse\" style=\"line-height:120%;\">" + books[majorVersion][bookNumber-1] + "<br><span style=\"font-size: 140%;\">" + strings[majorVersion]['chapterPrefix'] + chapterNumber + strings[majorVersion]['chapterPostfix'] + "</span></span>";
    $('#chapterTitle').html(title_str);

    $.ajax({
        method: 'POST',
        url: './BibleVersesCrawler.php',
        data: '&book=' + bookNumber + '&chapter=' + chapterNumber + '&mversion=' + majorVersion + '&vversion=' + viceVersion,
        dataType: 'json',
        success: function(data) {

            var majorVerses = data[0];
            var vice_match = [];
            if (data[2]) {
                var viceVerses = data[2];
                for (var i = 0; i < viceVerses.length; i++) {
                    vice_match[viceVerses[i]['v_number']] = viceVerses[i]['verse'];
                }
            }
            for (var i = 0; i < majorVerses.length; i++) {
                var vice_content = "";
                if (viceVersion != "" && majorVerses[i]['v_number'] in vice_match)
                    vice_content = "<br><span class=\"vice_content "+viceVersion+"_verse\">"+vice_match[majorVerses[i]['v_number']]+"</span>";
                $('#verse_container').append(
                    "<tr><td>"+
                    "<span class=\"v_number\">" + majorVerses[i]['v_number'] + "</span>"+
                    "</td><td id=\"verse_cell\">"+
                    "<span class=\"" + majorVersion + "_verse\">"+
                        majorVerses[i]['verse'] + "</span>" + vice_content+
                    "</td></tr>"
                );
            }

            switch (majorVersion) {
                case 'ch':
                    footnotes = [];
                    if (data[1])
                        for (var i = 0; i < data[1].length; i++) {
                            footnotes[data[1][i]['footnote_id']] = data[1][i]['content'];
                        }
                    break;
                case 'en':
                    en_footnotes = [];
                    if (data[1])
                        for (var i = 0; i < data[1].length; i++) {
                            en_footnotes[data[1][i]['footnote_id']] = data[1][i]['content'];
                        }
                    break;
                default:
                    break;
            }
            switch (viceVersion) {
                case 'ch':
                    footnotes = [];
                    if (data[3])
                        for (var i = 0; i < data[3].length; i++) {
                            footnotes[data[3][i]['footnote_id']] = data[3][i]['content'];
                        }
                    break;
                case 'en':
                    en_footnotes = [];
                    if (data[3])
                        for (var i = 0; i < data[3].length; i++) {
                            en_footnotes[data[3][i]['footnote_id']] = data[3][i]['content'];
                        }
                    break;
                default:
                    break;
            }

            // process click event on chinese footnote
            if (majorVersion == 'ch' || viceVersion == 'ch') {
                $('.notes').on('click', function() {
                    var footnote_index = $(this).attr('id').substr(5);
                    var footnote_info = footnote_index.split('_');
                    var bookName = books['ch'][parseInt(footnote_info[0])-1];
                    var chapterNum = footnote_info[1];
                    var verseNum = footnote_info[2];
                    var ftNumber = footnote_info[4];
                    var footnoteTitle = bookName+' '+chapterNum+':'+verseNum;
                    var verseContent = $(this).parent().html();
                    showFootnoteModal(footnoteTitle, ftNumber, verseContent, footnotes[footnote_index]);
                });
            }

            // process click event on english footnote
            if (majorVersion == 'en' || viceVersion == 'en') {
                $('.en_notes').on('click', function() {
                    var footnote_id = $(this).attr('fntId');
                    var verseNum = $(this).parent().parent().parent().prev().text();
                    var ftNumber = $(this).text();
                    var footnoteTitle = books['en'][currentBook-1]+" "+currentChapter+":"+verseNum;
                    var verseContent = $(this).parent().parent().html();
                    showFootnoteModal(footnoteTitle, ftNumber, verseContent, en_footnotes[footnote_id]);
                });
            }

            // process the display of prevChapter and nextChapter
            if (chapterNumber == 1) {
                $('#upperPrevChBtn').hide();
                $('#lowerPrevChBtn').hide();
            } else {
                $('#upperPrevChBtn').show();
                $('#lowerPrevChBtn').show();
            }
            if (chapterNumber == chapters[bookNumber-1]) {
                $('#upperNextChBtn').hide();
                $('#lowerNextChBtn').hide();
                if (bookNumber != 66)
                    $('.next_book_btn').fadeIn("slow");
            } else {
                $('#upperNextChBtn').show();
                $('#lowerNextChBtn').show();
                $('.next_book_btn').hide();
            }

            // process copy verses event
            $('.v_number').on('click', function() {
                collectCopiedVerses($(this));
            });

            // decide whether to show footnote
            toggleFootnote();

            // animation for moving to top of page
            $('html, body').animate({ scrollTop: 0 }, 'fast');
        },
        error: function(xhr, ajaxOptions, thrownError){ 
              console.log(xhr.status);
              console.log(thrownError);
              alert("Server error!");
        }
    });
}

function prevChapter() {
    currentChapter = Number(currentChapter) - 1;
    $('#bookpicker').val(currentBook);
    $('#bookpicker').trigger('change');
    $('#chapterpicker').val(currentChapter);
    crawVerses();
};

function nextChapter() {
    currentChapter = Number(currentChapter) + 1;
    $('#bookpicker').val(currentBook);
    $('#bookpicker').trigger('change');
    $('#chapterpicker').val(currentChapter);
    crawVerses();
};

function nextBook() {
    $('a.next_book_btn').hide();
    currentBook = Number(currentBook) + 1;
    $('#bookpicker').val(currentBook);
    $('#bookpicker').trigger('change');
    currentChapter = 1;
    $('#chapterpicker').val(currentChapter);
    crawVerses();
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
    $('i > a.notes').on('click', function() {
      var footnote_index = $(this).attr('id').substr(5);
      var footnoteNum = footnote_index.split('_')[4];
      $('#modal-title').text(titlePrefix+"#"+footnoteNum);
      $('#footnote-content').html(footnotes[footnote_index]);
    });
    $('i > sup > a.en_notes').on('click', function() {
      var footnote_id = $(this).attr('fntId');
      var footnoteNum = $(this).text();
      $('#modal-title').text(titlePrefix+"#"+footnoteNum);
      $('#footnote-content').html(en_footnotes[footnote_id]);
    });
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

var copiedVerses = {};

function collectCopiedVerses(clickedNum) {
    var verseLang = currentVersion.substring(0,2);
    var verseNumber = clickedNum.text();

    if (copiedVerses.hasOwnProperty(verseNumber)) {
        delete copiedVerses[verseNumber];
        clickedNum.removeClass('chosen');
    } else {
        clickedNum.addClass('chosen');
        var chosenVerse = clickedNum.parent().next().children('.'+verseLang+'_verse').clone().children().remove().end().text();
        if (verseLang == 'ch')
            var verseFullIndex = " -"+books_abbr[currentBook-1]+" "+currentChapter+":"+verseNumber+"-";
        else if (verseLang == 'en')
            var verseFullIndex = " -"+en_books_abbr[currentBook-1]+" "+currentChapter+":"+verseNumber+"-";
        else if (verseLang == 'jp')
            var verseFullIndex = " -"+books_abbr[currentBook-1]+" "+currentChapter+":"+verseNumber+"-";
        else if (verseLang == 'gk')
            var verseFullIndex = " -"+en_books_abbr[currentBook-1]+" "+currentChapter+":"+verseNumber+"-";
        copiedVerses[verseNumber] = chosenVerse+verseFullIndex;
    }

    $('a.copy_to_clipboard').fadeIn();
    $('a.cancel_copy').fadeIn();
}

function showCopiedVerses() {
    $('a.copy_to_clipboard').fadeOut();
    $('a.cancel_copy').fadeOut();
    $('.v_number').removeClass('chosen');

    var pasteStr = "";
    var isFirst = true;
    jQuery.each(copiedVerses, function(index, content) {
        if (isFirst)
            isFirst = false
        else
            pasteStr += "\r\n";
        pasteStr += content;
    });
    copiedVerses = {};

    var copyModal = $('<div class="modal modal-copy fade" tabindex="-1" role="dialog" id="copyModal">').append(
      $('<div class="modal-dialog">').append(
        $('<div class="modal-content">').append(
          $('<div class="modal-header">').append(
            $('<button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>'),
            $('<h4 class="modal-title footnote-title" id="modal-title">').text("分享經節")
          ),
          $('<div class="modal-body">').append(
            $('<form>').append(
              $('<div class="form-group">').append(
                $('<label class="control-label">').text("複製區域"),
                $('<textarea class="form-control" rows=8 id="copyArea">').val(pasteStr)
              )
            )
          ),
          $('<div class="modal-footer">').append(
            $('<button class="btn btn-primary" id="copyBtn" data-clipboard-target="#copyArea">').text("複製")
          )
        )
      )
    );
    
    if ($(window).width < 768) {
        copyModal.children('.modal-dialog').css("width", "90%");
    }
    copyModal.on('shown.bs.modal', function() {
        new Clipboard('#copyBtn');
    });
    copyModal.on('hidden.bs.modal', function(){
        copyModal.remove();
    });
    copyModal.modal('show');
}

function cancelCopiedVerses() {
    copiedVerses = {};
    $('a.copy_to_clipboard').fadeOut();
    $('a.cancel_copy').fadeOut();
    $('.v_number').removeClass('chosen');
}
