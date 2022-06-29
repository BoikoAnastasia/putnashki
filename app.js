const items = document.querySelectorAll(".item__number");
const arrNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];
var ouputTime = document.querySelector(".time");
const btn_reset = document.querySelector("#btn_reset");
var audioSonic = new Audio('Sonic.mp3');

randomDivNumber();


function printNumbers(from, to) {
    let current = from;

    
    function go() {
        ouputTime.textContent = `Оставшееся время: ${current}`;
        if (current == to) {
            clearInterval(timerId);
        }
        current--;
        if (current == 0) {
            ouputTime.textContent = 'Вы проиграли';
            var audio = new Audio('wasted.mp3');
            audio.play();
        }
    }
    go();
    let timerId = setInterval(go, 1000);
}

function randomDivNumber() {
    items.forEach(el => {
        var arrNumber = arrNumbers[Math.floor(Math.random() * arrNumbers.length)];
        var randomColor = Math.floor(Math.random() * 16777215).toString(16);
        i = arrNumbers.indexOf(arrNumber);
        if (i >= 0) {
            arrNumbers.splice(i, 1);
        }
        el.textContent = arrNumber;
        el.id = arrNumber;

        var strColor = "#" + randomColor;
        el.style.color = strColor;

    });
    for (let i = 1; i <= 25; i++) {
        arrNumbers.push(i);
    }
}


btn_reset.addEventListener('click', () => {
    randomDivNumber();
    printNumbers(18, 1);
    audioSonic.play();


    items.forEach(element => {
        element.style.backgroundColor = "#ffffff";
    });
    ouputTime.textContent = "";
    count = 1;
    printNumbers(18, 1);
    sonicPlay();
});


items.forEach(element => {
    element.addEventListener('click', (e) => {
        e.preventDefault();
        checkItem(element);
    });
});

var count = 1;
function checkItem(item) {
    if (item.id == count) {
        item.style.backgroundColor = "rgb(255, 0,0)";
        count = count + 1;
    }
    else {
        var audio = new Audio('surprise.mp3');
        audio.play();
        return;
    }
    if (count == 26) {
        ouputTime.textContent = "Вы выйграли!";
    }
}