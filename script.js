console.log("Welcome to spotify");

//Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('new/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    { songName: "Kesariya", filePath: "songs/1.mp3", coverPath: "covers/1.jpg" },
    { songName: "Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "covers/2.jpg" },
    { songName: "Salam-e-Ishq", filePath: "songs/3.mp3", coverPath: "covers/3.jpg" },
    { songName: "Salam-e-Ishq", filePath: "songs/4.mp3", coverPath: "covers/4.jpg" },
    { songName: "Salam-e-Ishq", filePath: "songs/5.mp3", coverPath: "covers/5.jpg" },
    { songName: "Salam-e-Ishq", filePath: "songs/6.mp3", coverPath: "covers/6.jpg" },
    { songName: "Salam-e-Ishq", filePath: "songs/7.mp3", coverPath: "covers/7.jpg" },
    { songName: "Salam-e-Ishq", filePath: "songs/8.mp3", coverPath: "covers/8.jpg" },
    { songName: "Salam-e-Ishq", filePath: "songs/9.mp3", coverPath: "covers/9.jpg" },
    { songName: "Salam-e-Ishq", filePath: "songs/10.mp3", coverPath: "covers/10.jpg" },
]

songItems.forEach((element, i)=>{
    console.log(element, i);
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

Array.from(document.getElementsByClassName('songItemPlay')).forEach(()=>{
    element.addEventListener('click')    

})