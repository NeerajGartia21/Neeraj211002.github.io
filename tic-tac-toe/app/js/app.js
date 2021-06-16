let Winning = [
    ["1", "2", "3"],
    ["2", "5", "8"],
    ["4", "5", "6"],
    ["3", "6", "9"],
    ["7", "8", "9"],
    ["1", "4", "7"],
    ["1", "5", "9"],
    ["3", "5", "7"],
];
let currentX = [];
let currentO = [];
let remaining = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
let turn;

html = `       <div onclick="vsComputer(this);" style="color: transparent;" class="box" id="1">1</div>
<div onclick="vsComputer(this);" style="color: transparent;" class="box" id="2">2</div>
<div onclick="vsComputer(this);" style="color: transparent;" class="box" id="3">3</div>
<div onclick="vsComputer(this);" style="color: transparent;" class="box" id="4">4</div>
<div onclick="vsComputer(this);" style="color: transparent;" class="box" id="5">5</div>
<div onclick="vsComputer(this);" style="color: transparent;" class="box" id="6">6</div>
<div onclick="vsComputer(this);" style="color: transparent;" class="box" id="7">7</div>
<div onclick="vsComputer(this);" style="color: transparent;" class="box" id="8">8</div>
<div onclick="vsComputer(this);" style="color: transparent;" class="box" id="9">9</div>`;

function chooseTurn(target){
turn=target.innerText;
document.getElementById('Turn').innerHTML='';
document.querySelector('.container').innerHTML=html;
if(turn=='Computer'){
    let nextO = document.getElementById('1');
    currentO.push(nextO.id);
    nextO.innerHTML = "O";
    nextO.style.color = "red";
    remaining.splice(remaining.indexOf(nextO.id), 1);
}
}

function reset() {
    document.querySelector(".container").innerHTML = '';
    document.getElementById('Turn').innerHTML=`choose who will start:
    <button onclick="chooseTurn(this)">Computer</button>
    <button onclick="chooseTurn(this)">Me</button>`;
    currentX=[];
    currentO=[];
    remaining = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
}

function vsComputer(target) {
    target.innerText = "X";
    target.style.color = "red";
    currentX.push(target.id);
    currentX = Array.from(new Set(currentX));
    remaining.splice(remaining.indexOf(target.id), 1);

    if(checkStatus()){
        return;
    }

    let flagO = 0;

    for (let i = 0; i < Winning.length; i++) {
        let verge_of_O = check_sub_array(currentO, Winning[i])[0];
        if (check_sub_array(currentO, Winning[i]).length == 1) {
            if (remaining.indexOf(verge_of_O) != -1) {
                document.getElementById(verge_of_O).innerText = "O";
                document.getElementById(verge_of_O).style.color = "red";
                remaining.splice(remaining.indexOf(verge_of_O), 1);
                currentO.push(verge_of_O);
                flagO++;
                break;
            }
        }
    }

    let flagX = 0;
    if (!flagO) {
        for (let i = 0; i < Winning.length; i++) {
            verge_of_X = check_sub_array(currentX, Winning[i])[0];
            if (check_sub_array(currentX, Winning[i]).length == 1) {
                if (remaining.indexOf(verge_of_X) != -1) {
                    document.getElementById(verge_of_X).innerText = "O";
                    document.getElementById(verge_of_X).style.color = "red";
                    remaining.splice(remaining.indexOf(verge_of_X), 1);
                    currentO.push(verge_of_X[0]);
                    flagX++;
                    break;
                }
            }
        }
    }
    if (flagO == 0 && flagX == 0) {
        let nextO = document.getElementById(
            remaining[Math.floor(Math.random() * remaining.length)]
        );
        if(!nextO){
            alert("match drawn");
            reset();
        }
        currentO.push(nextO.id);
        nextO.innerHTML = "O";
        nextO.style.color = "red";
        remaining.splice(remaining.indexOf(nextO.id), 1);
    }

    if(checkStatus()){
        return;
    }
    target.removeAttribute("onclick");
    if(remaining.length==0){
        alert("Match Drawn");
        reset();
    }
}

function check_sub_array(superarr, subarr) {
    let remainingarr = [];
    subarr.forEach(function (element) {
        if (!superarr.includes(element)) {
            remainingarr.push(element);
        }
    });
    return remainingarr;
}

function checkStatus() {
    let flag = 0;
    for (let i = 0; i < Winning.length; i++) {
        if (check_sub_array(currentX, Winning[i]).length == 0) {
            alert("YOU WON");
            flag++;
            break;
        } else if (check_sub_array(currentO, Winning[i]).length == 0) {
            alert("COMPUTER OWN");
            flag++;
            break;
        }
    }
    if (flag) {
        reset();
        return 1;
    }
}
