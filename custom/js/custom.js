$(document).ready(function () {
  function startMathJax () {
    MathJax.Hub.Config({
      tex2jax: {}
    });

    gitbook.events.bind("page.change", function() {
      MathJax.Hub.Typeset()
    });
  }

  function init () {
    var href, $lastLink;

    $("a.toggle-search").remove();

    $lastLink = $(".custom-link:last");
    href = $lastLink.prop("href");
    href = "https://ed-era.com/books/" + _.last(href.split("-"));
    $lastLink.prop("href", href);
  }
  init();
  require(["gitbook"], function (gitbook) {
    gitbook.events.bind("page.change", init);
    gitbook.events.bind("start", function () {
    var interval = null
    interval = setInterval(function () {
    if (typeof MathJax === "object") {
    startMathJax()
    clearInterval(interval)
    }
    }, 1000)
    })    
  });
});
