
var btnMenu = document.querySelector("#btnMenu");
var listMenu = document.querySelector("#listMenu");
var visible = 0;



btnMenu.addEventListener("click", () => {
    console.log("click")
    if(visible == 0 ) {
        listMenu.style = "display: flex;";
        btnMenu.className = "fa-solid fa-scale-unbalanced-flip";
        visible++;
        console.log("teste: " +visible)
    } else {
        listMenu.style = "display: none;";
        visible--;
        btnMenu.className = "fa-solid fa-scale-balanced";
    }

    

});