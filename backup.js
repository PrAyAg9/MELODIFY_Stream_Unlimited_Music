// console.log("Javascript Let's Go");
// let songs;

// let currentSong = new Audio();

// function convertSecondsToTime1(seconds) {
//     // Ensure the input is a positive integer
//   if (seconds < 0 || isNaN(seconds)) {
//     throw new Error("Input must be a non-negative number");
//   }
  
//   // Calculate minutes and remaining seconds
//   const minutes = Math.floor(seconds / 60);
//   const remainingSeconds = Math.floor(seconds % 60);
  
//   // Format minutes and seconds to ensure two-digit seconds
//   const formattedMinutes = String(minutes).padStart(2,'0');
//   const formattedSeconds = String(remainingSeconds).padStart(2, '0');
  
//   // Return the formatted time string
//   return `${formattedMinutes}:${formattedSeconds}`;
// }


// function convertSecondsToTime(seconds) {
//   // Calculate hours, minutes, and seconds
//   const hours = Math.floor(seconds / 3600);
//   const minutes = Math.floor((seconds % 3600) / 60);
//   const remainingSeconds = seconds % 60;

//   // Format minutes and seconds to always show two digits
//   const formattedMinutes = String(minutes).padStart(2, '0');
//   const formattedSeconds = String(remainingSeconds).padStart(2, '0');

//   // If hours are more than 0, include hours in the output
//   if (hours > 0) {
//       const formattedHours = String(hours).padStart(2, '0');
//       return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
//   } else {
//       // Otherwise, just return minutes and seconds
//       return `${formattedMinutes}:${formattedSeconds}`;
//   }
// }


// async function get_songs() {
//   // as api nahi use kar rahe hai server side se nahi toh documnetation ko bana ke live server se fetch karenge information samjhe
//   let a = await fetch("http://127.0.0.1:5500/songs/");
//   let response = await a.text();
//   let div = document.createElement("div");
//   div.innerHTML = response;
//   let as = div.getElementsByTagName("a");
//   songs = [];
//   for (let i = 0; i < as.length; i++) {
//     // isme apna aim kya hai ki ----- pehle ak jo as pura bana hai usme me kisi ek ko retract karenge fir
//     const element = as[i];
//     if (element.href.endsWith(".mp3")) {
//       songs.push(element.href.split("/songs/")[1]);
//     }
//   }
//   return songs;
// }

// // try {
// //     let a =  fetch("http://127.0.0.1:5500/songs/");
// //     if (!a.ok) {
// //         throw new Error(`HTTP error! status: ${a.status}`);
// //     }
// //     let response = await a.text();
// //     let div = document.createElement("div");
// //     div.innerHTML = response;
// //     let as = div.getElementsByTagName("a");
// //     console.log(as);
// //     let songs = [];
// //     for(let i = 0; i < as.length; i++){
// //         const element = as[i];
// //         if(element.href.endsWith('.mp3')){
// //             songs.push(element.href);
// //         }
// //     }
// //     return songs;
// // } catch (error) {
// //     console.error("Error fetching songs:", error);
// // }

// const playMusic = (track, pause=false) => {
//   // let audio = new Audio("/songs/" +track);
//   currentSong.src = "/songs/" + track;
//   //   isse ye ho raha hai ki sare audio baar baar play ho ja rahe hai new ban ja raha hai.
//   // currentSong.play();
//   // play.src = "./images/pause.svg";
//   // --AFTER 
//   if(!pause){
//     currentSong.play();
//     play.src = "./images/pause.svg";
//   }
//   document.querySelector(".songinfo1").innerHTML = decodeURI(track);
//   document.querySelector(".songtime").innerHTML = "00:00 / 00:00";
// };

// async function main() {
//   let songs = await get_songs();
//   playMusic(songs[0],true);
//   console.log(songs);

//   let sul = document.querySelector(".songlist").getElementsByTagName("ul")[0];
//   for (const song of songs) {
//     sul.innerHTML =
//       sul.innerHTML +
//       `              <li>
//                 <img class="invert" id="close" src="./images/musicclose.svg" alt="not playing">
//                 <div class="songinfo">
//                   <div class="songname" > ${song.replaceAll("%20", " ")}</div>
//                   <div> Prayag </div>
//                 </div>
//                 <div class="playnow">
//                   <span>Play</span>
//                   <img class="invert resize" src="./images/play1.svg" alt="playnow">
//                 </div>
//               </li>`;
//   }

//   // -- CODE for playing the first song ------
//   // var audio = new Audio(songs[0]);
//   // audio.play();

//   // audio.addEventListener("loadeddata",() => {
//   //     // auddio ke documentation me jake dekho ki kya chaiye apne ko jo baar run kare sirf ek bar nahi
//   //   console.log(audio.duration, audio.currentSrc, audio.currentTime);
//   // }
//   // );

//   // Now adding an Event Listener to each song by getting that song from list and then by clicking it you can play.
//   Array.from(
//     document.querySelector(".songlist").getElementsByTagName("li")
//   ).forEach((e) => {
//     e.addEventListener("click", (element) => {
//       console.log(e.querySelector(".songinfo").firstElementChild.innerHTML);
//       playMusic(
//         e.querySelector(".songinfo").firstElementChild.innerHTML.trim()
//       );
//     });
//   });

//   // Attach an event listener to play next play and previous
//   play.addEventListener("click", () => {
//     if (currentSong.paused) {
//       currentSong.play();
//       play.src = "./images/pause.svg";
//     } else {
//       currentSong.pause();
//       play.src = "./images/play1.svg";
//     }
//   });


// // SD  -- here we want to move our circle with the time and time should also change with it once 
// //        moved so both event listeners needs a update at this point and logic to move circle and 
// //        change it's time is required here

//   // Listen for timeupdate event
//   currentSong.addEventListener("timeupdate", () => {
//     console.log(currentSong.currentTime, currentSong.duration);
//     let seconds;
//     if (seconds < 0) {
//       throw new Error("Input must be a non-negative number");
//     }
//     document.querySelector(".songtime").innerHTML = `${convertSecondsToTime1(
//       currentSong.currentTime
//     )}
//     / ${convertSecondsToTime1(currentSong.duration)}`;
//     document.querySelector(".circle").style.left = (currentSong.currentTime/currentSong.duration) * 100 + "%";
//   });

//   // Add an event listener to seekbar
//   document.querySelector(".seekbar").addEventListener("click", e => {
//     let percent = (e.offsetX/e.target.getBoundingClientRect().width) * 100;
//     document.querySelector(".circle").style.left = percent + "%";
//     currentSong.currentTime = ((currentSong.duration) * percent) /100;
//   }
//   )

// }

//   //Add an event listener to hamburger
//   document.querySelector(".hamburger").addEventListener("click",() => {
//     document.querySelector(".left").style.left = "0";
//   }
//   )

//   // Add an event listener to close hamburger
//   document.querySelector(".close").addEventListener("click",() => {
//     document.querySelector(".left").style.left = "-100%";
//     document.querySelector(".left").style.transition = "0.4s";
//   }
//   )


//   // Event listener for playing previous song
//   // Aisa nahi hoga dekha prev method se nhi chalegi chize
//   // document.querySelector(".prev").addEventListener("click",() => {
//   //   document.querySelector
//   // }
//   // )
//   // ----ERROR - dedega as prev me kuch hai nahi isliye can not read from null error ayega aur crash isliye aisa karega aage

//   prev.addEventListener("click",() => {
//     console.log('Previous button was clicked');
//     let index = songs.indexOf(currentSong.src.split("/").slice(-1) [0]);
//     if ((index-1)>0){
//       playMusic(songs[index-1]); 
//     }
//     else{
//       playMusic(songs[length]);
//     }    
//   }
//   )

//   next.addEventListener("click",() => {
//     console.log('Next button was clicked');
//     let index;
//     currentSong.pause();
//     index = songs.indexOf(currentSong.src.split("/").slice(-1) [0]);
//     if ((index+1)<songs.length){
//       playMusic(songs[index+1]);
//     }
//     else{
//       playMusic(songs[0]);
//     }
//   }
//   )  

//   document.querySelector(".range").getElementsByTagName("input")[0].addEventListener("change",(e) => {
//     // console.log(e,e.target,e.target.value);
//     console.log('Setting volume to ',e.target.value,"/100");
    
//     currentSong.volume = parseInt(e.target.value)/100;
    
//   }
//   )

//   // Creating a event listener for adding many libraries in this website by adding various albums.
// main();
