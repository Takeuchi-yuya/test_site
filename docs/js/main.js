function header(){
  console.log("ああああ");
  document.write("ブラウザ名：" + navigator.appName + "\n");
  var html = "";
  html += '<div id = "navi">'
  html += '<a href="html/info.html"> info  </a>'
  html += '<a href="html/lab.html"> lab </a>'
  html +=  ' <a href="html/contents.html"> contents </a>'
  html +=  ' <a href="html/blog.html"> blog </a>'
  html += '</div>'
  html += '<div id = "logo">'
  html += '  <a href="index.html">博物屋</a>'
  html += '</div>'
  document.write(html);
}
