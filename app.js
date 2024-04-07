const area = document.getElementById('area');
const cell = document.getElementsByClassName('cell');
const currentPlayer = document.getElementById('curPlyr');

let player = x;

let data =[];

const winInd = [[1,2,3],
    [4,5,6],
    [7,8,9],
    [1,4,7],
    [2,5,8],
    [3,6,9],
    [1,5,9],
    [3,5,7]];
