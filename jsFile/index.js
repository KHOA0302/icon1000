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

///////////////////////HOVER OVERPLAY BY USING JAVASCRIPT AND related things/////////////////////////////
var cover = document.querySelector('.cover-main');
var overlay = document.querySelector('.overplay');
var theGear = document.querySelector('.the-gear');
var theRide = document.querySelector('.the-ride');
var theBrand = document.querySelector('.the-brand');
var targetHidden = document.querySelector('.zone-hidden');
var gearHoverShow = document.querySelector('.gearShow');
var rideHoverShow = document.querySelector('.rideShow');
var brandHoverShow = document.querySelector('.brandShow');
var theGearTarget = document.querySelector('.the-gear-link');
var theRideTarget = document.querySelector('.the-ride-link');
var theBrandTarget = document.querySelector('.the-brand-link');

  theGearTarget.onmouseover = function() {
    overlay.classList.add('show');
    theGear.style.display = 'block';
    theRide.style.display = 'none';
    theBrand.style.display= 'none';
    cover.style.display = 'block';
    gearHoverShow.classList.add('bonus');
    rideHoverShow.classList.remove('bonus');
    brandHoverShow.classList.remove('bonus');
  }
  
  theRideTarget.onmouseover = function() {
    overlay.classList.add('show');
    theRide.style.display = 'block';
    cover.style.display = 'block';
    rideHoverShow.classList.add('bonus');
    gearHoverShow.classList.remove('bonus');
    brandHoverShow.classList.remove('bonus');
    theGear.style.display = 'none';
    theBrand.style.display = 'none';
  }

  theBrandTarget.onmouseover = function() {
    overlay.classList.add('show');
    theBrand.style.display = 'block';
    cover.style.display = 'block';
    brandHoverShow.classList.add('bonus');
    rideHoverShow.classList.remove('bonus');
    gearHoverShow.classList.remove('bonus');
    theRide.style.display = 'none';
    theGear.style.display = 'none';
  }

  targetHidden.onmouseover= function() {
    overlay.classList.remove('show');
    theGear.style.display = 'none';
    theRide.style.display = 'none';
    theBrand.style.display = 'none';
    cover.style.display = 'none';
    gearHoverShow.classList.remove('bonus');
    rideHoverShow.classList.remove('bonus');
    brandHoverShow.classList.remove('bonus');
  }
//////////////////////////////////////////////////////////////////////////////////////////////////////

window.addEventListener("scroll", closed);
function closed() {
  var appear = document.querySelector('.sticky');
  var topOverplay = document.querySelector('.overplay');
  if(appear) topOverplay.style.top = '60px'; 
  else topOverplay.style.top = '120px';
}

function menuShow () {
  var menuBtn = document.querySelector('.header__navbar-icon-menu');
  var header = document.querySelector('.header__navbar-option-wrap');
  var logoMain = document.querySelector('.header__navbar-logo-wrap');
  var optionLeft = document.querySelector('.header__navbar-option-left');
  var optionRight = document.querySelector('.header__navbar-option-right');
  var lineOne = document.querySelector('.one');
  var lineTwo = document.querySelector('.two');
  var lineThree = document.querySelector('.three');
  var line = document.querySelector('.line');
  var showBrand = document.querySelector('.header__navbar-brand-option-left');
  var hint = 1;
  menuBtn.onclick = function (){
    if(hint == 1) {
      header.style.background = 'var(--white-color)';
      lineOne.style.transform = 'translateY(8px)';
      lineThree.style.transform = 'translateY(-8px)';
      logoMain.style.display = 'none';  
      showBrand.style.display = 'inline-block';
      header.style.marginLeft = '0px';
      header.style.width = '100%';
      header.style.transition = 'none';
      return hint = 0;
    }
    else {
      optionRight.style.display = 'initial';
      optionLeft.style.display = 'initial';
      header.style.background = 'initial';
      header.style.marginLeft = '229px';
      header.style.width = 'var(--width-header)';
      lineOne.style.transform = 'initial';
      lineThree.style.transform = 'initial';
      logoMain.style.display = 'initial';
      showBrand.style.display = 'none';
      return hint = 1;
    }
  }
}; menuShow();

