const image = document.querySelector('#images img');
let number;

if(document.body.clientWidth < 480){
    number = 2;
    image.setAttribute('src','./assets/hero'+ number +'.jpg')
} else if(document.body.clientWidth > ){
    number = 1;
    image.setAttribute('src','./assets/hero'+ number +'.jpg')
}