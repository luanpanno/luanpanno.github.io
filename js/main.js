const anoAtual = document.querySelector('.ano-atual');
const data = new Date();
anoAtual.innerHTML = data.getFullYear();

const headerEl = document.querySelector('header');
const logoHeader = document.querySelector('.logo-header a')
const itemNav = document.querySelectorAll('.item-nav');
const linkItemNavEl = document.querySelectorAll('.item-nav a');

const firstPageEl = document.querySelectorAll('.first-page');

document.onscroll = () => {
    if(document.documentElement.scrollTop == 0){
        navStyle('100px', 'white', 'transparent', false);
        linkItemNavEl.forEach(a => {
            navHover(a, 'white');
        });
    } else{
        navStyle('80px', '#00E69D', 'white', true);
        linkItemNavEl.forEach(a => {
            navHover(a, '#00E69D');
        });
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

function navStyle(height, textColor, bgColor, scrolled){
    headerEl.style.height = height;
    headerEl.style.backgroundColor = bgColor;
    headerEl.style.transition = '400ms';
    logoHeader.style.color = textColor;
    linkItemNavEl.forEach(item => {
        item.style.color = textColor;
        item.style.border = 'none';
    })
    if(scrolled == true){
        headerEl.style.boxShadow = '0px 1px 10px 0px rgba(0, 0, 0, .4)';
        headerEl.style.zIndex = '2';
        document.querySelector('.container').style.overflowY = 'initial'
    } else{
        headerEl.style.boxShadow = 'none';
    }
}

function navHover(element, color){
    element.onmouseover = () => {
        element.style.borderBottom = `1px solid ${color}`;
        element.style.transition = 'border 200ms';
    }
    element.onmouseout = () => {
        element.style.borderBottom = 'none';
    }
}

typewritter();