let boxes = document.querySelectorAll(".box");
let menu = document.querySelector(".menu");
let text = document.querySelector("#text");
let btn = document.querySelector("#btn");
let player = "X";
let cells = Array(9).fill(null);

const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5], 
    [6, 7, 8], 
    [0, 3, 6], 
    [1, 4, 7], 
    [2, 5, 8], 
    [0, 4, 8], 
    [2, 4, 6]  
];

function checkwin(cell){
    cells[cell] = player;

    for(const [a, b, c] of winningCombinations){

        if(cells[a] == player && cells[b] == player && cells[c] == player){
            menu.style.display = "block";
            if(player == 'X'){
                player = "O";
                text.textContent = `Player ${player} wins!`;
            }
            else if(player == "O"){
                player = "X";
                text.textContent = `Player ${player} wins!`;
            }
            btn.addEventListener("click", () => {
                menu.style.display = "none";
                location.reload();
            })
        }
    }   
}

function playerselect(box){
    let img = box.querySelector("img");
    cell = parseInt(box.id.replace('c', ''))
    let alt = img.alt

    if (alt != ""){
            return;
        }
        console.log(cell)
        if(player == 'X'){
            player = "O";
            img.src = 'img/X.png';
            img.style = "width: 70px; height: 70px;";
            img.alt = 2;
        }
        else if(player == "O"){
            player = "X";
            img.src = 'img/O.png';
            img.style = "width: 70px; height: 70px;";
            img.alt = 1;
        }
           
}

boxes.forEach((box, index) => {
    box.addEventListener("click", () => { //box уже разделенные boxes
        playerselect(box);
        checkwin(cell);
    })
})
