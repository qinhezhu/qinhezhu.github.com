(function () {
    'use strict';
    let character = document.getElementById('character')
    let verb1 = document.getElementById('verb1')
    let noun1 = document.getElementById('noun1')
    let verb2 = document.getElementById('verb2')
    let animal = document.getElementById('animal')
    let mood = document.getElementById('mood')
    let action = document.getElementById('action')
    let rest = document.getElementById('rest')
    let sub = document.getElementById('sub')
    let shade = document.getElementsByClassName('shade')[0]
    let close1 = document.getElementsByClassName('close')[0]
    let content1 = document.getElementsByClassName('content1')[0]
    let content2 = document.getElementsByClassName('content2')[0]
    sub.onclick = function (e) {
        if (character.value !== '' && verb1.value !== '' && noun1.value !== '' && verb2.value !== '' && animal.value !== '' && mood.value !== '' && action.value !== '') {
            e.preventDefault();
            shade.classList.add('active')
            content1.innerHTML = "Every barber has a nickname called " + character.value + ". On a sunny afternoon, you " + verb1.value + " nto a barber shop called " + noun1.value + " and want to " + verb2.value + " your hair. You were so sleepy that you fell asleep. After waking up, you found that " + character.value + " shaved your hair, dyed it green, and drew a " + animal.value + " on your head.You are very " + mood.value + " and " + action.value + " in the shop. TONY kicked you out."
        }
    }
    close1.onclick = function () {
        shade.classList.remove('active')
    }
    rest.onclick = function () {
        name1.value = ''
        time.value = ''
        pastVerb1.value = ''
        pet.value = ''
        verb1.value = ''
        noun1.value = ''
        verb2.value = ''
    }
})()