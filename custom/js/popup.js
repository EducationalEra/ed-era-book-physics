$( window ).load( function(){
    function init () {
        $( "div.popup" ).replaceWith( "<div class='description'><div class='text'>Ще більше відеоматеріалів в <a class='knopka1' href='#' target='_blank'>онлайн-курсі</a> від розробників цієї книги</div><div class='btn-knopka'><a class='knopka' href='#'   target='_blank'>Незабаром буде доступно</a></div>" );
    }

    init();
    require(["gitbook"], function (gitbook) {
        gitbook.events.bind("page.change", init);
    });
});   
   