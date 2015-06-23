 $(document).ready(function(){
        
    $( "div.popup" ).replaceWith( "<div class='" + "boxCourse" + "'><div class='" + "textBlock" +"'>Ще більше відео матеріалів в <eo>онлайн-курсі</eo> від розробників цієї книги</div><a href='" + "https://study.ed-era.com/courses/EdEra/P101/p101/about?_ga=1.67151697.1581692993.1410539408" + "'><button class='" + "but2" + "'>Перейти на курс</button></a><img src='" + "https://rawgit.com/chudaol/ed-era-book-physics/master/custom/css/close.png'" + "class='" + "closeBut" + "'/></div>" );    
        
    $(".closeBut").click(function(){
        $(".boxCourse").hide();
    });
    });