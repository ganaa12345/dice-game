var isGameOver;
var activePlayer;
var scores;
var roundScore;
var diceDocument = window.document.querySelector('.dice');
initGame();

function initGame() {
    isGameOver = false;
    //тоглогчийн ээлжийг хадгалах хувьсагч, нэгдүгээр тоглогчийг 0ь хоёрдугаар тоглогчийг 1 гэе
    activePlayer = 0;

    //тоглогчийн оноог хадгалах хувьсагч
    scores = [0, 0]
    //Тоглогчийн ээлжиндээ цуглуулж байгаа оноог хадгалах хувьсагч
    roundScore = 0;
    //Шоо аль талаараа буусныг хадгалах хувьсагч, 1-6 гэсэн утгыг энэ хувьсагчид санамсаргүйгээр үүсгэж өгнө.

    document.getElementById("score-0").textContent = '0';
    // window.document.querySelector('#score-0').textContent = 0;
    window.document.getElementById('score-1').textContent = '0';
    window.document.getElementById('current-0').textContent = '0';
    window.document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player-1';
    document.getElementById('name-1').textContent = 'Player-2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');




    diceDocument.style.display = "none";

}
// Шоог шидэх эвэнт листенер
document.querySelector('.btn-roll').addEventListener("click", function () {
    if (isGameOver !== true) {
        //1-6 санамсаргүйгээр гаргах
        var diceNumber = Math.floor(Math.random() * 6) + 1;
        //шоог веб-д харуулах
        diceDocument.style.display = "block";
        diceDocument.src = 'dice-' + diceNumber + '.png';
        //Буусан шоо 1-ээс ялгаатай бол идэвхтэй тоглогчийн ээлжийн оноог өөрчилнө
        if (diceNumber !== 1) {
            roundScore = roundScore + diceNumber;

            document.getElementById('current-' + activePlayer).textContent = roundScore;
        } else {
            switchToNextPlayer();

        }
    } else {
        alert('Уучлаарай тоглоом дууссан байна.');
    }



});
//HOLD Event
document.querySelector('.btn-hold').addEventListener('click', function () {
    if (isGameOver !== true) {
        scores[activePlayer] = scores[activePlayer] + roundScore;

        document.getElementById('score-' + activePlayer).textContent = scores[activePlayer]

        if (scores[activePlayer] >= 20) {
            isGameOver = true;
            document.getElementById('name-' + activePlayer).textContent = "WINNER!!!";
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');

        } else {
            switchToNextPlayer();
        }
    } else {
        alert('Уучлаарай тоглоом дууссан байна.');
    }


});
function switchToNextPlayer() {
    roundScore = 0;
    document.getElementById('current-' + activePlayer).textContent = 0;

    activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    diceDocument.style.display = "none";
}
document.querySelector('.btn-new').addEventListener('click', initGame);
