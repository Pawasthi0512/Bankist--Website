'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

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
//..........selection of elements............
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
console.log(message);

//........inserting HTML Elements............
// header.prepend(message);//it will insert this element as first child of header
header.append(message);// it will insert this element as last child of header.
// header.append(message.cloneNode(true))//it will clone this message class so that message can be shown multiple places.

// header.before(message);//It will insert 'message' class as sibling before header.
// header.after(message);//It will insert 'message' class as sibling after header.

document.querySelector('.btn--close-cookie').addEventListener('click',function(){
  message.remove();
})