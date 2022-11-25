console.log("Welcome to spotify");

//Initialize the Variables
let songIndex = 0;
let audioElement = new Audio(`songs/1.mp3`);
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let Mastersongname = document.getElementById('Mastersongname');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    { songName: "Kesariya", filePath: "songs/1.mp3", coverPath: "covers/1.jpg" },
    { songName: "Manike", filePath: "songs/2.mp3", coverPath: "covers/2.jpg" },
    { songName: "Let Me Down Slowly * Main Dhoondne ko", filePath: "songs/3.mp3", coverPath: "covers/3.jpg" },
    { songName: "Pasoori", filePath: "songs/4.mp3", coverPath: "covers/4.jpg" },
    { songName: "Rang Saari Gulabi", filePath: "songs/5.mp3", coverPath: "covers/5.jpg" },
    { songName: "Pee Loon", filePath: "songs/6.mp3", coverPath: "covers/6.jpg" },
    { songName: "Tum Jo Aaye", filePath: "songs/7.mp3", coverPath: "covers/7.jpg" },
    { songName: "Tum Ankhon Se Batana", filePath: "songs/8.mp3", coverPath: "covers/8.jpg" },
    { songName: "Kaali Kaali Zulfon ke", filePath: "songs/9.mp3", coverPath: "covers/9.jpg" },
    { songName: "Ankhon Mein Teri(LOfi)", filePath: "songs/10.mp3", coverPath: "covers/10.jpg" },
]

songItems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innertext = songs[i].songName;

})
// audioElement.play();

//Handle play/pause click
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {

        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.remove('fa-play-circle');
        gif.style.opacity = 0;
    }
})
// Listen to Events
audioElement.addEventListener('timeupdate', () => {
    //update seekbar 
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;

})

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        audioElement.play();
        Mastersongname.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })

})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0;
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
        Mastersongname.innerText = songs[songIndex].songName;
        audioElement.play();
        audioElement.currentTime = 0;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0;
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
        Mastersongname.innerText = songs[songIndex].songName;
        audioElement.play();
        audioElement.currentTime = 0;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');

})