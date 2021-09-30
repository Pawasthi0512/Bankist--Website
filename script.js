'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo=document.querySelector('.btn--scroll-to');
const section1=document.querySelector('#section--1');
const nav=document.querySelector('.nav');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});


//////////////////////////////////////////////
//////////////////////////////////////////////
/////////////////////////////////////////////
//........................................selection of elements...........................................
// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.body);

const header=document.querySelector('.header');
const allSelect=document.querySelectorAll('.section');//it will give a node list of all element.

// console.log(document.getElementById('section--1'))
const allButton=document.getElementsByTagName('button')//it will return html live selection.
// console.log(document.getElementsByClassName('btn'))//it will return html live selection.
// console.log(header);
// console.log(allButton);

//........creating HTML Elements using javaScript........
const message=document.createElement('div');
message.classList.add('cookie-message');
// message.textContent='We are using cookies to recommend songs <button class="btn btn--close-cookie">"Got It!"</button>'
message.innerHTML='We are using cookies to recommend songs <button class="btn btn--close-cookie">"Got It!"</button>'
// console.log(message);

//........inserting HTML Elements............
// header.prepend(message);//it will insert this element as first child of header
header.append(message);// it will insert this element as last child of header.
// header.append(message.cloneNode(true))//it will clone this message class so that message can be shown multiple places.

// header.before(message);//It will insert 'message' class as sibling before header.
// header.after(message);//It will insert 'message' class as sibling after header.

document.querySelector('.btn--close-cookie').addEventListener('click',function(){
  message.remove();
})
//.......................Implementation of Smooth scrolling..................................................
btnScrollTo.addEventListener('click',function(e){
  e.preventDefault();

  const s1Coords=section1.getBoundingClientRect();//this will return coordinates of section .
  // console.log(s1Coords);
  // console.log(window.pageXOffset,window.pageYOffset);
  // window.pageYOffset// this is height which has been scrolled above from viewPort top.

  // window.scrollTo({
  //   left:s1Coords.left+window.pageXOffset,
  //   top:s1Coords.top+window.pageYOffset,
  //   behavior:'smooth',
  // })

  // other way
  section1.scrollIntoView({behavior: 'smooth'});
})
//...........................................................................................................

//..........................................................................................................


//.................Work with Styles ,attribute and classes..................................................
/*
///////////styles/////////
message.style.backgroundColor='#37383d';
message.style.width='120%';

console.log(message.style.backgroundColor)
console.log(message.style.width);
console.log(message.style.color);//we can't access css elements using style in javaScript.

console.log(getComputedStyle(message).color)//accessing css property which are defined in style.css file.
message.style.height=Number.parseInt(getComputedStyle(message).height,10) + 27 + 'px';
// console.log(message.style.height);
// console.log(getComputedStyle(message).height);
// document.documentElement.style.setProperty('--color-primary', 'orangeRed')

//////////attributes///////////
const logo=document.querySelector('.nav__logo');
console.log(logo.className);//access standard attributes
console.log(logo.alt);
console.log(logo.src);
console.log(logo.getAttribute('src'));

logo.alt='A fine Bank web';// setting standard attributes.
console.log(logo.alt);

console.log(logo.getAttribute('designer'));//accessing non standard attributes
logo.setAttribute('designer','Puneet');//setting value and defining attributes
console.log(logo.getAttribute('designer'));

//////////Classes////////////
// logo.classList.add()
// logo.classList.remove()
// logo.classList.toggle()
// logo.classList.contains()
*/
//..........................................................................................................



//.......................Bubbling in eventListener...........................................................
//rgb(255,255,255)
// const randomColor= (min,max)=>Math.floor((Math.random()*(max-min)+1)+min);
// console.log(randomColor(0,255));
// document.querySelector('.nav__link').addEventListener('click',function(e){
//   this.style.backgroundColor=`rgb(${randomColor(0,255)}, ${randomColor(0,255)},${randomColor(0,255)})`;
// })
// document.querySelector('.nav__links').addEventListener('click',function(e){
//   this.style.backgroundColor=`rgb(${randomColor(0,255)}, ${randomColor(0,255)},${randomColor(0,255)})`;
// })
// document.querySelector('.nav').addEventListener('click',function(e){
//   this.style.backgroundColor=`rgb(${randomColor(0,255)}, ${randomColor(0,255)},${randomColor(0,255)})`;
// })
//...........................................................................................................


//.......................Traversing DOM Tree...........................................................
// const h1=document.querySelector('h1');
////////////Going downwards
// console.log(h1.querySelectorAll('.highlight'));
// console.log(h1.childNodes);
// console.log(h1.children);
// console.log(h1.firstElementChild);
// console.log(h1.lastElementChild);

//////////Going Upwards
// console.log(h1.parentNode);
// console.log(h1.parentElement);
// console.log(h1.closest('header'));


// ///////////going sidewise
// console.log(h1.previousElementSibling);
// console.log(h1.nextElementSibling);
//......................................................................................................


//................Building Tab components...............................................................
const tabs=document.querySelectorAll('.operations__tab');
const tabsContainer=document.querySelector('.operations__tab-container');
const tabsContent=document.querySelectorAll('.operations__content');

tabsContainer.addEventListener('click', function(e){
  const clicked=e.target.closest('.operations__tab');
  console.log(clicked);
  //if we click to empty place of operations__tab--container then clicked 
  // will return null so avoid this error  return function without doing any operation.
  if(!clicked) return;
  // it will stores all tab to their base positions and activating clicked tab;
  tabs.forEach(t=>t.classList.remove('operations__tab--active'));
  clicked.classList.add('operations__tab--active');
  // it will stores tabs content and show content of active tab;
  console.log(clicked.dataset.tab);
  tabsContent.forEach(c=>c.classList.remove('operations__content--active'));
  document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add('operations__content--active');
  // clicked.classList.add('operations__content--active');
});
//......................................................................................................


//.................fading out links in navigation bar..................................................
const handelHover = function(e,opacity){
  if(e.target.classList.contains('nav__link')){
    const link=e.target;
    const sibling=e.target.closest('.nav').querySelectorAll('.nav__link');
    const logo=e.target.closest('.nav').querySelector('img');
    sibling.forEach(function(el){
      if(el!==link) el.style.opacity=opacity;
    })
    logo.style.opacity=opacity;
  }
}
nav.addEventListener('mouseover',function(e){
  handelHover(e,0.5);
})
nav.addEventListener('mouseout',function(e){
  handelHover(e,1);
})

//.....................................................................................................



//...................Adding sticky  navigation to web page.............................................
window.addEventListener('scroll',function(e){
  const s1Coords=section1.getBoundingClientRect();
  // console.log(window.scrollY);
  // console.log(s1Coords);
  if(window.scrollY>s1Coords.top){
    nav.classList.add('sticky');
  }
  else{
    nav.classList.remove('sticky');
  }
});
//.....................................................................................................


//.................lazy section revealing..............................................................
const allSections=document.querySelectorAll('.section');
const revealSection=function(entries,observer){
  const [entry]=entries;
  if(!entry.isIntersecting) return;
  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
}
const sectionObserver=new IntersectionObserver(revealSection,{
  root:null,
  threshold:.15,
});
allSections.forEach(function(section){
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
})
//.....................................................................................................

//......................lazy Image loading.............................................................
//this is very important concept because it will increase website speed.
const imgTargets=document.querySelectorAll('img[data-src]');
const lazyLoad=function(entries,observer){
  const [entry]=entries;
  // console.log(entry);
  if(!entry.isIntersecting) return;

  entry.target.src=entry.target.dataset.src;
  entry.target.addEventListener('load',function(){
    entry.target.classList.remove('lazy-img');
  });
  observer.unobserve(entry.target);
}
const imgObserver=new IntersectionObserver(lazyLoad,{
  root:null,
  threshold:0,
  rootMargin:'200px',
})
imgTargets.forEach(img=>imgObserver.observe(img));
//.....................................................................................................



//...........................implementing slider functionality.........................................
 // This is really cool feature when we click arrow then it will show different content
const slides=document.querySelectorAll('.slide');
const btnRight=document.querySelector('.slider__btn--right');
const btnLeft=document.querySelector('.slider__btn--left');
const slider=document.querySelector('.slider');
const dotContainer=document.querySelector('.dots');
const dots=document.querySelectorAll('.dots__dot');
// function for creating dots
const createDots=function(){
  slides.forEach(function(_,i){
    dotContainer.insertAdjacentHTML('beforeend',
    `<button class='dots__dot' data-slide=${i}></button>`);
  })
}
// slider.style.transform='scale(20%)';
// slider.style.overflow='visible';
let curSlide=0;
const maxSlide=slides.length;
// generating a function which will show current slide at middle.
const moveSlide=function(curSlide){
  slides.forEach(function(s,i){
    s.style.transform=`translateX(${100*(i-curSlide)}%)`;
  })
}
const activeDot=function(slide){
  document.querySelectorAll('.dots__dot').forEach(dot=>dot.classList.remove('dots__dot--active'));

  // console.log(slide);
  // console.log(document.querySelector('.dots__dot'))
  document.querySelector(`.dots__dot[data-slide="${slide}"]`).classList.add('dots__dot--active');
}
//function for moving slides to forward.
const nextSlide=function(){
  if(curSlide===maxSlide-1)
    curSlide=0;
  else
    curSlide++;
  moveSlide(curSlide);
  activeDot(curSlide);
}

// move slides to previous slides
const prevSlide=function(){
  if(curSlide===0)
  curSlide=maxSlide-1;
else
  curSlide--;
moveSlide(curSlide);
activeDot(curSlide);
}
const init=function(){
  createDots();
  moveSlide(0);
  activeDot(0);
}
init();
// to move slides to right
btnRight.addEventListener('click',nextSlide)
// to move slides to left
btnLeft.addEventListener('click',prevSlide)

////////////////////////////// implementing dots and arrow key for slider//////////////////////////////
document.addEventListener('keydown',function(e){
  // console.log(e.key);
  if(e.key ==='ArrowLeft') prevSlide();
  e.key === 'ArrowRight' && nextSlide();
});

dotContainer.addEventListener('click',function(e){
  if(e.target.classList.contains('dots__dot')){
    const {slide}=e.target.dataset;
    console.log(slide);
    moveSlide(slide);
    activeDot(slide);
  }
})



//////////////////////////////////////////////////////////////////////////////////////////////////////
//.....................................................................................................