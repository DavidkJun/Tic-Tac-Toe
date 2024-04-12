const area = document.getElementById('area');
const cell = document.getElementsByClassName('cell');
const currentPlayer = document.getElementById('curPlyr');

let player = x;

let stats = {
    x: 0,
    o: 0,
    draw: 0
}

let data =[];

let takenByX = [];
let takenByO = [];

const winInd = [[1,2,3],
    [4,5,6],
    [7,8,9],
    [1,4,7],
    [2,5,8],
    [3,6,9],
    [1,5,9],
    [3,5,7]];

for(let i = 1; i <= 9; i++) {
    area.innerHTML += "<div class='cell' pos=" + i + "></div>";
}

for (let i = 0; i < cell.length; i++) {
    cell[i].addEventListener('click', cellClick, false);
}

function takenPositions(){
    for(let i = 0;i < cell.length; i++) {
        if (cell[i].innerHTML == x) {
            takenByX.push(parseInt(cell[i].getAttribute('pos')));
                checkForWin()
        } else {
            if (cell[i].innerHTML == o) {
                takenByO.push(parseInt(cell[i].getAttribute('pos')));
                checkForWin()
            }
        }
    }
}

function cellClick(){
    if(!this.innerHTML){
        this.innerHTML = player;
    }else{
        alert("This cell is taken")
        return
    }
}

function checkForWin(){
    for(let i = 0; i < winInd.length; i++) {
        if(winInd[i].every(pos => takenByX.includes(pos))) {
            stats.x += 1;
            alert("X player won");
            return;
        } else if(winInd[i].every(pos => takenByO.includes(pos))) {
            stats.o += 1;
            alert("O player won");
            return;
        }else{
            "This is draw"
        }
    }
}


