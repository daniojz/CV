function navMenu(e){
    let header =  document.getElementsByTagName("header")[0];
    let target = e.target

    if (!header.classList.contains("header-open")){
        header.classList.add("header-open");
        target.classList.replace("fa-bars", "fa-times");

    } else {
        header.classList.remove("header-open");
        target.classList.replace("fa-times", "fa-bars");
        }
}

// The function actually applying the offset
function scrollUp() {
    window.scrollTo(window.scrollX, window.scrollY - 80);
}
function positionDown(){
    setTimeout(scrollUp, 0);
}

window.onload = function () {

    document.getElementById("menu-icon").addEventListener("click", navMenu);
    document.getElementById("down_icon").onclick = positionDown

}

