// const ham = document.querySelector('#ham');
// ham.addEventListener('click',() => {
//     ham.classList.toggle("active");
// });
    const but = document.querySelector('.switch');
    const body = document.querySelector('body');
    console.log(but)
    but.addEventListener('click', () => {
        if(but.textContent === '🌙'){
            but.textContent = '🌞'
            body.style['background-color'] = 'white';
        }
        else{
            but.textContent = '🌙'
            body.style['background-color'] = 'rgb(53, 48, 48)';
        }
    })