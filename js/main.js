$(document).ready(function () {
    
    /*Menu movil*/
    const menu_movil = document.querySelector(".menu-movil");
    const mostrarOcultarMenu = () =>{
        $("nav.navegacion-principal").slideToggle(1000);
    }
    menu_movil.addEventListener("click", mostrarOcultarMenu);
    
    $(".scrollTo").click(function() {
        let getElement = $(this).attr('href');
        if($(getElement).length) {
            let getOffset = $(getElement).offset().top - 70;
            $('html,body').animate({
                scrollTop: getOffset
            }, 1000)
        }

    })
    
});