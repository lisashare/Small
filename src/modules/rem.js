!function(doc, win) {
    var cw = 1920
    function fontSizeInit() {
      var html = doc.documentElement;
      var hwidth = html.getBoundingClientRect().width;
      hwidth < 768 && (hwidth = 768);
      html.style.fontSize = 100*(hwidth/cw) + 'px'
    }
    fontSizeInit();
    var reTimeoutId;
    win.onresize = function () {
      reTimeoutId && clearTimeout(reTimeoutId);
      reTimeoutId = setTimeout(function(){
        fontSizeInit();
      }, 100)
    };
  }(document, window);