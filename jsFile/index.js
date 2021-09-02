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
}

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
    }
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
    };
}

window.addEventListener('scroll', Blur);
                        
function Blur() {
    var Blurs = document.querySelectorAll(' .Blur');

    for(var i = 0; i < Blurs.length; i++){

        var windowheight = window.innerHeight;

        var Blurtop = Blurs[i].getBoundingClientRect().top;
        var Blurpoint = 150;

        if(Blurtop < windowheight - Blurpoint){
          Blurs[i].classList.add('BlurDelay');
        }
    }
}

///////////////////////////////////////////HOVER OVERPLAY BY USING JAVASCRIPT AND related things////////////////////////////////////////////////////////////////
window.addEventListener("load", appear);

function appear(){
  var targetAppear = document.querySelectorAll('.header__navbar-item-link');
  var overplay = document.querySelector('.overplay');

  for(var i = 0; i < targetAppear.length; ++i) {
  targetAppear[i].onmouseover = function() {
    overplay.style.display = 'block'; 
  }
 }
};

window.addEventListener("load", hidden);

function hidden(){
  var targetHidden = document.querySelector('.the-gear-wrap');
  var overplay = document.querySelector('.overplay');
   
  targetHidden.onmouseover = function() {
    overplay.style.display = 'block';
  }
  targetHidden.onmouseout = function() {
    overplay.style.display = 'none';
  }
 };

window.addEventListener("scroll", closed);

function closed() {
    var appear = document.querySelector('.sticky');
    var topOverplay = document.querySelector('.overplay');
    if(appear) topOverplay.style.top = '60px'; 
    else topOverplay.style.top = '120px';
}

