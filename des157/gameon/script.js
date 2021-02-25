!function () {
    "use strict";
    var mask = document.getElementsByClassName('mask')[0];
    var start = document.getElementsByClassName('start')[0];
    var inputmask = document.getElementsByClassName('input-mask')[0];
    var next = document.getElementsByClassName('next')[0];
    var rest = document.getElementsByClassName('rest')[0];
    var palyerCon = document.getElementsByClassName('palyer-con');
    var text = document.getElementsByClassName('text')[0];
    var imgBox = document.getElementsByClassName('img-box')[0]
    var name1 = document.getElementById('name1')
    var name2 = document.getElementById('name2')

    var gameData = {
        dice: ['1die.jpg', '2die.jpg', '3die.jpg',
            '4die.jpg', '5die.jpg', '6die.jpg'],
        players: ['', ''],
        score: [0, 0],
        roll1: 0,
        roll2: 0,
        rollSum: 0,
        index: 0,
        gameEnd: 29
    };
    window.onload = function () {
        mask.classList.add('active')
    }
    
    start.onclick = function () {
        mask.classList.remove('active')
        inputmask.classList.add('active')
    }
    next.onclick = function () {
        if (name1.value !== '' && name2.value) {
            gameData.players[0] = name1.value
            gameData.players[1] = name2.value
            inputmask.classList.remove('active')
            runDo()
        } else {
            alert(`Please input player's name`)
        }
    }
    rest.onclick = function () {
        location.reload()
    }
    function runDo() {
        gameData.index = Math.round(Math.random());
        setUpTurn()
    }
    function setUpTurn() {
        setTimeout(function () {
            text.innerHTML = `Roll the dice for the ${gameData.players[gameData.index]}`;
        }, 800)
        palyerCon[gameData.index].innerHTML = `
    <h1>${gameData.players[gameData.index]}</h1>
    <p id="score"></p>
    <span id="roll">Roll</span>
    <span id="pass">Pass</span>
    `
        pass()
        document.getElementById('score').innerHTML = 'score:' + gameData.score[gameData.index];
        document.getElementById('roll').addEventListener('click', function () {
            throwDice()
        });
    }
    function throwDice() {
        imgBox.innerHTML = ''
        gameData.roll1 = Math.floor(Math.random() * 6) + 1;
        gameData.roll2 = Math.floor(Math.random() * 6) + 1;
        imgBox.innerHTML += `<img src="${gameData.dice[gameData.roll1 - 1]}">
    <img src="${gameData.dice[gameData.roll2 - 1]}">`;
        gameData.rollSum = gameData.roll1 + gameData.roll2;
        if (gameData.rollSum === 2) {
            text.innerHTML = ''
            text.innerHTML = 'Oh Snap! Snake eyes';
            gameData.score[gameData.index] = 0;
            if (gameData.index === 0) {
                gameData.index = 0
            } else {
                gameData.index = 1
            }
            palyerCon[gameData.index].innerHTML = ''
        }
        else if (gameData.roll1 === 1 || gameData.roll2 === 1) {
            text.innerHTML = ''
            palyerCon[gameData.index].innerHTML = ''
            gameData.index ? (gameData.index = 0) : (gameData.index = 1);
            text.innerHTML += `<p>Sorry one of your rolls was a one. Switching to ${gameData.players[gameData.index]}</p>`;
            setTimeout(setUpTurn, 400);
        }
        else {
            gameData.score[gameData.index] = gameData.score[gameData.index] + gameData.rollSum;
            document.getElementById('score').innerHTML = 'score:' + gameData.score[gameData.index];
            checkWinningCondition();
        }

    }
    
    function checkWinningCondition() {
        if (gameData.score[gameData.index] > gameData.gameEnd) {
            text.innerHTML = ''
            text.innerHTML = `<h2>${gameData.players[gameData.index]}
                wins with ${gameData.score[gameData.index]} points!</h2>`;
            palyerCon[gameData.index].innerHTML = ''
        }
    }
    function pass() {
        document.getElementById('pass').addEventListener('click', function () {
            if (gameData.index === 0) {
                gameData.index = 1
                palyerCon[0].innerHTML = ''
                setUpTurn()
            } else {
                gameData.index = 0
                palyerCon[1].innerHTML = ''
                setUpTurn()
            }
        })

    }
}();