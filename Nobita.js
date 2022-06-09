function uparrow(){
    let a=document.getElementById('nobita');
    a.style.top=parseInt(a.style.top) -5 + 'px';
}
function downarrow(){
    var a=document.getElementById('nobita');
    a.style.top=parseInt(a.style.top) +5 + 'px';
}
function  leftarrow(){
    var a=document.getElementById('nobita');
    a.style.left=parseInt(a.style.left) -5 + 'px';
}
function rightarrow(){
    var a=document.getElementById('nobita');
    a.style.left=parseInt(a.style.left) +5 + 'px';
}
function move(evt) {
    switch (evt.keyCode){
        case 38:
            uparrow();
            break;
        case 37:
            leftarrow();
            break;
        case 40:
            downarrow();
            break;
        case 39:
            rightarrow();
            break;
    }
}
function ready(){
window.addEventListener('keydown',move);
}