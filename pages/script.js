let bntNext = document.querySelector('.next');
let bntBack = document.querySelector('.back');

let container = document.querySelector('.container');
let list = document.querySelector('.container .list');
let card = document.querySelector('.container .card');

function MoveItens(type){
    let ListItens = document.querySelectorAll(".list .list-itens");
    let CardItens = document.querySelectorAll(".card .card-itens");

    if(type === 'next'){
        card.appendChild(CardItens[0]);
        list.appendChild(ListItens[0]);
        container.classList.add('next')
    }
    else{
        list.prepend(ListItens[ListItens.length - 1]);
        card.prepend(CardItens[CardItens.length - 1]);
        container.classList.add('back')
    }

    setTimeout(() => {
        container.classList.remove('next');
        container.classList.remove('back');
    }, 600);
}

