window.addEventListener("scroll", function(){
    var header = document.querySelector(".header");
    header.classList.toggle("sticky", window.scrollY > 0);
})

                        /*  REVEAL ELEMENT  */

window.addEventListener('scroll', reveal);
                        
function reveal() {
    var reveals = document.querySelectorAll(' .reveal');

    for(var i = 0; i < reveals.length; i++){

        var windowheight = window.innerHeight;

        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if(revealtop < windowheight - revealpoint){
          reveals[i].classList.add('active');
        }
        // else {
        //     reveals[i].classList.remove('active');
        // }
    }
    //console.log(revealtop);
}

reveal();

// window.addEventListener("scroll", function(){
//   var div = document.querySelector(".fadeOut");
//   if(this.window.scrollY > 800)
//   div.classList.add("appear");
// })

window.addEventListener('scroll', fadeOut);
                        
function fadeOut() {
    var fadeOuts = document.querySelectorAll(' .fadeOut');

    for(var i = 0; i < fadeOuts.length; i++){

        var windowheight = window.innerHeight;

        var fadeOuttop = fadeOuts[i].getBoundingClientRect().top;
        var fadeOutpoint = 150;

        if(fadeOuttop < windowheight - fadeOutpoint){
          fadeOuts[i].classList.add('appear');
        }
        // else {
        //     fadeOuts[i].classList.remove('appear');
        // }
    }
    console.log(fadeOuttop);
}

window.addEventListener('scroll', fadeOut1);
                        
function fadeOut1() {
    var fadeOut1s = document.querySelectorAll(' .fadeOut1');

    for(var i = 0; i < fadeOut1s.length; i++){

        var windowheight = window.innerHeight;

        var fadeOut1top = fadeOut1s[i].getBoundingClientRect().top;
        var fadeOut1point = 150;

        if(fadeOut1top < windowheight - fadeOut1point){
          fadeOut1s[i].classList.add('appear1');
        }
        // else {
        //     fadeOut1s[i].classList.remove('appear');
        // }
    }
    //console.log(fadeOut1top);
}

window.addEventListener('scroll', Reveal);
                        
function Reveal() {
    var Reveals = document.querySelectorAll(' .Reveal');

    for(var i = 0; i < Reveals.length; i++){

        var windowheight = window.innerHeight;

        var Revealtop = Reveals[i].getBoundingClientRect().top;
        var Revealpoint = 150;

        if(Revealtop < windowheight - Revealpoint){
          Reveals[i].classList.add('revealDelay');
        }
        // else {
        //     Reveals[i].classList.remove('appear');
        // }
    }
    //console.log(Revealtop);
}