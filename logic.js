let boxes = document.querySelectorAll(".box");

let resetbtn = document.querySelector(".reset");

let newgamebtn = document.querySelector(".new-btn");

let msgcont  = document.querySelector(".msgcont");

let msg = document.querySelector(".msg");

let turno = true;//playerx,playery

let cnc = document.querySelector(".chance");

let count = 0 ;


const winpattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],

];


let draw = ()=>{
    if (click ) {
        
    }
}


const resetgame = ()=>{
    turno = true;
    enableboxes();
    msgcont.classList.add("hide");
    cnc.classList.remove("chance");
    count = 0;
}

boxes.forEach((box) => {

    box.addEventListener("click", () => {
        
        if (turno) {
            box.innerHTML = "O";
            turno = false;
           cnc.innerText = "ITS X TURN"
           
        } else {
            box.innerHTML = "X";
            turno = true;
            cnc.classList.add("chance")
            cnc.innerText = "ITS O TURN"
        }
        box.disabled = true;
        count++;

        let iswinner = checkwinner();

        if (count===9 && !iswinner) {

            gamedraw();
        }

        checkwinner();
    });
});

const gamedraw = () =>{

    msg.innerText = `game was draw`;
    msgContainer.classList.remove("hide");
    disableBoxes();
  };


const disableboxes =  ()=>{
    for(let box of boxes){
        box.disabled = true;
    }
}
const enableboxes =  ()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText="";
    }
}


const showwinner = (winner)=>{
    msg.innerText = `congratulations,winner is ${winner}`;
    msgcont.classList.remove("hide");
    disableboxes();
}
 const checkwinner = () => {

    for (  let pattern of winpattern )
        {
            let pos1val = boxes[pattern[0]].innerHTML;
            let pos2val = boxes[pattern[1]].innerHTML;
            let pos3val = boxes[pattern[2]].innerHTML;

            if (pos1val != "" && pos2val !="" && pos3val != "") {
                if (pos1val===pos2val && pos2val===pos3val) {
                    showwinner(pos1val);
                }
            }
    }



 }

 newgamebtn.addEventListener("click",resetgame);
 resetbtn.addEventListener("click",resetgame);