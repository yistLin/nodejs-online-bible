var booknames = {
    'ot': ["創世紀","出埃及記","利未記","民數記","申命記","約書亞記","士師記","路得記","撒母耳記上","撒母耳記下","列王記上","列王記下","歷代志上","歷代志下","以斯拉記","尼希米記","以斯帖記","約伯記","詩篇","箴言","傳道書","雅歌","以賽亞書","耶利米書","耶利米哀歌","以西結書","但以理書","何西阿書","約珥書","阿摩司書","俄巴底亞書","約拿書","彌迦書","那鴻書","哈巴谷書","西番雅書","哈該書","撒迦利亞書","瑪垃基書"],
    'nt': ["馬太福音","馬可福音","路加福音","約翰福音","使徒行傳","羅馬書","哥林多前書","哥林多後書","加拉太書","以弗所書","腓利比書","歌羅西書","帖撒羅尼迦前書","帖撒羅尼迦後書","提摩太前書","提摩太後書","提多書","腓利門書","希伯來書","雅各書","彼得前書","彼得後書","約翰一書","約翰二書","約翰三書","猶大書","啟示錄"]
};

$(document).ready(function() {

    $('#chapter_container').append(
        $('<div class="row" id="ot_row">'),
        $('<div class="row" id="nt_row">')
    );

    $('#ot_row').append(
        $('<div class="col-lg-12">').append(
            $('<h4 class="testament-title">').text("舊約聖經")
        )
    );
    for (var i = 0; i < booknames['ot'].length; i++) {
        var bookNumber = i + 1;
        $('#ot_row').append(
            $('<div class="col-lg-2 col-md-3 col-sm-4 col-xs-6" style="margin-bottom: 0.3em;">').append(
                $('<a class="bookAnchor" href="/chapter?lang=ch&bid='+bookNumber+'&cid=1">').text(booknames['ot'][i])
            )
        );
    }
    $('#nt_row').append(
        $('<div class="col-lg-12">').append(
            $('<h4 class="testament-title">').text("新約聖經")
        )
    );
    for (var i = 0; i < booknames['nt'].length; i++) {
        var bookNumber = 40 + i;
        $('#nt_row').append(
            $('<div class="col-lg-2 col-md-3 col-sm-4 col-xs-6" style="margin-bottom: 0.3em;">').append(
                $('<a class="bookAnchor" href="/chapter?lang=ch&bid='+bookNumber+'&cid=1">').text(booknames['nt'][i])
            )
        );
    }

    // $('.bookAnchor').click(function() {
    //     var bookNumber = parseInt($(this).attr('book'));
    //     var chapterNumber = 1;
    //     var version = "ch";
    //     // set cookie (ORVB = online recovery version bible)
    //     $.cookie('ORVB_book', bookNumber, {expires: 14, path: '/'});
    //     $.cookie('ORVB_chapter', chapterNumber, {expires: 14, path: '/'});
    //     $.cookie('ORVB_version', version, {expires: 14, path: '/'});
    //     $.cookie('ORVB_viceversion', "", {expires: 14, path: '/'});
    //     window.location.href = '/chapter?lang=ch&bid='+bookNumber+'&cid=1';
    // });
});
