let buttons = document.querySelectorAll('.pattern4');
let redo = document.querySelectorAll('.pattern5');
let ask = document.querySelectorAll('.css-faq');
let answer = document.querySelectorAll('.css-answer');
let line = document.querySelectorAll('hr');
let disappear = function(input){
    input.style.display = 'none';
}

let forButtons = function(one,two,three){
    disappear(buttons[one]);
    appear(redo[one]);
   disappear(ask[two]);
   disappear(ask[three]);
   appear(answer[one]);
   disappear(answer[two]);
   disappear(answer[three]);
   disappear(line[two]);
}

let forRedo = function(one,two,three){
    disappear(redo[one]);
            appear(buttons[one]);
           appear(ask[two]);
           appear(ask[three]);
           disappear(answer[one]);
           disappear(answer[two]);
           disappear(answer[three]);
           appear(line[two]);
}

let appear = function(input){
    input.style.display = 'flex';
}

for(let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener('click',function(){
        let theButton = this;
        if(buttons[0] === theButton){
        forButtons(0,1,2)
        } else if(buttons[1] === theButton){
            forButtons(1,0,2)
    } else {
        forButtons(2,0,1)
        answer[2].style.height = '27.5%';
        answer[2].style.marginBottom = '1rem';
        answer[2].style.marginTop = '-0.9rem';
}
})
}
 for(let i = 0; i < redo.length; i++){
    redo[i].addEventListener('click', function(){
        let theButton = this;
        if(redo[0] === theButton){

        forRedo(0,1,2);
        } else if(redo[1] === theButton){

            forRedo(1,0,2);
    } else {
        forRedo(2,0,1);
}
    })
 }