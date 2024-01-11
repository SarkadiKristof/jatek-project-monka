body = document.querySelector('body')
button = document.querySelector('button')
target = document.querySelector('.target')
cursor = document.querySelector('.cursor')

score = 0;
screenWidth = body.offsetWidth;
screenHeight = body.offsetHeight;

button.addEventListener('click',function(){

    window.addEventListener('mousemove',function(e){
        cursor.style.left = e.pageX + "px";
        cursor.style.top = e.pageY + "px"; 
        console.log(e.target.classList)
    })

    window.addEventListener('click',function(e){
     
        if(e.target.classList.contains("target")){
            score++;
            button.innerHTML = "Score "+score;
        }
    }) 

    setInterval(function(){
        randTop = Math.random() * (screenHeight - 150);
        randleft = Math.random() * (screenWidth - 150);
        target.style.left = randleft + "px";
        target.style.top = (randTop) + "px";

        },1000)
})

if (score == 50) {
    
}