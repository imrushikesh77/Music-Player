console.log("Welcome to Spotify!");
let songIndex = 1;
let audioElement = new Audio('song/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let masterSongName = document.getElementById('songNameBottom');
let myProgressBar = document.getElementById('myProgressBar');
let duration =Array.from(document.getElementsByClassName('duration'));
let songItems = Array.from(document.getElementsByClassName('songItem'));
let songs = [
    {songName: "Jogi", filePath: "song/1.mp3", coverPath:"covers/1.jpg"},
    {songName: "Varaha Roopam", filePath: "song/2.mp3", coverPath:"covers/2.jpg"},
    {songName: "Bekhayali", filePath: "song/3.mp3", coverPath:"covers/3.jpg"},
    {songName: "Yeh Aaina", filePath: "song/4.mp3", coverPath:"covers/4.jpg"},
    {songName: "Mehbooba", filePath: "song/5.mp3", coverPath:"covers/5.jpg"},
    {songName: "Pal", filePath: "song/6.mp3", coverPath:"covers/6.jpg"},
    {songName: "Tu Kisi Rail Si", filePath: "song/7.mp3", coverPath:"covers/7.jpg"},
    {songName: "Deewani Mastani", filePath: "song/8.mp3", coverPath:"covers/8.jpg"},
    {songName: "Ek Din", filePath: "song/9.mp3", coverPath:"covers/9.jpeg"},
    {songName: "Bikharne Ka", filePath: "song/10.mp3", coverPath:"covers/10.jpg"},
]


songItems.forEach((element, i) => {
    // console.log(element, i);
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName('songName')[0].innerHTML = songs[i].songName;
})

masterPlay.addEventListener('click', ()=>{
    masterSongName.innerHTML = songs[songIndex-1].songName;
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        document.getElementById("masterPlay").src = "img/pause.png";
    }
    else{
        audioElement.pause();
        makeAllPlays();
        document.getElementById("masterPlay").src = "img/play.png"
    }
})

audioElement.addEventListener('timeupdate',()=>{
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = myProgressBar.value*audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('play1')).forEach((element)=>{
        element.src = "img/play1.png";
    })
}

Array.from(document.getElementsByClassName('play1')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        
            makeAllPlays();
        songIndex = parseInt(e.target.id);
        masterSongName.innerHTML = songs[songIndex-1].songName;
        e.target.src = "img/pause1.png";
        audioElement.src = `song/${songIndex}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.src = "img/pause.png";
    })
})

document.getElementById('forward').addEventListener('click',()=>{
    if(songIndex>=10){
        songIndex = 0;
    }
    else{
        songIndex += 1;
    }
    masterSongName.innerHTML = songs[songIndex-1].songName;
    audioElement.src = `song/${songIndex}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.src = "img/pause.png"
})

document.getElementById('backward').addEventListener('click',()=>{
    if(songIndex<=1){
        songIndex = 1;
    }
    else{
        songIndex -= 1;
    }
    masterSongName.innerHTML = songs[songIndex-1].songName;
    audioElement.src = `song/${songIndex}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.src = "img/pause.png"
})


