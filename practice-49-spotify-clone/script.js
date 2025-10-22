// console.log("Spotify Clone");

//  async function  getSongs(){
// let a = fetch("http://127.0.0.1:5500/practice-49-spotify-clone/songs/")
// let response = (await  a).text();
// console.log(response);

// let div = document.createElement("div");
// div.innerHTML= response;

// let as = div.getElementsByTagName("a");
// let songs = [];
// for(let i=0;i<as.length;i++){
//     const element = as[i];
//     if(element.href.endsWith(".mpeg")){
//         songs.push(element.href);
//     }
// }
// return songs;
//  }

//  async function playSong(){

// let songs= await getSongs();
// console.log(songs);
//  }

//  playSong();



// YouTube API Configuration
const API_KEY = YOUTUBE_API; // Replace with your YouTube Data API v3 key
let currentPlayer = null;
let currentVideoId = null;
let songs = [];

// Load YouTube IFrame API
const tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
const firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    setupSearchBar();
    setupPlayBar();
    loadRecommendedSongs();
});

// Setup search functionality
function setupSearchBar() {
    const spotifyPlaylists = document.querySelector('.spotifyPlaylists');
    
    // Create search bar if it doesn't exist
    let searchBar = document.querySelector('.searchBar');
    if (!searchBar) {
        searchBar = document.createElement('div');
        searchBar.className = 'searchBar';
        searchBar.innerHTML = `
            <input type="text" id="searchInput" placeholder="Search songs on YouTube...">
            <button id="searchBtn">Search</button>
        `;
        spotifyPlaylists.insertBefore(searchBar, spotifyPlaylists.querySelector('.cardContainer'));
    }
    
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');
    
    searchBtn.addEventListener('click', () => searchSongs(searchInput.value));
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') searchSongs(searchInput.value);
    });
}

// Load recommended songs on startup
        async function loadRecommendedSongs() {
            const recommendedQueries = [
                'top hits 2024',
                'popular music',
                'trending songs'
            ];
            
            const randomQuery = recommendedQueries[Math.floor(Math.random() * recommendedQueries.length)];
            await searchSongs(randomQuery, true);
        }

// Search YouTube for songs
async function searchSongs(query) {
    if (!query.trim()) return;
    
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${encodeURIComponent(query + ' official audio')}&type=video&videoCategoryId=10&key=${API_KEY}`;
    
    try {
        const response = await fetch(url);
        const data = await response.json();
        
        if (data.error) {
            alert('API Error: ' + data.error.message + '\nPlease check your API key.');
            return;
        }
        
        songs = data.items.map(item => ({
            id: item.id.videoId,
            title: item.snippet.title,
            thumbnail: item.snippet.thumbnails.high.url,
            description: item.snippet.description
        }));
        
        displaySongs(songs);
    } catch (error) {
        console.error('Error searching songs:', error);
        alert('Error searching songs. Please try again.');
    }
}

// Display songs in cards
function displaySongs(songs) {
    const cardContainer = document.querySelector('.cardContainer');
    cardContainer.innerHTML = '';
    
    songs.forEach(song => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <div class="play">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M5 20V4L19 12L5 20Z" stroke="#141B34" fill="#000" stroke-width="1.5" stroke-linejoin="round" />
                </svg>
            </div>
            <img src="${song.thumbnail}" alt="${song.title}">
            <h2>${song.title.substring(0, 50)}${song.title.length > 50 ? '...' : ''}</h2>
            <p>${song.description.substring(0, 80)}${song.description.length > 80 ? '...' : ''}</p>
        `;
        
        card.addEventListener('click', () => playSong(song));
        cardContainer.appendChild(card);
    });
}

// Play song
function playSong(song) {
    currentVideoId = song.id;
    
    // Update song info
    const songInfo = document.querySelector('.songInfo');
    songInfo.innerHTML = `
        <img src="${song.thumbnail}" alt="${song.title}" style="width: 50px; height: 50px; border-radius: 4px;">
        <div style="margin-left: 10px;">
            <h4 style="margin: 0; font-size: 14px;">${song.title}</h4>
        </div>
    `;
    
    // Create or update player
    if (!currentPlayer) {
        createPlayer(song.id);
    } else {
        currentPlayer.loadVideoById(song.id);
        currentPlayer.playVideo();
    }
    
    // Update play button
    updatePlayButton(true);
}

// Create YouTube player (hidden)
function createPlayer(videoId) {
    // Create hidden container for player
    let playerContainer = document.getElementById('youtube-player');
    if (!playerContainer) {
        playerContainer = document.createElement('div');
        playerContainer.id = 'youtube-player';
        playerContainer.style.display = 'none';
        document.body.appendChild(playerContainer);
    }
    
    currentPlayer = new YT.Player('youtube-player', {
        height: '0',
        width: '0',
        videoId: videoId,
        playerVars: {
            autoplay: 1,
            controls: 0
        },
        events: {
            onReady: (event) => event.target.playVideo(),
            onStateChange: onPlayerStateChange
        }
    });
}

// Handle player state changes
function onPlayerStateChange(event) {
    if (event.data === YT.PlayerState.PLAYING) {
        updatePlayButton(true);
    } else if (event.data === YT.PlayerState.PAUSED) {
        updatePlayButton(false);
    }
}

// Setup play bar controls
function setupPlayBar() {
    const playBtn = document.querySelector('.songButtons img[src="play.svg"]');
    const prevBtn = document.querySelector('.songButtons img[src="prevSong.svg"]');
    const nextBtn = document.querySelector('.songButtons img[src="nextSong.svg"]');
    
    if (playBtn) {
        playBtn.addEventListener('click', togglePlay);
    }
    
    if (prevBtn) {
        prevBtn.addEventListener('click', playPrevious);
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', playNext);
    }
}

// Toggle play/pause
function togglePlay() {
    if (!currentPlayer) return;
    
    const state = currentPlayer.getPlayerState();
    if (state === YT.PlayerState.PLAYING) {
        currentPlayer.pauseVideo();
    } else {
        currentPlayer.playVideo();
    }
}

// Update play button icon
function updatePlayButton(isPlaying) {
    const playBtn = document.querySelector('#playBtn');
    if (playBtn) {
        if (isPlaying) {
            playBtn.src = 'pause.svg'; // You'll need a pause icon
            playBtn.alt = 'pauseButton';
        } else {
            playBtn.src = 'play.svg';
            playBtn.alt = 'playButton';
        }
    }
}

// Play previous song
function playPrevious() {
    if (songs.length === 0) return;
    
    const currentIndex = songs.findIndex(s => s.id === currentVideoId);
    const prevIndex = currentIndex > 0 ? currentIndex - 1 : songs.length - 1;
    playSong(songs[prevIndex]);
}

// Play next song
function playNext() {
    if (songs.length === 0) return;
    
    const currentIndex = songs.findIndex(s => s.id === currentVideoId);
    const nextIndex = currentIndex < songs.length - 1 ? currentIndex + 1 : 0;
    playSong(songs[nextIndex]);
}

// YouTube API ready callback
function onYouTubeIframeAPIReady() {
    console.log('YouTube API ready');
}