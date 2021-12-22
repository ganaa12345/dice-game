//тоглогчийн ээлжийг хадгалах хувьсагч, нэгдүгээр тоглогчийг 0ь хоёрдугаар тоглогчийг 1 гэе
var activePlayer = 1;

//тоглогчийн оноог хадгалах хувьсагч
var scores = [0, 0]
//Тоглогчийн ээлжиндээ цуглуулж байгаа оноог хадгалах хувьсагч
var roundScore = 0;
//Шоо аль талаараа буусныг хадгалах хувьсагч, 1-6 гэсэн утгыг энэ хувьсагчид санамсаргүйгээр үүсгэж өгнө.
var dice = Math.floor(Math.random() * 6) + 1;
//<div class="player-score" id="score-0">43</div>
window.document.querySelector('#score-0').textContent = 0;
window.document.querySelector('#score-1').textContent = 0;
window.document.querySelector('#current-0').textContent = 0;
window.document.querySelector('#current-1').textContent = 0;
//window.document.querySelector('#score-1').innerHTML = "<em>YES!</em>"
window.document.querySelector('.dice').style.display
console.log('Шоо : ' + dice);
