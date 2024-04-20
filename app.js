const area = document.getElementById('area');
const cell = document.getElementsByClassName('cell');
const currentPlayer = document.getElementById('curPlyr');

let player = 'X';

let moveCount = 0;

let stats = {
    x: 0,
    o: 0,
    d: 0
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

        if (cell[i].innerHTML == 'X') {
            takenByX.push(parseInt(cell[i].getAttribute('pos')));


        } else if (cell[i].innerHTML == 'O') {
            takenByO.push(parseInt(cell[i].getAttribute('pos')));

        }
    }
}

function cellClick(){
    if(!this.innerHTML){
        this.innerHTML = player;
        takenPositions();
        player = player === 'X' ? 'O' : 'X';
        currentPlayer.textContent = player;
        checkForWin();
        moveCount++;
    } else {
        alert("This cell is taken");
        return;
    }
}


function checkForWin(){

    let win = false;

    for(let i = 0; i < winInd.length; i++) {
        if(winInd[i].every(pos => takenByX.includes(pos))) {
            setTimeout(() => {
                alert("X player won");
                stats.x += 1;
                updateStat()
                restartGame();
            }, 100);
            win = true;
            break;
        } else if(winInd[i].every(pos => takenByO.includes(pos))) {
            setTimeout(() => {
                alert("O player won");
                stats.o += 1;
                updateStat()
                restartGame();
            }, 100);
            win = true;
            break;
        }
    }
}

function restartGame() {
    for (let i = 0; i < cell.length; i++) {
        cell[i].innerHTML = '';
    }
    takenByX = [];
    takenByO = [];
    player = 'X'; // Reset to default starting player
    currentPlayer.textContent = player;
    moveCount = 0; // Reset move count here
}

function updateStat() {
    document.getElementById('sX').innerHTML = stats.x;
    document.getElementById('sO').innerHTML = stats.o;
    document.getElementById('sD').innerHTML = stats.d;
}