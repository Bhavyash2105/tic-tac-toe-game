let btns=document.querySelectorAll(".box");  
let resetbtn=document.querySelector(".reset");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let restartbtn=document.querySelector("#restartgame");    //accessing all id and class
let playO=true; //first turn of player O
let win=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];     //winning cases acc. to tictactoe boxes

let click=0;
btns.forEach((b)=>{     //doing action to each button
    b.addEventListener("click",()=>{
        if(playO===true){
            b.innerText="O";
            playO=false;
            b.style.color="brown";
        }
        else{
            b.innerText="X";
            playO=true;
            b.style.color="blue";
        }
        b.disabled=true;  //so that button is disabled and innertext is not changed 
        click++;  
        console.log(click); 
        checkwin();
    });
});

function resetgame(){   
    playO=true;
    enableboxes();
    msgcontainer.classList.add("hide");
    click=0; //so the count starts from 1 again(if not then it continues to 10, 12, 13...)
}

function enableboxes(){
    for(let i of btns){
        i.disabled=false;
        i.innerText="";
    }
}

function disableboxes(){
    for(let i of btns){
        i.disabled=true;
    }
}

function showwin(winner){
    msg.innerText=`Congratulations, winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableboxes();
}

function checkwin(){
    for (let i of win){
        let pos1=btns[i[0]].innerText;
        let pos2=btns[i[1]].innerText;
        let pos3=btns[i[2]].innerText;
        if(pos1!="" && pos2!="" && pos3!=""){
            if(pos1===pos2 && pos2===pos3){
                if(click===9){
                    showwin(pos1);
                }
                else if(click!=9){
                    showwin(pos1);
                } 
            }
            else{
                if(click===9){
                    msg.innerText="Draw";
                    msgcontainer.classList.remove("hide");
                }
            }
        }
    }
}

restartbtn.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);

