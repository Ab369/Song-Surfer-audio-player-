//initialising variables

let audio=new Audio("songs/KGF - Piano BGM.mp3");
// audio.play();
let currentAudioIndex=0;

let bottomPlayButton=document.querySelector(".play");
let seekbar=document.querySelector(".seekbar");
let timePlayed=document.querySelector(".time-played");
let totalDuration=document.querySelector(".total-duration");
let playGif=document.getElementById(gif);
let nowPlayingContainer=document.querySelector(".now-playing");
let nowPlayingText=document.querySelector(".now-playing-text");

let songPlayingText=document.getElementsByClassName("song-playing");
let nowPlayingSongName=document.querySelector(".now-playing-song-name");
let nowPlayingThumbnail=document.getElementsByClassName("playing-song-thumbnail");

let next=document.querySelector(".next");
let previous=document.querySelector(".previous");

let songItems=Array.from(document.getElementsByClassName("song-info"));


// creating array of song details objects
let songs=[
    {songname:"KGF Piano BGM", filepath:"songs/KGF - Piano BGM.mp3",coverpath:"thumbanils/kgf.jpg" },
    {songname:"bestringtones.net_ghost-big-daddy", filepath:"songs/bestringtones.net_ghost-big-daddy.mp3",coverpath:"thumbanils/1.jpg"},
    {songname:"bestringtones.net_har-har-mahadev-omg-2", filepath:"songs/bestringtones.net_har-har-mahadev-omg-2.mp3",coverpath:"thumbanils/2.jpg"},
    {songname:"GODFATHER THEME", filepath:"songs/GODFATHER THEME.mp3",coverpath:"thumbanils/4.jpg"},
    {songname:"JOXION - Getting Down", filepath:"songs/JOXION - Getting Down [NCS Release].mp3",coverpath:"thumbanils/5.jpg"},
    {songname:"NEFFEX - Desperate", filepath:"songs/NEFFEX - Desperate [NCS Release].mp3",coverpath:"thumbanils/6.jpg"},
    {songname:"Outlandr - Eternity", filepath:"songs/Outlandr - Eternity [NCS Release].mp3",coverpath:"thumbanils/8.jpg"},
    {songname:"jailer_bgm ", filepath:"songs/jailer_bgm.mp3",coverpath:"thumbanils/9.jpg"},
    {songname:"Vikram BGM", filepath:"songs/Vikram BGM.mp3",coverpath:"thumbanils/4.jpg"},
    {songname:"VOLT VISION, Beneath My Shade", filepath:"songs/VOLT VISION, Beneath My Shade - Dangerous [NCS Release].mp3",coverpath:"thumbanils/10.jpg"},
   
]

//adding each song details

//setting info of each song-item
songItems.forEach((element,i) => {
    // console.log(element);
    // console.log(i);

    element.getElementsByClassName("thumbnail")[0].src=songs[i].coverpath;
    element.getElementsByClassName("song-name")[0].textContent=songs[i].songname;

});


//setting each item play button
var songPlayedBox;  //declared as global to make transparency of song-play-pause work
Array.from(document.getElementsByClassName("EachPlayButton")).forEach((element,i)=>
{
    element.addEventListener("click",(k)=>
    {
        console.log(k.target);
        
        currentAudioIndex=i;
        audio.src=songs[i].filepath;
            makeOtherPause();
           k.target.src='images/replay.png';
           audio.play();
           nowPlayingPlay();
           updateNames(i);
          bottomPlayButton.src="images/pause.png";
          removeTransparency();
          songPlayedBox=document.getElementsByClassName("song-info")[i];
          songPlayedBox.style.opacity=0.5;
     })
    })


//making bottom play button functional
bottomPlayButton.addEventListener("click",()=>
{
  
    if(audio.paused)  
    {
        audio.play();
        bottomPlayButton.src="images/pause.png";
        nowPlayingPlay();
    }

    else
    {
      audio.pause();
      bottomPlayButton.src="images/play-button-arrowhead.png"
      nowPlayingPause()
      songPlayedBox.style.opacity=1;
      makeOtherPause();
    }
  
})



//updating seekbar and timestamps
var secondsPlayed='00';
var minutesPlayed='00';
var totalMinutes='00';
var totalSeconds='00';
audio.addEventListener("timeupdate",()=>
{
    // console.log(audio.currentTime);
    let valuePercent=((audio.currentTime/audio.duration)*100);

    seekbar.value=valuePercent;
   
     totalMinutes=parseInt((audio.duration/60)%60);
     totalSeconds=parseInt(audio.duration%60);

     minutesPlayed=parseInt((audio.currentTime/60)%60);
     secondsPlayed=parseInt(audio.currentTime%60);

     timePlayed.textContent=minutesPlayed+':'+secondsPlayed;
     totalDuration.textContent=totalMinutes+':'+totalSeconds;
    
})


//including seek feature
seekbar.addEventListener('change',()=>
{
    audio.currentTime=(seekbar.value*audio.duration)/100;
})


//including next and previous song playing feature

//for next button
next.addEventListener("click",()=>
{

    if(currentAudioIndex>=songItems.length)
    {currentAudioIndex=0;}

    else
    {
        currentAudioIndex++;
    }

    playNextPrev(currentAudioIndex);
   
})

//for previous button
previous.addEventListener("click",()=>
{
    if(currentAudioIndex<=0)
    {currentAudioIndex=songItems.length-1;}
    
    else
    currentAudioIndex--;

    playNextPrev(currentAudioIndex);
})


///////////////////////////////////////////functions//////////////////////////////////////


//function for now-playing styling function for play
function nowPlayingPlay()
{
    gif.style.opacity=1;
    nowPlayingContainer.style.backgroundColor="black";
    nowPlayingText.style.color="white";
}


//function for now-playing styling function for pause
function nowPlayingPause()
{
    gif.style.opacity=0;
    nowPlayingContainer.style.backgroundColor="#8062D6";
    nowPlayingText.style.color="black";
}

//for changing icon of other play buttons
function makeOtherPause()
{
    Array.from(document.getElementsByClassName("EachPlayButton")).forEach((element)=>
    {
        // console.log(element);
        element.src="images/play-button-arrowhead.png";
    }
)}

//function for updating names of song played
function updateNames(i)
{
  songPlayingText[0].textContent=songs[i].songname; //used [0] as html collection with textcontent at [0]
  nowPlayingSongName.textContent=songs[i].songname; //no need of [0] as its is span hence not html colection
  nowPlayingThumbnail[0].src=songs[i].coverpath;
}

//function for removing transparency
  function removeTransparency()
  {
    let a=Array.from(document.getElementsByClassName("song-info"));
    a.forEach((element)=>
    {
        element.style.opacity=1;
    })
  }

//function for previous next song playing
function playNextPrev(currentAudioIndex)
{
   //similar as above(song-info-each-button) add event listener code

   audio.src=songs[currentAudioIndex].filepath;
   makeOtherPause(); 
   document.getElementsByClassName("EachPlayButton")[currentAudioIndex].src='images/replay.png';
   audio.play();
   nowPlayingPlay();
   updateNames(currentAudioIndex);
  bottomPlayButton.src="images/pause.png";
  removeTransparency();
  document.getElementsByClassName("song-info")[currentAudioIndex].style.opacity=0.5;
}