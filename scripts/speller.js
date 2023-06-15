const alphabets = {
    a: '/assets/alphabet/a.svg',
    b: '/assets/alphabet/b.svg',
    c: '/assets/alphabet/c.svg',
    d: '/assets/alphabet/d.svg',
    e: '/assets/alphabet/e.svg',
    f: '/assets/alphabet/f.svg',
    g: '/assets/alphabet/g.svg',
    h: '/assets/alphabet/h.svg',
    i: '/assets/alphabet/i.svg',
    j: '/assets/alphabet/j.svg',
    k: '/assets/alphabet/k.svg',
    l: '/assets/alphabet/l.svg',
    m: '/assets/alphabet/m.svg',
    n: '/assets/alphabet/n.svg',
    o: '/assets/alphabet/o.svg',
    p: '/assets/alphabet/p.svg',
    q: '/assets/alphabet/q.svg',
    r: '/assets/alphabet/r.svg',
    s: '/assets/alphabet/s.svg',
    t: '/assets/alphabet/t.svg',
    u: '/assets/alphabet/u.svg',
    v: '/assets/alphabet/v.svg',
    w: '/assets/alphabet/w.svg',
    x: '/assets/alphabet/x.svg',
    y: '/assets/alphabet/y.svg',
    z: '/assets/alphabet/z.svg'
}

const words = [
    'annihilate',
    'banish',
    'crush',
    'demolish',
    'eradicate',
    'fizzle',
    'geld',
    'hinder',
    'invalidate',
    'jettison',
    'kill',
    'liquidate',
    'mar',
    'nullify',
    'obliterate',
    'pulverize',
    'quash',
    'ravage',
    'smash',
    'terminate',
    'uproot',
    'vendetta',
    'wreck',
    'x-out',
    'yerk',
    'zap'
]

const amrapDiv = document.querySelector('.stripes .content-div');
const emomDiv = document.querySelector('.polka-dots .content-div');
const emomButton = document.querySelector('button');

// get random integer
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

//  choose random word from words array, split word into an array of chars
function pickWord() {
    let randomIndex = getRandomInteger(0, 26);
    let randomWord = words[randomIndex];
    let arr = [...randomWord];
    return arr;
}

// turn letters of randomly chosen word into their ASL equivalent
function getASLImages(containerEl, wordArr, num) {
    // create container to store ASL images
    const wordContainer = document.createElement('div');
    wordContainer.classList.add('word-container');

    // generate image element for each letter of word
    // add images to word container
    wordArr.forEach(letter => {
        if (letter !== '-') {
            let img = document.createElement('img');
            img.src = `${alphabets[letter]}`;
            wordContainer.appendChild(img);
        }
    });

    // remove previous images from DOM
    while (containerEl.children[num]) {
        containerEl.removeChild(containerEl.children[num]);
    }

    return wordContainer;
}

function getImgCaption(containerEl, wordArr, num) {
    // create paragraph element for caption text
    let text = document.createElement('p');
    text.innerHTML = `fingerspell <i>${wordArr.join('')}</i>`;

    // remove previous caption from DOM
    while (containerEl.children[num]) {
        containerEl.removeChild(containerEl.children[num]);
    }

    return text;
}

function updateContent(containerEl, childElNum1, childElNum2) {
    let wordArr = pickWord();

    // generate new content
    const wordContainer = getASLImages(containerEl, wordArr, childElNum1);
    const text = getImgCaption(containerEl, wordArr, childElNum2);

    // add word container and caption to DOM
    containerEl.append(wordContainer, text);
}

function startEmom() {
    emomButton.style.display = 'none';

    // change content for children 3 & 4 of container element
    updateContent(emomDiv, 3, 4);

    // display each new word every five seconds
    let emom = setInterval(() => updateContent(emomDiv, 3, 4), 5000);

    // set one-minute timer for EMOM
    setTimeout(() => {
        clearInterval(emom);
        emomDiv.children[3].style.display = 'none';
        emomDiv.children[4].style.display = 'none';
        emomButton.style.display = 'inline-block';
    }, 60000);
}

function startAmrap() {
    // change content for children 2 & 3 of container element
    updateContent(amrapDiv, 2, 3);
    const amrap = setInterval(() => updateContent(amrapDiv, 2, 3), 20000);

    // clear interval if page is no longer visible (e.g., user navigates away from page, minimizes window, or switches to new tab in same browser)
    // otherwise intervals will run in an infinite loop
    document.onvisibilitychange = () => {
        if (document.visibilityState === "hidden") {
          clearInterval(amrap);
        }
    }
}

startAmrap();
emomButton.addEventListener('click', startEmom);

