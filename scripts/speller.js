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

const contentDiv = document.querySelector('.stripes .content-div');
const contentDiv2 = document.querySelector('.polka-dots .content-div');
const emomButton = document.querySelector('button');

// get random integer
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }

//  choose random word from words array, split word into an array of chars
function pickWord() {
    let randomIndex = getRandomInteger(0, 26);
    let randomWord = words[randomIndex];
    let arr = [...randomWord];
    return arr;
}

// turn letters of randomly chosen AMRAP word into its ASL equivalent
function convertAmrapWord() {
    // create word container div
    const wordContainer = document.createElement('div');
    wordContainer.classList.add('word-container');
    
     // generate images for each letter of word, add images to word container
    let amrapWord = pickWord();
    amrapWord.forEach(letter => {
        if (letter !== '-') {
            let img = document.createElement('img'); 
            img.src = `${alphabets[letter]}`;
            wordContainer.appendChild(img);    
        }
    });
    // remove previous display
    while (contentDiv.children[2]) {
        contentDiv.removeChild(contentDiv.children[2]);
    }
    
    // generate caption
    let text = document.createElement('p');
    text.innerHTML = `fingerspell <i>${amrapWord.join('')}</i>`;
    // remove previous display
    while (contentDiv.children[3]) {
        contentDiv.removeChild(contentDiv.children[3]);
    }
    // add word container and caption to DOM
    contentDiv.append(wordContainer, text);
}

// turn letters of randomly chosen EMOM word into its ASL equivalent
function convertEmomWord() {
    // create word container div
    const wordContainer2 = document.createElement('div');
    wordContainer2.classList.add('word-container2');
    
    // generate images for each letter of word, add images to word container
    let emomWord = pickWord();
    emomWord.forEach(letter => {
        if (letter !== '-') {
            let img = document.createElement('img'); 
            img.src = `${alphabets[letter]}`;
            wordContainer2.appendChild(img);    
        }
    });
    // remove previous display
    while (contentDiv2.children[3]) {
        contentDiv2.removeChild(contentDiv2.children[3]);
    }
    // generate caption
    let text = document.createElement('p');
    text.innerHTML = `fingerspell <i>${emomWord.join('')}</i>`;
    // remove previous display
    while (contentDiv2.children[4]) {
        contentDiv2.removeChild(contentDiv2.children[4]);
    }
    // add word container and caption to DOM
    contentDiv2.append(wordContainer2, text);
}

// set one-minute timer for EMOM
function startEmom() {
    emomButton.style.display = 'none';
    convertEmomWord();
    let emom = setInterval(convertEmomWord, 5000);
    setTimeout(() => {
        clearInterval(emom);
        contentDiv2.children[3].style.display = 'none';
        contentDiv2.children[4].style.display = 'none';
        emomButton.style.display = 'inline-block';
    }, 60000);
}

convertAmrapWord();
setInterval(convertAmrapWord, 20000);
emomButton.addEventListener('click', startEmom);

