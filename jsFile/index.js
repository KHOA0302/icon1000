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
var param;

  theGearTarget.onmouseover = function() {
    overlay.classList.add('show');
    theGear.style.display = 'block';
    theRide.style.display = 'none';
    theBrand.style.display= 'none';
    cover.style.display = 'block';
    gearHoverShow.classList.add('bonus');
    rideHoverShow.classList.remove('bonus');
    brandHoverShow.classList.remove('bonus');
    return param = 0;
  }
  
  theRideTarget.onmouseover = function() {
    overlay.classList.add('show');
    theRide.style.display = 'block';
    cover.style.display = 'block';
    theGear.style.display = 'none';
    theBrand.style.display = 'none';
    rideHoverShow.classList.add('bonus');
    gearHoverShow.classList.remove('bonus');
    brandHoverShow.classList.remove('bonus');
    return param = 1;
  }

  theBrandTarget.onmouseover = function() {
    overlay.classList.add('show');
    theBrand.style.display = 'block';
    cover.style.display = 'block';
    theRide.style.display = 'none';
    theGear.style.display = 'none';
    brandHoverShow.classList.add('bonus');
    rideHoverShow.classList.remove('bonus');
    gearHoverShow.classList.remove('bonus');
    return param = 2;
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
  const menuBtn = document.querySelector('.header__navbar-icon-menu');

               //// Hide main navbar + logo + the -(section) //////
  const logoMain = document.querySelector('.header__navbar-logo-wrap');
  const navBarOptionLeft = document.querySelector('.header__navbar-option-left');
  const navBarOptionRight = document.querySelector('.header__navbar-option-right')
  const theGear = document.querySelector('.the-gear');
  const theRide = document.querySelector('.the-ride');
  const theBrand = document.querySelector('.the-brand ');
  const coverMain = document.querySelector('.cover-main');
  const underline = document.querySelectorAll('.header__navbar-item');
  const body = document.querySelector('body');
  const zoneHidden = document.querySelector('.zone-hidden');
               //// reveal other logo //////
  const logoMinor = document.querySelector('.header__navbar-brand-option-left');
  const superNav = document.querySelector('.supernav');
  const overlay = document.querySelector('.overplay');
               ///animation of line////
  const lineOne = document.querySelector('.one');
  const lineThree = document.querySelector('.three');
  
  
  var hint = 1;
  menuBtn.onclick = function (){
    if(hint == 1) {
      logoMain.style.display = 'none';
      navBarOptionLeft.style.display = 'none';
      navBarOptionRight.style.display = 'none';
      logoMinor.style.display = 'block';
      lineOne.style.transform = 'translateY(8px)';
      lineThree.style.transform = 'translateY(-8px)';
      theGear.style.display = 'none';
      theRide.style.display = 'none';
      theBrand.style.display = 'none';
      coverMain.style.display = 'none';
      if(param === 0){
        underline[0].classList.remove('bonus');
      } else if(param === 1){
        underline[1].classList.remove('bonus');
      } else {
        underline[2].classList.remove('bonus');
      }
      overlay.classList.add('show'); 
      superNav.style.display = 'block';
      superNav.classList.add('open');
      body.style.overflow = 'hidden';
      zoneHidden.style.zIndex = '-1';
      return hint = 0;
    }
    else {
      logoMain.style.display = 'block';
      navBarOptionLeft.style.display = 'inline-block';
      navBarOptionRight.style.display = 'inline-block';
      logoMinor.style.display = 'none';
      lineOne.style.transform = 'initial';
      lineThree.style.transform = 'initial';
      overlay.classList.remove('show'); 
      superNav.style.display = 'none';
      superNav.classList.remove('open');
      body.style.overflow = 'initial';
      zoneHidden.style.zIndex = '20';
      return hint = 1;
    }
  }
}; menuShow();

function searchLocation() {
  const store = document.querySelector('.store-locator');
  const searchItem = document.querySelector('.search-item');
  const searchLocation = document.querySelector('.search-location');
  const coverMain = document.querySelector('.cover-main');
  const input = document.querySelector('.store-locator-form-input input[type=text]');
  const subMitBtn = document.querySelector('.store-locator-form-input input[type=submit]');
  const exitBtn = document.querySelector('.store-locator-exit');
  const header = document.querySelector('.header');
  const body = document.querySelector('body');
  const theGear = document.querySelector('.the-gear');
  const theRide = document.querySelector('.the-ride');
  const theBrand = document.querySelector('.the-brand ');
  const underline = document.querySelectorAll('.header__navbar-item');
  const overlay = document.querySelector('.overplay');
  var isLocation = true;
  
  searchLocation.onclick = ()=>{
    overlay.classList.add('show');
    store.style.display = 'block';
    header.style.display = 'none';
    body.style.overflow = 'hidden';
    isLocation = !isLocation;
  }
  
  exitBtn.onclick = (e) => {
    e.preventDefault();
    overlay.classList.remove('show');
    coverMain.style.display = 'none';
    store.style.display = 'none';
    header.style.display = '';
    body.style.overflow = '';
    isLocation = !isLocation;
    theGear.style.display = 'none';
    theRide.style.display = 'none';
    theBrand.style.display = 'none';
    if(param === 0){
      underline[0].classList.remove('bonus');
    } else if(param === 1){
      underline[1].classList.remove('bonus');
    } else {
      underline[2].classList.remove('bonus');
    }
  }
 
  input.oninput = (e) => {
    var locationName = e.target.value;
    if(locationName.length >= 3) {
      subMitBtn.style.opacity = '1';
      subMitBtn.style.transform = 'translateX(0) scale(1)';
    } else {
      subMitBtn.style.opacity = '0';
      subMitBtn.style.transform = '';
    }
  }
} searchLocation();

function searchItem() {
  const itemStore = document.querySelector('.search');
  const searchItem = document.querySelector('.search-item');
  console.log(searchItem);
  const coverMain = document.querySelector('.cover-main');
  const input = document.querySelector('.search-form-input input[type=text]');
  const subMitBtn = document.querySelector('.search-form-input input[type=submit]');
  const exitBtn = document.querySelector('.search-exit');
  const header = document.querySelector('.header');
  const body = document.querySelector('body');
  const theGear = document.querySelector('.the-gear');
  const theRide = document.querySelector('.the-ride');
  const theBrand = document.querySelector('.the-brand ');
  const underline = document.querySelectorAll('.header__navbar-item');
  const overlay = document.querySelector('.overplay');

  searchItem.onclick = ()=>{
    overlay.classList.add('show');
    itemStore.style.display = 'block';
    header.style.display = 'none';
    body.style.overflow = 'hidden';
  }
  
  exitBtn.onclick = (e) => {
    e.preventDefault();
    overlay.classList.remove('show');
    coverMain.style.display = 'none';
    itemStore.style.display = 'none';
    header.style.display = '';
    body.style.overflow = '';
    theGear.style.display = 'none';
    theRide.style.display = 'none';
    theBrand.style.display = 'none';
    if(param === 0){
      underline[0].classList.remove('bonus');
    } else if(param === 1){
      underline[1].classList.remove('bonus');
    } else {
      underline[2].classList.remove('bonus');
    }
  }
 
  input.oninput = (e) => {
    var locationName = e.target.value;
    if(locationName.length >= 3) {
      subMitBtn.style.opacity = '1';
      subMitBtn.style.transform = 'translateX(0) scale(1)';
    } else {
      subMitBtn.style.opacity = '0';
      subMitBtn.style.transform = '';
    }
  }
} searchItem();