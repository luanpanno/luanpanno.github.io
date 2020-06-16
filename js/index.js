(function(){
    const header = document.querySelector('header');
    const nav = document.querySelector('nav');
    const navLink = document.querySelectorAll('nav li a');
    const burger = document.querySelector('.burger');

    const formInput = document.querySelector('form .inputs');
    const btnFormSubmit = document.querySelector('.btn-submit');

    AOS.init();
    typewriter();

    // Script para manter o ano do footer sempre atualizado
    document.querySelector('.date').innerHTML = new Date().getFullYear();

    navLink.forEach(link => {
        link.onclick = e => {
            if(nav.classList.contains('active')){
                nav.classList.remove('active');
            }
        }
    })

    burger.onclick = e => {
        nav.classList.toggle('active');

        if(document.documentElement.scrollTop == 0 && !header.classList.contains('scrollable') && nav.classList.contains('active')){
            header.classList.add('scrollable');
        } else if(document.documentElement.scrollTop == 0 && header.classList.contains('scrollable') && !nav.classList.contains('active')){
            header.classList.remove('scrollable');
        }
    }

    document.onscroll = () => {
        if(document.documentElement.scrollTop > 0){
            header.classList.add('scrollable');
        } else{
            if(nav.classList.contains('active')){
                header.classList.add('scrollable');
            } else{
                header.classList.remove('scrollable');
            }
        }
    }

    // Previne que não envie o formulário faltando algum dado
    btnFormSubmit.onclick = e => {
        for(let input of formInput.children){
            if(!input.hasAttribute('required')){
                if(input.value == ''){
                    e.preventDefault();
                    alert('Um ou mais campos do formulário estão vazios.');
                    return;
                }
            }
        }
    }

    function typewriter(){
        const texts = ['Desenvolvedor Front-End'];
        let count = 0;
        let index = 0;
        let currentText = '';
        let letter = '';
        
        function type(){
            if(count === texts.length){
                count = 0;
            }
            currentText = texts[count];
            letter = currentText.slice(0, ++index);
            
            document.querySelector('.typewritter').textContent = letter;
            setTimeout(type, 200);
        }
        
        type();
    }
})();