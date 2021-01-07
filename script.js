/********variables**************/
const ansBtns = document.querySelectorAll('.card .ans-btn');
const btns = document.querySelectorAll('.card .btn');
const resultBtn = document.querySelector('.result')
const cards = document.querySelectorAll('.card');
const resultCard = document.querySelector('.card.result-wrap');
const numSpan = document.querySelector('.correct-ans');

let correct = 0;

/************Functions**********/

// check if the clicked button is correct or not 
function check(){
    
    if(this.dataset.correct == 'true'){
        correct++;
    }
    setTimeout( ()=>{
        if(this.dataset.correct !='true'){
            this.style.backgroundColor = 'red';
        }
    },2000);
}

// responsible for the falling animation of the card when a button is pressed
function fall (){
    this.parentElement.style.left = "-150%";
    this.parentElement.style.animation = "card ease-in-out 1s";
    this.parentElement.style.transform = "rotate(-140deg)";
}

// make the final action: display the result + correct answers
function result(){

    this.parentElement.style.display = "none";
    resultCard.style.display = "flex";
    numSpan.innerHTML = correct;

    if(correct >= 15){
        numSpan.style.color = "green";
    }else{
        numSpan.style.color = "red";
    }

    btns.forEach(btn =>{
        if (btn.dataset.correct == 'true'){
            btn.style.backgroundColor = 'green';
        }    
        btn.disabled = 'true';
    });

    cards.forEach(card =>{
        card.classList.add('end');
        card.classList.remove('through');
        card.style.left = "auto";
        card.style.transform = "rotate(0)";
    
    });
}



/**********Events************/

btns.forEach(btn => {
    btn.addEventListener("click",fall);
});

ansBtns.forEach(btn => {
    btn.addEventListener("click",check);
});

resultBtn.addEventListener("click",result);




