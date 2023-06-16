const button1 = document.querySelector('#button1');
const button2 = document.querySelector('#button2');

// create lightbox
const lightbox = document.createElement('div');
lightbox.id = 'lightbox';
document.body.appendChild(lightbox);

// save YouTube URLs in an array
const videoIDs = ["wvbJb8Oi_ig", "EamArBZOUhw"];

// remember which player is playing
let videoPlayerID;

// display lightbox/video/"follow along" text when buttons are clicked
function displayVideo(videoID, playerID) {
    lightbox.classList.add('active');
    let video = document.createElement('div');
    video.id = playerID;
    videoPlayerID = playerID;

    let text = document.createElement('p');
    /*
        customized YouTube URL params
        https://developers.google.com/youtube/player_parameters

        --> autoplay=1 (0 by default) >> automatically plays video on load
        --> modestbranding=1 >> prevents YouTube logo from displaying on control bar
        --> playlist=${videoID}&loop=1 >> play same video repeatedly
            >>>> controls param is set to 1 by default, keeping as is, so users can stop/play as they wish
    */
    video.innerHTML = `
        <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/${videoID}?autoplay=1&modestbranding=1&playlist=${videoID}&loop=1"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;"
            allowfullscreen
        >
        </iframe>
    `;
    text.textContent = 'follow along!';
    while (lightbox.firstChild) {
        lightbox.removeChild(lightbox.firstChild);
    }
    lightbox.append(video, text);
}

function exitLightbox(e) {
    if (e.target !== e.currentTarget) return;
    lightbox.classList.remove('active');

    // stops player (if playing) when lightbox closes
    const iframe = document.querySelector(`#${videoPlayerID}>iframe`);
    iframe.setAttribute('src', '');
}

// exit lightbox
lightbox.addEventListener('click', exitLightbox);

// listen for clicks on "watch live demo" button
button1.addEventListener('click', () => displayVideo(videoIDs[0], "player1"));
button2.addEventListener('click', () => displayVideo(videoIDs[1], "player2"));