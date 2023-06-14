const button1 = document.querySelector('#button1');
const button2 = document.querySelector('#button2');

// create lightbox
const lightbox = document.createElement('div');
lightbox.id = 'lightbox';
document.body.appendChild(lightbox);

// display lightbox/video/"follow along" text when buttons are clicked
button1.addEventListener('click', () => {
    lightbox.classList.add("active");
    let video = document.createElement('div');
    let text = document.createElement('p');
    video.innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/wvbJb8Oi_ig" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;" allowfullscreen></iframe>';
    text.textContent = 'follow along!';
    while (lightbox.firstChild) {
        lightbox.removeChild(lightbox.firstChild);
    }
    lightbox.append(video, text);
});

button2.addEventListener('click', () => {
    lightbox.classList.add("active");
    let video = document.createElement('div');
    let text = document.createElement('p');
    video.innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/EamArBZOUhw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;" allowfullscreen></iframe>';
    text.textContent = 'follow along!';
    while (lightbox.firstChild) {
        lightbox.removeChild(lightbox.firstChild);
    }
    lightbox.append(video, text);
});

// exit lightbox
lightbox.addEventListener('click', e => {
    if (e.target !== e.currentTarget) return;
    lightbox.classList.remove('active');
});

