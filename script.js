let home_score=document.getElementById('home_score')
let away_score=document.getElementById('away_score')
let home=0
let away=0
function plus1home(){
    home+=1
    home_score.textContent=home
}
function plus2home(){
    home+=2
    home_score.textContent=home
}
function plus3home(){
    home+=3
    home_score.textContent=home
}
function plus1away(){
    away+=1
    away_score.textContent=away
}
function plus2away(){
    away+=2
    away_score.textContent=away
}
function plus3away(){
    away+=3
    away_score.textContent=away
}