console.log("Javascript Let's Go");
let songs;
let currFolder;

let currentSong = new Audio();

function convertSecondsToTime1(seconds) {
    // Ensure the input is a positive integer
  if (seconds < 0 || isNaN(seconds)) {
    throw new Error("Input must be a non-negative number");
  }
  
  // Calculate minutes and remaining seconds
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);
  
  // Format minutes and seconds to ensure two-digit seconds
  const formattedMinutes = String(minutes).padStart(2,'0');
  const formattedSeconds = String(remainingSeconds).padStart(2, '0');
  
  // Return the formatted time string
  return `${formattedMinutes}:${formattedSeconds}`;
}


function convertSecondsToTime(seconds) {
  // Calculate hours, minutes, and seconds
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  // Format minutes and seconds to always show two digits
  const formattedMinutes = String(minutes).padStart(2, '0');
  const formattedSeconds = String(remainingSeconds).padStart(2, '0');

  // If hours are more than 0, include hours in the output
  if (hours > 0) {
      const formattedHours = String(hours).padStart(2, '0');
      return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
  } else {
      // Otherwise, just return minutes and seconds
      return `${formattedMinutes}:${formattedSeconds}`;
  }
}


async function get_songs(folder) {
  currFolder = folder;
  let a = await fetch(`/${folder}/`);
  console.log(folder);
  let response = await a.text();
  let div = document.createElement("div"); 
  div.innerHTML = response;
  let as = div.getElementsByTagName("a");
  songs = [];
  for (let i = 0; i < as.length; i++) {
    const element = as[i];
    if (element.href.endsWith(".mp3")) {
      songs.push(element.href.split(`/${folder}/`)[1]);
    }
  }

  // show all songs in playlist
  let sul = document.querySelector(".songlist").getElementsByTagName("ul")[0];
  sul.innerHTML = " ";
  for (const song of songs) {
    sul.innerHTML =
      sul.innerHTML +
      `              <li>
                <img class="invert" id="close" src="./images/musicclose.svg" alt="not playing">
                <div class="songinfo">
                  <div class="songname" > ${song.replaceAll("%20", " ")}</div>
                  <div> Prayag </div>
                </div>
                <div class="playnow">
                  <span>Play</span>
                  <img class="invert resize" src="./images/play1.svg" alt="playnow">
                </div>
              </li>`;
  }

  Array.from(
    document.querySelector(".songlist").getElementsByTagName("li")
  ).forEach((e) => {
    e.addEventListener("click", element => {
      playMusic(
        e.querySelector(".songinfo").firstElementChild.innerHTML.trim()
      );
    });
  });
  return songs;
}

const playMusic = (track, pause=false) => {
  currentSong.src = `/${currFolder}/` + track;
  if(!pause){
    currentSong.play();
    play.src = "./images/pause.svg";
  }
  document.querySelector(".songinfo1").innerHTML = decodeURI(track);
  document.querySelector(".songtime").innerHTML = "00:00 / 00:00";

};


async function displayAlbums(){
  let a = await fetch(`/Songs/`);
  let response = await a.text();
  let div = document.createElement("div"); 
  div.innerHTML = response;
  let anchors = div.getElementsByTagName("a");
  let cardContainer = document.querySelector(".cardContainer")
  let array = Array.from(anchors)
    for (let index = 0; index < array.length; index++) {
      const e = array[index];
      
    
    if(e.href.includes("/Songs/") &&!e.href.includes(".htaccess")){
      console.log(e.href.split("/").slice(-2)[1]);
      let folder = e.href.split("/").slice(-2)[1];

      let a = await fetch(`/Songs/${folder}/info.json`);
      let response = await a.json();
      console.log(response);
      cardContainer.innerHTML = cardContainer.innerHTML + `           <div data-folder="${folder}" class="card">
              <div class="play">
                <?xml version="1.0" encoding="utf-8"?>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35px"
                  height="35px"
                  viewBox="0 0 28 28"
                >
                  <!-- Green Circle Background -->
                  <path
                    d="M14 0C6.268 0 0 6.268 0 14s6.268 14 14 14 14-6.268 14-14S21.732 0 14 0z"
                    fill="#00FF00"
                  />
                  <!-- Black Play Arrow -->
                  <path d="M11 8.5v11l7.5-5.5-7.5-5.5z" fill="#000000" />
                </svg>
              </div>
              <img
                aria-hidden="false"
                draggable="false"
                loading="lazy"
                src="/Songs/${folder}/cover.jpg"
                data-testid="card-image"
                alt=""
                class="mMx2LUixlnN_Fu45JpFB yMQTWVwLJ5bV8VGiaqU3 Yn2Ei5QZn19gria6LjZj"
              />
              <h3>${response.title}</h3>
              <p>${response.description}</p>
            </div>`
    }
  }
    Array.from(document.getElementsByClassName("card")).forEach(e=>{
      e.addEventListener("click",async item=>{
        songs = await get_songs(`Songs/${item.currentTarget.dataset.folder}`)
        console.log(songs);
        playMusic(songs[0],true);
      })
    }) 
}


async function displayAlbums2(){
  let a = await fetch(`/Songs1/`);
  let response = await a.text();
  let div = document.createElement("div"); 
  div.innerHTML = response;
  let anchors = div.getElementsByTagName("a");
  let cardContainer = document.querySelector(".cardContainer2")
  let array = Array.from(anchors)
    for (let index = 0; index < array.length; index++) {
      const e = array[index];
      
    
    if(e.href.includes("/Songs1/") &&!e.href.includes(".htaccess")){
      console.log(e.href.split("/").slice(-2)[1]);
      let folder = e.href.split("/").slice(-2)[1];

      let a = await fetch(`/Songs1/${folder}/info.json`);
      let response = await a.json();
      console.log(response);
      cardContainer.innerHTML = cardContainer.innerHTML + `           <div data-folder="${folder}" class="card1">
              <div class="play">
                <?xml version="1.0" encoding="utf-8"?>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35px"
                  height="35px"
                  viewBox="0 0 28 28"
                >
                  <!-- Green Circle Background -->
                  <path
                    d="M14 0C6.268 0 0 6.268 0 14s6.268 14 14 14 14-6.268 14-14S21.732 0 14 0z"
                    fill="#00FF00"
                  />
                  <!-- Black Play Arrow -->
                  <path d="M11 8.5v11l7.5-5.5-7.5-5.5z" fill="#000000" />
                </svg>
              </div>
              <img
                aria-hidden="false"
                draggable="false"
                loading="lazy"
                src="/Songs1/${folder}/cover.jpg"
                data-testid="card-image"
                alt=""
                class="mMx2LUixlnN_Fu45JpFB yMQTWVwLJ5bV8VGiaqU3 Yn2Ei5QZn19gria6LjZj"
              />
              <h3>${response.title}</h3>
              <p>${response.description}</p>
            </div>`
    }
  }
    Array.from(document.getElementsByClassName("card1")).forEach(e=>{
      e.addEventListener("click",async item=>{
        songs = await get_songs(`Songs1/${item.currentTarget.dataset.folder}`)
        console.log(songs);
        playMusic(songs[0]);
      })
    }) 
}





async function main() {
  await get_songs("Songs/kishore");
  playMusic(songs[0],true);
  // Display all the albums on the page.
  await displayAlbums();

  await displayAlbums2();

  // Attach an event listener to play next play and previous
  play.addEventListener("click", () => {
    if (currentSong.paused) {
      currentSong.play();
      play.src = "./images/pause.svg";
    } else {
      currentSong.pause();
      play.src = "./images/play1.svg";
    }
  });

  // Listen for timeupdate event
  currentSong.addEventListener("timeupdate", () => {
    let seconds;
    if (seconds < 0) {
      throw new Error("Input must be a non-negative number");
    }
    document.querySelector(".songtime").innerHTML = `${convertSecondsToTime1(
      currentSong.currentTime
    )}
    / ${convertSecondsToTime1(currentSong.duration)}`;
    document.querySelector(".circle").style.left = (currentSong.currentTime/currentSong.duration) * 100 + "%";
  });

  // Add an event listener to seekbar
  document.querySelector(".seekbar").addEventListener("click", e => {
    let percent = (e.offsetX/e.target.getBoundingClientRect().width) * 100;
    document.querySelector(".circle").style.left = percent + "%";
    currentSong.currentTime = ((currentSong.duration) * percent) /100;
  }
  )

    //Add an event listener to hamburger
    document.querySelector(".hamburger").addEventListener("click",() => {
      document.querySelector(".left").style.left = "0";
    }
    )
  
      // Add an event listener to mute the track
      document.querySelector(".volume > img").addEventListener("click",(e) => {
        console.log(e.target);
      }
      )
  
    // Add an event listener to close hamburger
    document.querySelector(".close").addEventListener("click",() => {
      document.querySelector(".left").style.left = "-100%";
      document.querySelector(".left").style.transition = "0.4s";
    }
    )
  
    prev.addEventListener("click",() => {
      currentSong.pause();
      let index = songs.indexOf(currentSong.src.split("/").slice(-1) [0]);
      if ((index-1)>=0){
        playMusic(songs[index-1]); 
      }   
    }
    )
  
    next.addEventListener("click",() => {
      let index;
      currentSong.pause();
      index = songs.indexOf(currentSong.src.split("/").slice(-1) [0]);
      if ((index+1)<songs.length){
        playMusic(songs[index+1]);
      }
  
    }
    )  
  
    document.querySelector(".range").getElementsByTagName("input")[0].addEventListener("change",(e) => {
      currentSong.volume = parseInt(e.target.value)/100;
    }
    )

// Add an event listener to mute the track

    // document.querySelector(".volume>img").addEventListener("click", e => {
    //   console.log(e.target);
    //   if(e.target.src.includes("./images/volume.svg")){
    //     e.target.src = e.target.src.replace("./images/volume.svg","./images/mute.svg")
    //     currentSong.volume=.0;
    //     document.querySelector(".range").getElementsByTagName("input")[0].value = 0;
    //   }
    //   else{
    //     e.target.src = e.target.src.replace("./images/mute.svg","./images/volume.svg");
    //     currentSong.volume = .10;
    //     document.querySelector(".range").getElementsByTagName("input")[0].value = 10;
    //   }
      
    // }
    // )
    // Get references to the DOM elements
    const volumeIcon = document.getElementById('volume-icon');
    const volumeRange = document.getElementById('volume-range');

    // Initial volume state
    let isMuted = false;

    // Function to toggle volume
    function toggleVolume() {
        if (isMuted) {
            // Unmute the sound
            volumeRange.value = 10; // Set volume to 10
            volumeIcon.src = './images/voume.svg'; // Change to the sound icon
        } else {
            // Mute the sound
            volumeRange.value = 0; // Set volume to 0
            volumeIcon.src = './images/mute.svg'; // Change to the mute icon
        }
        isMuted = !isMuted; // Toggle the state
    }

    // Add event listener to the volume icon
    volumeIcon.addEventListener('click', toggleVolume);

    // Optional: Add an event listener to the volume range input if needed
    volumeRange.addEventListener('input', function () {
        // Adjust volume based on range input, here it could be used to control actual audio elements if needed
        console.log('Volume set to:', volumeRange.value);
    });

}

main();
