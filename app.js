
var scores, roundScore, activePlayer;
var gamePlaying = true;



document.querySelector('.btn-roll').addEventListener('click', function()
{
    if(gamePlaying)
    {
        dice = Math.floor(Math.random()*6) +1;
        dice1 = Math.floor(Math.random()*6)+1;
        var diceDOM = document.querySelector('.dice');
        var diceDOM1 = document.querySelector('.dice1');

        diceDOM.style.display = 'block';
        diceDOM.src = 'img/dice-'+ dice + '.png';
        diceDOM1.style.display = 'block';
        diceDOM1.src = 'img/dice-'+ dice1 + '.png';

        if(dice !== 1 && dice1 !==1)
        {
            roundScore = roundScore+dice+dice1;
            document.querySelector('#current-'+ activePlayer).textContent = roundScore;
        }
        else
        {
            nextPlayer();
        }
    }
    
});
document.querySelector('.btn-hold').addEventListener('click', function()
{
    if(gamePlaying)
    {
        scores[activePlayer] += roundScore;
    
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
    const input = document.querySelector('.finalScore').value;
    var winningScore;
    if(input)
    {
        winningScore = input;
    }
    else
    {
        winningScore =100;
    }

    if(scores[activePlayer] >=winningScore)
    {
        document.querySelector('#name-'+activePlayer).textContent = "winner!";
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.dice1').style.display = 'none';
        document.querySelector('.player-'+activePlayer + '-panel').classList.add('winner'); 
        document.querySelector('.player-'+activePlayer + '-panel').classList.remove('active'); 
        gamePlaying =false;
    }
    else
    {
        nextPlayer();
    }
    }
    
    

});
document.querySelector('.btn-new').addEventListener('click', init);
function init()
{
    scores =[0,0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;

    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.dice1').style.display = 'none';

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = "Player 1";
    document.getElementById('name-1').textContent = "Player 2";
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}

function nextPlayer()
{
    activePlayer ===0 ? activePlayer =1 : activePlayer=0;
    roundScore = 0;
  
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
   
    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.dice1').style.display = 'none';
}