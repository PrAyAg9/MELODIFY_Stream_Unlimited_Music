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


// Hardcoded list of songs and albums (replace with your actual file names)
const albums = [
    {
      folder: 'kishore',
      cover: './Songs/kishore/cover.jpg',
      songs: [
        "Jai%20Jai%20Shiv%20Shankar.mp3",
        "Neele%20Neele%20Ambar.mp3",
        "Samne%20wali%20Khidki.mp3",
        "Zindagi%20Ek%20Safar.mp3"
    ],
      title: 'Kishore Kumar - Hits',
      description: 'Songs for you',
    },
    {
      folder: 'kum_Sanu',
      cover: './Songs/kum_Sanu/cover.jpg',
      songs: ['01%20-%20Meri%20Mehbooba-BarmanMusic.Com.mp3', '02%20-%20Pyaar%20Nahin%20Karna%20Jahan-BarmanMusic.Com.mp3', '03%20-%20Baadalon%20Mein%20Chup%20Raha%20Chand-BarmanMusic.Com.mp3', '04%20-%20Tumse%20Milne%20Ko%20Dil-BarmanMusic.Com.mp3', '06%20-%20Aankhon%20Mein%20Neendein%20Na%20Dil-BarmanMusic.Com.mp3', '10%20-%20Aankhon%20Se%20Tune%20Kya%20Keh%20Diya-BarmanMusic.Com.mp3', '13%20-%20Mere%20Khwabon%20Mein%20Tu-BarmanMusic.Com.mp3'],
      title: 'Kumar Sanu - Top Hits',
      description: 'Songs for you',
    },
    {
      folder: 'lata_mam',
      cover: './Songs/lata_mam/cover.jpg',
      songs: 
      ['bollywood_VZ%202004%20-%20Tere%20Liye.mp3', 'Dekha%20Ek%20Khwab%20To.mp3', 'Dil%20To%20Pagal%20Hai%20-%20DTPH%201997.mp3', 'Kya%20Yehi%20Pyar%20Hai.mp3', 'Tuujhe%20Dekha%20To%20Jana%20-%20DDLJ%20(1995).mp3'],
      title: 'Lata Mangeshkar - Top Hits',
      description: 'Songs for you',
    },
    {
      folder: 'rajesh_kh',
      cover: './Songs/rajesh_kh/cover.jpg',
      songs: ['Dilwale%202015%20-%20Janam%20Janam.mp3', 'Hamari%20Adhuri%20Kahani.mp3', 'MSDhoni%20-%20Phir%20Kabhi.mp3', 'Nashe%20Si%20Chadh%20Gayi.mp3', 'Sanam%20Re.mp3', 'Tum%20Hi%20Ho%20-%20PagalSongs.com.mp3'],
      title: 'Arjist Singth - Top Hits',
      description: 'Songs for you',
    },
    {
      folder: 'y_udit',
      cover: './Songs/y_udit/cover.jpg',
      songs: ['Aaja%20Mahiya%20.mp3', 'Dil%20To%20Pagal%20Hai%20-%20DTPH%201997.mp3', 'Kuch%20Kuch%20Hota%20Hai%20-%20PagalSongs.com.mp3', 'Mere%20Mehboob.mp3', 'tere%20Naam%20-.com.mp3'],
      title: 'Udit Kumar - Top Hits',
      description: 'Songs for you',
    },
    {
      folder: 'z_ghoshal',
      cover: './Songs/z_ghoshal/cover.jpg',
      songs: ['Deewani%20Mastani.mp3', 'Kar%20Har%20Maidaan%20Fateh.mp3', 'Manwa%20Lage.mp3', 'Saathiyaa.mp3', 'Teri%20Meri.mp3'],
      title: 'Shreya Ghoshal - Top Hits',
      description: 'Songs for you',
    }
  ];



  const albums2 = [
    {
      folder: 'acs',
      cover: './Songs1/acs/cover.jpg',
      songs: ['Bajrangdal%20Song%20Dj%202023.mp3', 'Bharat%20Ka%20Baccha%20Baccha.mp3', 'Keejo%20Kesari%20Ke%20Laal.mp3', 'Mangal%20Bhavan%20Amangal%20Hari.mp3', 'old_gulaal-Aarambh.mp3', 'Ram%20Darshan(PagalWorld).mp3', 'Ram%20Siya%20Ram.mp3'],
      title: 'Bhakti Geet',
      description: 'No Depression, No Daydreaming- Only Sanatani',
    },
    {
      folder: 'Calm',
      cover: './Songs1/Calm/cover.jpg',
      songs: ['Alan-walker-faded.mp3', 'Alan-walker-united.mp3', 'Alone-Drill-remix-2024.mp3', 'On%20My%20Way-(PagalSongs.Com.IN).mp3'],
      title: 'Calm',
      description: 'Ganapati Bapa Mourya',
    },
    {
      folder: 'Hot Pick',
      cover: './Songs1/Hot Pick/cover.jpg',
      songs: 
      ['Lose%20yourself.mp3', 'mockingbird%20(1).mp3', 'till%20i%20collapse.mp3'],
      title: 'Hot Picks',
      description: 'Songs for you',
    },
    {
      folder: 'ncs',
      cover: './Songs1/ncs/cover.jpg',
      songs: ['Cartoon%2C%20J%C3%A9ja%20-%20On%20%26%20On%20(feat.%20Daniel%20Levi)%20%5BNCS%20Release%5D.mp3', 'Egzod%2C%20Maestro%20Chives%2C%20Neoni%20-%20Royalty%20%5BNCS%20Release%5D.mp3', 'Jay%20Eskar%2C%20ESCARGOT%2C%20SNAILS%20-%20Earthq…%20Justin%20J.%20Moore)%20%5BNCS%20Release%5D.mp3', 'Tobu%20-%20Faster%20%5BNCS%20Release%5D.mp3', 'Warriyo%20-%20Mortals%20(feat.%20Laura%20Brehm)%20%5BNCS%20Release%5D.mp3'],
      title: 'Non Copyrighted Songs',
      description: 'Songs for you',
    },
    {
      folder: 'Trending',
      cover: './Songs1/Trending/cover.jpg',
      songs: 
      ['Frente%20Frente%20Phonk(PagalWorld.com.so).mp3', 'My%20Way.mp3'],
      title: 'Trending Once',
      description: 'Songs for you',
    },
    {
      folder: 'Zzzz',
      cover: './Songs1/Zzzz/cover.jpg',
      songs: ['Jay%20Eskar%2C%20ESCARGOT%2C%20SNAILS%20-%20Earthq…%20Justin%20J.%20Moore)%20%5BNCS%20Release%5D.mp3', 'Tobu%20-%20Faster%20%5BNCS%20Release%5D.mp3', 'Warriyo%20-%20Mortals%20(feat.%20Laura%20Brehm)%20%5BNCS%20Release%5D.mp3'],
      title: 'Zzzz',
      description: 'Songs for you',
    }
  ];




  function get_songs(folder) {
    currFolder = folder;
  
    // Find the selected album based on the folder name
    let album = albums.find(a => a.folder === folder);
    
    if (!album) {
      console.error("Album not found!");
      return;
    }
  
    // Extract the songs from the album
    songs = album.songs;
  
    // Display the list of songs in the playlist
    let sul = document.querySelector(".songlist ul");
    sul.innerHTML = ""; // Clear previous song list
  
    songs.forEach(song => {
      sul.innerHTML += `
        <li>
          <img class="invert" id="close" src="./images/musicclose.svg" alt="not playing">
          <div class="songinfo">
            <div class="songname">${song.replaceAll("%20", " ")}</div>
            <div> Prayag </div>
          </div>
          <div class="playnow">
            <span>Play</span>
            <img class="invert resize" src="./images/play1.svg" alt="playnow">
          </div>
        </li>`;
    });
  
    // Add click event to play the selected song
    Array.from(document.querySelector(".songlist ul").getElementsByTagName("li")).forEach(e => {
      e.addEventListener("click", () => {
        let songName = e.querySelector(".songinfo").firstElementChild.innerHTML.trim();
        let songPath = `./Songs/${folder}/${songName}`;
        playMusic(songPath);
      });
    });
  
    console.log(songs);
  }
  
  get_songs("kishore");
  playMusic(songs[0],true);




  function displayAlbums() {
    let cardContainer = document.querySelector(".cardContainer");
    cardContainer.innerHTML = "";
  
  
    albums.forEach(album => {
      cardContainer.innerHTML += `
        <div data-folder="${album.folder}" class="card">
          <div class="play">
            <svg xmlns="http://www.w3.org/2000/svg" width="35px" height="35px" viewBox="0 0 28 28">
              <path d="M14 0C6.268 0 0 6.268 0 14s6.268 14 14 14 14-6.268 14-14S21.732 0 14 0z" fill="#00FF00" />
              <path d="M11 8.5v11l7.5-5.5-7.5-5.5z" fill="#000000" />
            </svg>
          </div>
          <img src="${album.cover}" alt="Album Cover" />
          <h3>${album.title}</h3>
          <p>${album.description}</p>
        </div>
      `;
    });
  
    document.querySelectorAll(".card").forEach(card => {
      card.addEventListener("click", event => {
        let folder = event.currentTarget.dataset.folder;
        let album = albums.find(a => a.folder === folder);
        songs = album.songs.map(song => `./Songs/${folder}/${song}`);
        playMusic(songs[0], true);
        get_songs(`${folder}`)
      });
    });
  }

  function displayAlbums2() {
    let cardContainer = document.querySelector(".cardContainer2");
    cardContainer.innerHTML = "";
  
  
    albums2.forEach(album1 => {
      cardContainer.innerHTML += `
        <div data-folder="${album1.folder}" class="card">
          <div class="play">
            <svg xmlns="http://www.w3.org/2000/svg" width="35px" height="35px" viewBox="0 0 28 28">
              <path d="M14 0C6.268 0 0 6.268 0 14s6.268 14 14 14 14-6.268 14-14S21.732 0 14 0z" fill="#00FF00" />
              <path d="M11 8.5v11l7.5-5.5-7.5-5.5z" fill="#000000" />
            </svg>
          </div>
          <img src="${album1.cover}" alt="Album Cover" />
          <h3>${album1.title}</h3>
          <p>${album1.description}</p>
        </div>
      `;
    });
  
    document.querySelectorAll(".card").forEach(card => {
      card.addEventListener("click", event => {
        let folder = event.currentTarget.dataset.folder;
        let album = albums2.find(a => a.folder === folder);
        songs = album.songs.map(song => `./Songs1/${folder}/${song}`);

        playMusic(songs[0]);
        get_songs(`${folder}`);
      });
    });
  }

  let currentSongIndex = 0;
  function playMusic(track, pause = false) {
    currentSong.src = track;
    if (!pause) {
      currentSong.play();
      play.src = "./images/pause.svg";
    }
    document.querySelector(".songinfo1").innerHTML = decodeURI(track.split('/').pop());
    document.querySelector(".songtime").innerHTML = "00:00 / 00:00";
  }
  
  document.addEventListener("DOMContentLoaded", function() {
    displayAlbums();
    displayAlbums2();
 // Event listeners for play/pause and time update
    const play = document.querySelector("#play");
    play.addEventListener("click", () => {
    if (currentSong.paused) {
        currentSong.play();
        play.src = "./images/pause.svg";
    } else {
        currentSong.pause();
        play.src = "./images/play1.svg";
    }
    });

 currentSong.addEventListener("timeupdate", () => {
   document.querySelector(".songtime").innerHTML = `${convertSecondsToTime1(currentSong.currentTime)} / ${convertSecondsToTime1(currentSong.duration)}`;
 });


    const prev = document.querySelector("#prev");
    prev.addEventListener("click", () => {
    if (currentSongIndex > 0) {
        currentSongIndex--;
    } else {
        currentSongIndex = songs.length - 1; // Loop to the last song
    }
    playMusic(songs[currentSongIndex]);
    });

    const next = document.querySelector("#next");
    next.addEventListener("click", () => {
    if (currentSongIndex < songs.length - 1) {
        currentSongIndex++;
    } else {
        currentSongIndex = 0; // Loop back to the first song
    }
    playMusic(songs[currentSongIndex]);
    });


     // Volume control
  const volumeIcon = document.querySelector(".volume");
  const volumeRange = document.querySelector(".range");

  let isMuted = false;

  function toggleVolume() {
    if (isMuted) {
      volumeRange.value = 60;
      volumeIcon.src = './images/voume.svg';
      currentSong.volume = 0.6;
    } else {
      volumeRange.value = 0;
      volumeIcon.src = './images/mute.svg';
    }
    isMuted = !isMuted;
  }

  volumeIcon.addEventListener("click", toggleVolume);

  volumeRange.addEventListener("input", function () {
    currentSong.volume = volumeRange.value / 100;
  });

  // Seekbar functionality
//   const seekbar = document.querySelector(".seekbar");
//   seekbar.addEventListener("click", (e) => {
//     let percent = (e.offsetX / seekbar.offsetWidth);
//     currentSong.currentTime = percent * currentSong.duration;
//   });
    document.querySelector(".seekbar").addEventListener("click", e => {
    let percent = (e.offsetX/e.target.getBoundingClientRect().width) * 100;
    document.querySelector(".circle").style.left = percent + "%";
    currentSong.currentTime = ((currentSong.duration) * percent) /100;
    }
    )

  // Time update on seekbar
  currentSong.addEventListener("timeupdate", () => {
    let progress = (currentSong.currentTime / currentSong.duration) * 100;
    // document.querySelector(".circle").style.width = `${progress}%`;
    document.querySelector(".circle").style.left = (currentSong.currentTime/currentSong.duration) * 100 + "%";
  });

  // Mute/unmute button functionality
  document.querySelector(".volume > img").addEventListener("click", () => {
    if (currentSong.muted) {
      currentSong.muted = false;
      document.querySelector(".volume > img").src = "images/voume.svg";
    } else {
      currentSong.muted = true;
      document.querySelector(".volume > img").src = "images/mute.svg";
    }
  });

  document.querySelector(".range").getElementsByTagName("input")[0].addEventListener("change",(e) => {
    currentSong.volume = parseInt(e.target.value)/100;
  }
  )

  // Hamburger menu toggle
  const hamburger = document.querySelector(".hamburger");
  const closeBtn = document.querySelector(".close");
  const leftMenu = document.querySelector(".left");

  hamburger.addEventListener("click", () => {
    leftMenu.style.left = "0";
  });

  closeBtn.addEventListener("click", () => {
    leftMenu.style.left = "-100%";
    leftMenu.style.transition = "0.4s";
  });});
