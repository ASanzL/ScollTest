var elShowOnScroll = document.getElementById('showOnScroll');
var hasScrolledPast = false;

function onScroll() {
    var viewportOffset = elShowOnScroll.getBoundingClientRect();
    var top = viewportOffset.top;
    //console.log(top);
    //console.log(window.innerHeight);
    console.log(top - window.innerHeight);
    //console.log(window.innerHeight);
    if(top - window.innerHeight < (window.innerHeight/2)*-1 && !hasScrolledPast) {
        hasScrolledPast = true;
        elShowOnScroll.classList.add("show");
    }
}

window.addEventListener('scroll', onScroll);