button = document.querySelector('button')
target = document.querySelector('.target')
sniper = document.querySelector('.sniper')

window.addEventListener('mousemove',function(e){
    sniper.style.left = e.pageX + "px";
    sniper.style.top = e.pageY + "px";
})