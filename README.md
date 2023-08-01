
## Table of contents
- [Table of contents](#table-of-contents)
- [Overview](#overview)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview
This is a Song Player made using Javscript which plays locally saved songs

Users should be able to:
- Play/pause any song from given list
- Seek through the song duration
- Change songs either by clicking on them or using prev/next button


### Links
Live link : [click]()

## My process
- Firstly I made the basic HTML structure with all necessary components.
- Then  designed the page using css properties and flexbox.
- I also made the page responsive using mobile-first-approach.
- After that I wrote the javascript which involved many steps as below
   - Created all the required variables by selecting required elements
   - Created **songs** array for storing and accessing info of each song
   - then i added each song content to site using *for-each* loop and **songs** array
   - added event-listeners to various buttons and their functionalities by various functions

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- javascript


### What I learned
Throughout this project i learned a number of new concepts
- using **range** input-type in html
- using *css transform and JS* for animation
- Using arrays effectively for repating tasks and easy updation of audio data
- converting selected html collection to array by code:
    - *let songItems=Array.from(document.getElementsByClassName("song-info"));*
- using **for-each** loop : *songItems.forEach((element,i) => {*
- using **timeupdate** event listener for audio elemnt
   - *audio.addEventListener("timeupdate",()=>*
- converting audio durations to minute:seconds format
   - *totalMinutes=parseInt((audio.duration/60)%60);
     totalSeconds=parseInt(audio.duration%60);*
- using various properties of *audio* object
- more better understnding of html DOM selection by JS 
  
## Author

- Linkedin - [https://www.linkedin.com/in/9abhinav/](https://www.linkedin.com/in/9abhinav/)
- Twitter - [https://twitter.com/Abhinav43358626](https://twitter.com/Abhinav43358626)

## Acknowledgments
- Code With Harry

