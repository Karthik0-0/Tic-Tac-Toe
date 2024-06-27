let O=true;

const button =document.querySelectorAll(".btn");
const turn=document.querySelector(".turn");
let win=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

var i=0;

button.forEach(element => {
    element.addEventListener("click",()=>{
        if(element.textContent!=""){
            return;
        }
        element.style.padding="1.6rem 0";
        if(O){
            element.textContent="O";
            O=false;
            turn.textContent="Player 2 turn"
        }else{
            element.textContent="X";
            O=true;
            turn.textContent="Player 1 turn"
        }
        checkWin();
    });
});

async function checkWin() {
    i++;
    console.log(i);
    for (let ele of win) {
        let p1 = button[ele[0]].textContent;
        let p2 = button[ele[1]].textContent;
        let p3 = button[ele[2]].textContent;
        if (p1 !== "" && p2 !== "" && p3 !== "") {
            if (p1 === p2 && p2 === p3) {
                if (!O)
                    turn.textContent = "Player 1 Wins";
                else
                    turn.textContent = "Player 2 Wins";
                await delay(1000);
                restart();
            }
        }
    }
    checkdraw();
}

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


async function checkdraw(){
   if(i==9){
        turn.textContent="Draw";
        await delay(1000);
        restart();
   }
}

function restart(){
    button.forEach(ele =>{
        i=0;
        turn.textContent="Player 1 turn";
        ele.textContent="";
        ele.style.padding="4rem 0"
    })
}

