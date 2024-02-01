// const ham = document.querySelector('#ham');
// ham.addEventListener('click',() => {
//     ham.classList.toggle("active");
// });

const but = document.querySelector('.switch');
const body = document.querySelector('body');
but.addEventListener('click', () => {
    if(but.textContent === 'dark'){
        but.textContent = 'light'
        body.style['background-color'] = 'white';
    }
    else{
        but.textContent = 'dark'
        body.style['background-color'] = 'rgb(53, 48, 48)';
    }
})