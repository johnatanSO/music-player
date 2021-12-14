//player
let music = document.querySelector(".music-element")
let playBtn = document.querySelector(".play")
let seekbar = document.querySelector(".seekbar")
let currentTime = document.querySelector(".current-time")
let duration = document.querySelector(".duration")

function handlePlay(){
    if (music.paused){
        music.play()
        playBtn.className = 'pause'
        playBtn.innerHTML = '<i class="fas fa-pause"></i>'
    }else{
        music.pause()
        playBtn.className = 'play'
        playBtn.innerHTML = '<i class="fas fa-play"></i>'
    }
    music.addEventListener('ended', function(){
        playBtn.className = 'play'
        playBtn.innerHTML = '<i class="fas fa-play"></i>s'
        music.currentTime = 0
    })
}

music.onloadeddata = function(){
    seekbar.max = music.duration
    let ds = parseInt(music.duration%60)
    let dm = parseInt((music.duration/60)%60)
    duration.innerHTML = dm + ':' + ds
}

music.ontimeupdate = ()=>{seekbar.value = music.currentTime}

handleSeekBar = ()=>{music.currentTime = seekbar.value}
music.addEventListener('timeupdate', ()=>{
    let cs = parseInt(music.currentTime%60)
    let cm = parseInt((music.currentTime/60)%60)
    currentTime.innerHTML = cm + ':' + cs
},false)

//like

let favIcon = document.querySelector(".favorite")
function handleFavorite(){
    favIcon.classList.toggle('active')
}

//repeat

let repIcon = document.querySelector(".repeat")
function handleRepeat(){
    if(music.loop){
        music.loop = false
        repIcon.classList.toggle('active')
    }else{
        music.loop = true
        repIcon.classList.toggle('active')
    }
}

//volume

var volIcon = document.querySelector('.volume')
var volBox = document.querySelector('.volume-box')
var volumeRange = document.querySelector('.volume-range')
var volumeDown = document.querySelector('.volume-down')
var volumeUp = document.querySelector('.volume-up')

function handleVolume() {
    volIcon.classList.toggle('active')
    volBox.classList.toggle('active')
}

volumeDown.addEventListener('click', handleVolumeDown);
volumeUp.addEventListener('click', handleVolumeUp);

function handleVolumeDown() {
    volumeRange.value = Number(volumeRange.value) - 10
    music.volume = volumeRange.value / 100
}
function handleVolumeUp() {
    volumeRange.value = Number(volumeRange.value) + 10
    music.volume = volumeRange.value / 100
}

//increment/decrement
function handleForward(){
    if(music.currentTime == music.duration){
        music.currentTime = 0
    }else{
        music.currentTime += 10
    }
}
function handleBackward(){
    music.currentTime -= 10
}

function darkTheme(){
    let player = document.querySelector(".player")
    let volume = document.querySelector(".volume")
    let volumeDown = document.querySelector(".volume-down")
    let volumeUP = document.querySelector(".volume-up")
    let favorite = document.querySelector(".favorite")
    let repeat = document.querySelector(".repeat")
    let backward = document.querySelector(".fa-backward")
    let forward = document.querySelector(".fa-forward")
    let play = document.querySelector(".fa-play")
    let title = document.querySelector('.title')
    let singer = document.querySelector('.singer')
    let buttonTheme = document.querySelector('.darkTheme')

    player.classList.toggle('playerDARKMODE')
    volume.classList.toggle('volumeDARKMODE')
    volumeDown.classList.toggle('volume-downDARKMODE')
    volumeUP.classList.toggle('volume-upDARKMODE')
    favorite.classList.toggle('favoriteDARKMODE')
    repeat.classList.toggle('repeatDARKMODE')
    backward.classList.toggle('backwardDARKMODE')
    forward.classList.toggle('forwardDARKMODE')
    play.classList.toggle('playDARKMODE')
    title.classList.toggle('titleDARKMODE')
    singer.classList.toggle('singerDARKMODE')
    currentTime.classList.toggle('current-timeDARKMODE')
    duration.classList.toggle('durationDARKMODE')
    buttonTheme.classList.toggle('buttonDARK')
}