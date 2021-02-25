!function () {
    "use strict";
   const mask = document.getElementsByClassName('mask')[0];
   const start = document.getElementsByClassName('start')[0];
   const inputmask = document.getElementsByClassName('input-mask')[0];
   const next = document.getElementsByClassName('next')[0];
   const startSound = new Audio('knock.mp3');
   const rest = document.getElementsByClassName('rest')[0];
   const palyerCon = document.getElementsByClassName('palyer-con');
   const text = document.getElementsByClassName('text')[0];
   const imgBox = document.getElementsByClassName('img-box')[0]
   const name1 = document.getElementById('name1')
   const name2 = document.getElementById('name2')
   const rollSound = new Audio('dice.mp3');


    let gameData = {
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

    //rule window
    window.onload = function () {
        mask.classList.add('active') // add active to show the rule window
    }
    
    // start button function
    start.onclick = function () {
        mask.classList.remove('active') // remove active to hide the rule window
        inputmask.classList.add('active') //name input
    }

    //click next step to shat the game and play the sound
    next.onclick = function () {
        if (name1.value !== '' && name2.value) { //if player enter the name
            gameData.players[0] = name1.value
            gameData.players[1] = name2.value
            inputmask.classList.remove('active')
            runDo()
            startSound.play();
        } else {
            alert(`Please input player's name`)
        }
    }

    //reload game
    rest.onclick = function () {
        location.reload()
    }

    //run the game
    function runDo() {
        gameData.index = Math.round(Math.random());
        setUpTurn()
    }

    //initialization
    function setUpTurn() {
        setTimeout(function () {
            text.innerHTML = `Roll the dice for the ${gameData.players[gameData.index]}`;
        }, 800)
        palyerCon[gameData.index].innerHTML = `
    <h1>${gameData.players[gameData.index]}</h1>
    <p id="score"></p>
    <span id="roll">Roll</span>
    <span id="pass">Pass</span>
    `//show the players name  roll&pass button
        pass()
        document.getElementById('score').innerHTML = 'score:' + gameData.score[gameData.index];
        document.getElementById('roll').addEventListener('click', function () {
            throwDice()
            rollSound.play(); //press roll run the mp3

        });
    }

    //game setting
    function throwDice() {
        imgBox.innerHTML = '' //clear dice image
        gameData.roll1 = Math.floor(Math.random() * 6) + 1;
        gameData.roll2 = Math.floor(Math.random() * 6) + 1;
        imgBox.innerHTML += `<img src="${gameData.dice[gameData.roll1 - 1]}">
    <img src="${gameData.dice[gameData.roll2 - 1]}">`;  //show the dice 
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
            palyerCon[gameData.index].innerHTML = ''//clear data
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
            document.getElementById('score').innerHTML = 'score:' + gameData.score[gameData.index];//show the score
            checkWinningCondition();
        }

    }
    //check the score
    function checkWinningCondition() {
        if (gameData.score[gameData.index] > gameData.gameEnd) {
            text.innerHTML = ''
            text.innerHTML = `<h2>${gameData.players[gameData.index]}
                wins with ${gameData.score[gameData.index]} points!</h2>`;
            palyerCon[gameData.index].innerHTML = ''
        }
    }

    //pass function switch player
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