
let isActive , current;

init = () =>{
    isActive = [true,false];
    current = [0,0];

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
    const player = isPlayerActive();
    const dice = Math.floor(Math.random() * 6) + 1;
    document.querySelector('.dice').src = 'dice-'+dice+'.png';
    dice!==1 ? current[player]=current[player]+dice : (current[player]=0,setActivePlayer());
    document.getElementById('current-' + player).innerText = current[player];

    current[player]===100 ?
        (document.querySelector('.dice').display ='none' ,
            document.getElementById('name-'+player).innerText='Winner') : null;
});

document.querySelector('.btn-hold').addEventListener('click', () => {
    const player = isPlayerActive();
    document.getElementById('score-' + player).innerText = current[player];
    setActivePlayer();
});

document.querySelector('.btn-new').addEventListener('click', () => {
    init();
})
