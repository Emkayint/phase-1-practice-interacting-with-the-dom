
let counter = document.querySelector('#counter')
let counterValue = parseInt(counter.innerHTML)



function counterFunc(){
    counter.innerHTML = counterValue += 1;
}

let intervals = setInterval(counterFunc, 1000)


// Manually add counter 
let add = document.querySelector("#plus")
let subtract = document.querySelector("#minus")
let heartbtn = document.querySelector("#heart")
let pausebtn = document.querySelector("#pause")

add.addEventListener("click", addManually)
subtract.addEventListener('click', subtractManualy)
pausebtn.addEventListener('click', btnCall);

function addManually(){
    counter.innerHTML = counterValue +=1;
}

function subtractManualy(){
    counter.innerHTML = counterValue -= 1;
}






let anArray = []
let counter2  = 0;
let setTime = 0;


function callCounter(){
    if(setTime === 0){
        setTime = counterValue;
        counter2 += 1
    }else if( counterValue !== setTime){

        likesSet()

        setTime = 0;
        anArray = [];
        counter2 = 0;
    } else if(counterValue === setTime){
        anArray.push(counter2 += 1)
    }
    
}
function likesSet(){
    let likes = document.querySelector('.likes')
    let li = document.createElement('li')
    li.innerHTML = `${setTime} has been liked ${anArray[anArray.length - 1]} time`
    likes.appendChild(li)
}

heartbtn.addEventListener('click', callCounter)
// if(parseInt(counter) === counterValue){
//     heartbtn.addEventListener("click", callCounter)
//     console.log(anArray)
// } else if(counter === counterValue - 1) {
//     console.log(anArray[anArray.length-1])
// }


//get comments

let myForm = document.querySelector("form");
myForm.addEventListener("submit", getComment)
let myInput = document.querySelector("#comment-input");
let comments = document.querySelector('#list')

function getComment(e){
    e.preventDefault()
    let p = document.createElement('p');
    p.innerHTML = `${myInput.value}`
    comments.appendChild(p)
    myInput.value = "";
}

function btnCall(){
    if(pausebtn.innerText === "pause"){
        ResetIntervals()
        add.setAttribute('disabled', "")
        subtract.setAttribute('disabled', "")
        heartbtn.setAttribute('disabled', "")
        pausebtn.innerHTML = 'resume'
    }
    else if(pausebtn.innerHTML === 'resume'){
        ResetIntervals()
        add.removeAttribute('disabled', "")
        subtract.removeAttribute('disabled', "")
        heartbtn.removeAttribute('disabled', "")
        pausebtn.innerHTML = 'pause'
        intervals = setInterval(counterFunc, 1000)
        
    }
}

function ResetIntervals(){
    clearInterval(intervals)
}