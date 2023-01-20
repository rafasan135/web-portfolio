window.addEventListener("scroll", function() {
    progressBar();
})

function progressBar(){
    let scroll = document.documentElement.scrollTop;
    let alto = document.documentElement.scrollHeight  - document.documentElement.clientHeight;
    let progressBar = (scroll/alto)*100;
    document.getElementsByClassName("bar")[0].style.width = progressBar+"%";
}