let menu = document.getElementById("menu_links");
let menu_barras = document.getElementById("menu_barras");

function mostrarMenu (){
    if (window.getComputedStyle(menu).display == "none") {
        menu.style.display = "flex"
        menu_barras.setAttribute("aria-label", "fechar menu")
        menu_barras.setAttribute("aria-expanded", "true")
    }else{
        menu.style.display = "none"
        menu_barras.setAttribute("aria-label", "abrir menu")
        menu_barras.setAttribute("aria-expanded", "false")

    }
}

// function leiaMais(){
//     var pontos=document.getElementById("pontos");
//     var maisTexto=documento.getElementById("mais");
//     var btnLeiaMais=document.getElementById("btnLeiaMais");

//     if(pontos.style.display === "none"){
//         pontos.style.display="inline";
//         maisTexto.style.display="none";
//         btnLeiaMais.innerHTML="Leia Mais";
//     }else{
//         pontos.style.display="none";
//         maisTexto.style.display="inline";
//         btnLeiaMais.innerHTML="Leia Menos";
//     }
// }