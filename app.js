
let isActive , current,gameOver;

init = () =>{
    isActive = [true,false];
    current = [0,0];
gameOver=false;
    document.getElementById('score-0').innerText = 0;
    document.getElementById('score-1').innerText = 0;
    document.getElementById('current-0').innerText = 0;
    document.getElementById('current-1').innerText = 0;
};
init();

isPlayerActive = () => {
    for (let i in isActive) {
        if (isActive[i]) {
            return i;
        }
    }
}

setActivePlayer = () =>{
    for (let i in isActive) {
        isActive[i]=!isActive[i];
        isActive[i] ?  document.querySelector('.player-'+i+'-panel').classList.add('active') :
            document.querySelector('.player-'+i+'-panel').classList.remove('active') ;

    }
};

document.querySelector('.btn-roll').addEventListener('click', () => {
    if(!gameOver){
        const player = isPlayerActive();
        const dice = 50//Math.floor(Math.random() * 6) + 1;
        document.querySelector('.dice').src = 'dice-'+dice+'.png';
        dice!==1 ? current[player]=current[player]+dice : (current[player]=0,setActivePlayer());
        document.getElementById('current-' + player).innerText = current[player];

        current[player]===100 ?
            (document.getElementById('dice').style.display ='none' ,
                document.getElementById('name-'+player).innerText='Winner',gameOver=true,
                document.getElementById('roll').style.display='none') : null;
    }
});

document.querySelector('.btn-hold').addEventListener('click', () => {
    const player = isPlayerActive();
    document.getElementById('score-' + player).innerText = current[player];
    setActivePlayer();
});

document.querySelector('.btn-new').addEventListener('click', () => {
    init();
})
