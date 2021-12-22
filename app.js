//тоглогчийн ээлжийг хадгалах хувьсагч, нэгдүгээр тоглогчийг 0ь хоёрдугаар тоглогчийг 1 гэе
var activePlayer = 1;

//тоглогчийн оноог хадгалах хувьсагч
var scores = [0, 0]
//Тоглогчийн ээлжиндээ цуглуулж байгаа оноог хадгалах хувьсагч
var roundScore = 0;
//Шоо аль талаараа буусныг хадгалах хувьсагч, 1-6 гэсэн утгыг энэ хувьсагчид санамсаргүйгээр үүсгэж өгнө.

document.getElementById("score-0").textContent = '0';
// window.document.querySelector('#score-0').textContent = 0;
window.document.getElementById('score-1').textContent = '0';
window.document.getElementById('current-0').textContent = '0';
window.document.getElementById('current-1').textContent = '0';
var diceDocument = window.document.querySelector('.dice');
diceDocument.style.display = "none";
document.querySelector('.btn-roll').addEventListener("click", function () {
    var diceNumber = Math.floor(Math.random() * 6) + 1;
    diceDocument.style.display = "block";
    diceDocument.src = 'dice-' + diceNumber + '.png';

});

console.log('Шоо : ' + dice);
