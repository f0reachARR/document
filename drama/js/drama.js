$(document).ready(function() {
     //初期表示
     $(".tab_content_one").hide();//全ての.tab_contentを非表示
     $("ul.tabs_one li:first").addClass("active").show();//tabs内最初のliに.activeを追加
     $(".tab_content_one:first").show();//最初の.tab_contentを表示
     //タブクリック時
     $("ul.tabs_one li").click(function() {
          $("ul.tabs_one li").removeClass("active");//.activeを外す
          $(this).addClass("active");//クリックタブに.activeを追加
          $(".tab_content_one").hide();//全ての.tab_contentを非表示
          var activeTab = $(this).find("a").attr("href");//アクティブタブコンテンツ
          $(activeTab).fadeIn();//アクティブタブコンテンツをフェードイン
          return false;
     });
});

$(document).ready(function() {
     //初期表示
     $(".tab_content_two").hide();//全ての.tab_contentを非表示
     $("ul.tabs_two li:first").addClass("active").show();//tabs内最初のliに.activeを追加
     $(".tab_content_two:first").show();//最初の.tab_contentを表示
     //タブクリック時
     $("ul.tabs_two li").click(function() {
          $("ul.tabs_two li").removeClass("active");//.activeを外す
          $(this).addClass("active");//クリックタブに.activeを追加
          $(".tab_content_two").hide();//全ての.tab_contentを非表示
          var activeTab = $(this).find("a").attr("href");//アクティブタブコンテンツ
          $(activeTab).fadeIn();//アクティブタブコンテンツをフェードイン
          return false;
     });
});

$(document).ready(function() {
     //初期表示
     $(".tab_content_three").hide();//全ての.tab_contentを非表示
     $("ul.tabs_three li:first").addClass("active").show();//tabs内最初のliに.activeを追加
     $(".tab_content_three:first").show();//最初の.tab_contentを表示
     //タブクリック時
     $("ul.tabs_three li").click(function() {
          $("ul.tabs_three li").removeClass("active");//.activeを外す
          $(this).addClass("active");//クリックタブに.activeを追加
          $(".tab_content_three").hide();//全ての.tab_contentを非表示
          var activeTab = $(this).find("a").attr("href");//アクティブタブコンテンツ
          $(activeTab).fadeIn();//アクティブタブコンテンツをフェードイン
          return false;
     });
});

$(document).ready(function() {
     //初期表示
     $(".tab_content_four").hide();//全ての.tab_contentを非表示
     $("ul.tabs_four li:first").addClass("active").show();//tabs内最初のliに.activeを追加
     $(".tab_content_four:first").show();//最初の.tab_contentを表示
     //タブクリック時
     $("ul.tabs_four li").click(function() {
          $("ul.tabs_four li").removeClass("active");//.activeを外す
          $(this).addClass("active");//クリックタブに.activeを追加
          $(".tab_content_four").hide();//全ての.tab_contentを非表示
          var activeTab = $(this).find("a").attr("href");//アクティブタブコンテンツ
          $(activeTab).fadeIn();//アクティブタブコンテンツをフェードイン
          return false;
     });
});

$(function(){
    // #で始まるアンカーをクリックした場合に処理
    $('.scrollTo').click(function() {
        // スクロールの速度
        var speed = 300; // ミリ秒
        // アンカーの値取得
        var href= $(this).attr("href");
        // 移動先を取得
        var target = $(href == "#" || href == "" ? 'html' : href);
        // 移動先を数値で取得
        var position = target.offset().top;
        // スムーススクロール
        $('body,html').animate({scrollTop:position}, speed, 'linear');
        return false;
    });
});