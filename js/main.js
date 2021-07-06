$(document).ready(function () {
    
    /*Menu movil*/
    const menu_movil = document.querySelector(".menu-movil");
    const mostrarOcultarMenu = () =>{
        $("nav.navegacion-principal").slideToggle(1000);
    }
    menu_movil.addEventListener("click", mostrarOcultarMenu);

    





});