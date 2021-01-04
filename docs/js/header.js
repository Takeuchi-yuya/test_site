function header(rootDir){
  $.ajax({
      url: rootDir + "include/header.html",  // 読み込むHTMLファイル
      cache: false,
      async: false,
      dataType: 'html',
      success: function(html){
          html = html.replace(/\{\$root\}/g, rootDir + "html/"); //header.htmlの{$root}を置換
          document.write(html);
      }
  });
}