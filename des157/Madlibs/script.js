var character = document.getElementById('character'),
    verb1 = document.getElementById('verb1'),
   noun1 = document.getElementById('noun1'),
    verb2 = document.getElementById('verb2'),
    animal = document.getElementById('animal'),
    mood = document.getElementById('mood'),
    action = document.getElementById('action'),
    rest = document.getElementById('rest'),
    sub = document.getElementById('sub'),
    shade = document.getElementsByClassName('shade')[0]
close1 = document.getElementsByClassName('close')[0];
content1 = document.getElementsByClassName('content1')[0],
    content2 = document.getElementsByClassName('content2')[0];
sub.onclick = function (e) {
    if (character.value !== '' && verb1.value !== '' && noun1.value !== '' && verb2.value !== '' && animal.value !== '' && mood.value !== '' && action.value !== '') {
        e.preventDefault();
        shade.classList.add('active')
        content1.innerHTML ="Every barber has a nickname called " + character.value + ". On a sunny afternoon, you " +verb1.value+ " nto a barber shop called "+noun1.value+" and want to " +verb2.value+ " your hair. You were so sleepy that you fell asleep. After waking up, you found that " +character.value+ " shaved your hair, dyed it green, and drew a " +animal.value+ " on your head.You are very " +mood.value+ " and " +action.value+ " in the shop. TONY kicked you out."
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