// var navi = document.querySelector('.navi');
// var navigation = document.querySelector('.navigation')

// navi.addEventListener('click', function(){
//     console.log('This is working');


// });

const menuIcon = document.querySelector('.hamburger-menu');
const navbar = document.querySelector('.navibar')

menuIcon.addEventListener('click', () =>{
    navbar.classList.toggle('change')
})

