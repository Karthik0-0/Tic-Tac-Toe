let O = true;
const button = document.querySelectorAll(".btn");
const turn = document.querySelector(".turn");
const pop = document.querySelector(".pop");
const btnid = Array.from(button);
let poss = [0, 1, 2, 3, 4, 5, 6, 7, 8];

let win = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

let i = 0;
let gameOver = false;

button.forEach(element => {
    element.addEventListener("click", () => {
        if (element.textContent != "" || gameOver) { 
            return;
        }
        if (O) {
            element.textContent = "O";
            O = false;
            turn.textContent = "Computer turn";
            checkWin();
            if (!gameOver) { 
                setTimeout(com, 500);
            }
        } else {
            element.textContent = "X";
            O = true;
            turn.textContent = "Player turn";
            checkWin();
        }
        removele(element);
        checkdraw();
    });
});

function checkWin() {
    i++;
    for (let ele of win) {
        let p1 = button[ele[0]].textContent;
        let p2 = button[ele[1]].textContent;
        let p3 = button[ele[2]].textContent;
        if (p1 !== "" && p2 !== "" && p3 !== "") {
            if (p1 === p2 && p2 === p3) {
                gameOver = true; 
                if (!O) {
                    turn.textContent = "Player Wins";
                    pop.textContent = "Player Wins";
                } else {
                    turn.textContent = "Computer Wins";
                    pop.textContent = "Computer Wins";
                }
                setTimeout(()=>
                    pop.style.display = "block"
                ,500);
                setTimeout(restart, 1000);
                return; 
            }
        }
    }
}

function checkdraw() {
    if (i === 9 && !gameOver) { 
        turn.textContent = "Draw";
        pop.textContent = "Draw";
        pop.style.display = "block";
        setTimeout(restart, 1000);
    }
}

function restart() {
    // location.reload();
    button.forEach(ele => {
        i = 0;
        O = true;
        gameOver = false; 
        pop.style.display = "none";
        turn.textContent = "Player turn";
        ele.textContent = "";
    })
    poss = [0, 1, 2, 3, 4, 5, 6, 7, 8];
}

function removele(ele) {
    let ind = btnid.indexOf(ele);
    let posind = poss.indexOf(ind);
    poss.splice(posind, 1);
    console.log(poss);
}

function com() {
    if (poss.length == 0 || gameOver) return;
    let ran = Math.floor(Math.random() * poss.length);
    console.log(ran);
    let mov = poss[ran];
    button[mov].click();
}
