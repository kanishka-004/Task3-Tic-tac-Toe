let btns=document.querySelectorAll(".btn");
let reset=document.querySelector("#reset");
let msgbox = document.querySelector(".msg-box");
let msg = document.querySelector("#msg");
let turnO = true;
let count = 0;

let winPattern=[[0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],];
btns.forEach((btn) => {
    btn.addEventListener("click", ()=>{
        if(turnO){
            btn.innerHTML="O";
            console.log(btn);
            turnO = false;
        }
        else{
            btn.innerHTML="X";
            console.log(btn);
            turnO = true;
        }
        btn.disable ="true";
        count++;
        checkWinner();
});
});

const showWinner = (winner) =>{
    msg.innerText =`congrats! Winner is ${winner}`;
    msgbox.classList.remove("hide");

}
const checkWinner = () => {
    for(let pattern of winPattern){
        let pos1val = btns[pattern[0]].innerHTML;
        let pos2val = btns[pattern[1]].innerHTML;
        let pos3val = btns[pattern[2]].innerHTML;
        if(pos1val != "" && pos2val !="" && pos3val !=""){
            if(pos1val === pos1val && pos2val === pos3val){
                showWinner(pos1val);
                return  true;
            }
        }

    }
}