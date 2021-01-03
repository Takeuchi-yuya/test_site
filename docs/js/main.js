function header(){
  console.log("ああああ");
  document.write("ブラウザ名：" + navigator.appName + "\n");
  var html = "";
  html += '<head>'
  html += '<link rel="stylesheet" href="../css/master.css" type="text/css">'
  html += '<div id = "navi">'
  html += '<a href="#"> info  </a>'
  html += '<a href="{$root}lab.html"> lab </a>'
  html +=  ' <a href="{$root}contents.html"> contents </a>'
  html +=  ' <a href="{$root}blog.html"> blog </a>'
  html += '</div>'
  html += '<div id = "logo">'
  html += '  <a href="{$root}index.html">博物屋</a>'
  html += '</div>'
  html += '</head>'
  document.write(html);
}
