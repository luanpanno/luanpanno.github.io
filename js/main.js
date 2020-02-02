const anoAtual = document.querySelector('.ano-atual');
const data = new Date();
anoAtual.innerHTML = data.getFullYear();

const headerEl = document.querySelector('header');
const logoHeader = document.querySelector('.logo-header a')
const itemNav = document.querySelectorAll('.item-nav');
const linkItemNavEl = document.querySelectorAll('.item-nav a');

const firstPageEl = document.querySelectorAll('.first-page');

typewritter();

document.onscroll = () => {
    if(document.documentElement.scrollTop == 0){
        headerEl.setAttribute('class', 'noscroll');
    } else{
        headerEl.setAttribute('class', 'onscroll');
    }
}

function typewritter(){
    const texts = ['Desenvolvedor Front-End'];
    let count = 0;
    let index = 0;
    let currentText = '';
    let letter = '';

    function type(){
        if(count === TextDecoderStream.length){
            count = 0;
        }
        currentText = texts[count];
        letter = currentText.slice(0, ++index);

        document.querySelector('.typewritter').textContent = letter;
        // if(letter.length == currentText.length){
        //     count++;
        //     index = 0;
        // }
        setTimeout(type, 200);
    }
    type();
}