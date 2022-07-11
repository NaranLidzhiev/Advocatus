'use strict';

const but = document.querySelector('.button'),
      modal = document.querySelector('.modal'),
      cross = document.querySelectorAll('.modal_close'),
      dialog = document.querySelector('.modal_dialog'),
      modalthanks = document.querySelector('.modal_thanks'),
      buts = document.querySelectorAll('.dot'),
      clients = document.querySelectorAll('.cphoto'),
      textcon = document.querySelectorAll('.reviewcontent'),
      signs = document.querySelectorAll('.sign'),
      question = document.querySelectorAll('.question'),
      content = document.querySelectorAll('.content1');
let   username = document.querySelector('.modal_content1'),
      phone = document.querySelector('.modal_content2');

function showModal(){
    modal.classList.remove('hide');
    modal.classList.add('show');
    modal.classList.add('fade');
}

function hideModal(){
    modal.classList.remove('show');
    modal.classList.remove('fade');
    modal.classList.add('hide');
    
}

function hideModalThanks(){
    modalthanks.classList.remove('show');
    modalthanks.classList.remove('fade');
    modalthanks.classList.add('hide');
}

function showModalThanks(){
    modalthanks.classList.remove('hide');
    modalthanks.classList.add('show');
    modalthanks.classList.add('fade');
}

function newLocalData(){
    let dataname = JSON.stringify(username.value);
    localStorage.setItem('username' , dataname);
    let dataphone = JSON.stringify(phone.value);
    localStorage.setItem('phone', dataphone);
}

function getLocalData(){
    if (localStorage.getItem('username')){
        username.value = JSON.parse(localStorage.getItem('username'));
    }
    if (localStorage.getItem('phone')){
        phone.value = JSON.parse(localStorage.getItem('phone'));
    }
}

but.addEventListener('click', ()=>{
    showModal();
    hideModalThanks();
    dialog.classList.remove('hide');
    getLocalData();
});

cross.forEach((e)=>{
    e.addEventListener('click', ()=>{
        hideModal();
    });
});

modal.addEventListener('submit', ()=>{

    dialog.classList.add('hide');
    showModalThanks();
    setTimeout(hideModal, 2300);
    newLocalData();
  });


  
function showTabContent(i = 0){
    clients[i].classList.add('show');
    clients[i].classList.add('fade');
    clients[i].classList.remove('hide');
    textcon[i].classList.add('show');
    textcon[i].classList.remove('hide');
 }
 
 function hideTabContent(){
     clients.forEach(e=>{
         e.classList.add('hide');
     });
     textcon.forEach(e=>{
        e.classList.add('hide');
    });
 }
 

hideTabContent();
showTabContent();

buts.forEach(item=>{
    item.addEventListener('click', ()=>{
        buts.forEach((e,i)=>{
            e.innerHTML = '<i  class="far fa-circle"></i>';
            if( e == item){
                hideTabContent();
                showTabContent(i);
            }
        });
          item.innerHTML = '<i  class="fas fa-circle"></i>';    
    });
    
    
});

function hideFaqContent(){
    content.forEach(e=>{
        e.classList.add('hide');
        e.classList.remove('show');
        e.classList.remove('fade');
    });
    signs.forEach((e)=>{
        e.innerHTML = '<i class="fas fa-plus">';
        e.classList.remove('sign1');
        e.classList.add('sign');
    });
    question.forEach(e=>{
        e.classList.remove('question1');
        e.classList.add('question');
    });
}

function showFaqContent(i=0){
    content[i].classList.add('show');
    content[i].classList.add('fade');
    content[i].classList.remove('hide');
    signs[i].innerHTML = '<i class="fas fa-minus">';
    question[i].classList.remove('question');
    question[i].classList.add('question1');
    signs[i].classList.remove('sign');
    signs[i].classList.add('sign1');
}
hideFaqContent();
showFaqContent();

signs.forEach(item=>{
    item.addEventListener('click', ()=>{
        signs.forEach((e,i)=>{
            if (e== item){
                hideFaqContent();
                showFaqContent(i);
            }
        });
    });
});
// for(let i = 0; i < buts.length; i++){
//     buts[i].addEventListener('click', ()=>{

//     })
// }


