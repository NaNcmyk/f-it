import words from './words.js';

const amrapDiv = document.querySelector('.stripes .content-div');
const emomDiv = document.querySelector('.polka-dots .content-div');
const emomButton = document.querySelector('button');

// declare globals -------------------------
let currentAmrapWord, currentEmomWord;
let startAmrapID, setTimerID;

// start amrap on page load
startAmrap(20000);

// returns a random integer
// based the supplied min and max range
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

// returns a random word from words array
// based on current word on display
function checkWord(currentWord) {
    let randomWord;

    // set initial word (if currentWord is undefined)
    if (!currentWord) {
        let randomIndex = getRandomInteger(0, 26);
        randomWord = words[randomIndex];
    } else {
        // if currentWord already defined
        // select a word that is different from the current one
        // by filtering out current word from words array to ensure it won't be selected
        const wordsArrWithoutPrevWord = words.filter(word => word !== words[words.indexOf(currentWord)]);
        let randomIndex = getRandomInteger(0, 25);
        randomWord = wordsArrWithoutPrevWord[randomIndex];
    }

    return randomWord;
}

// returns a randomly chosen word as an array of chars
// based on workout
function pickWord(workout) {
    let randomWord;

    if (workout === "amrap") {
        let randomAmrapWord = checkWord(currentAmrapWord);
        // update current word with new random word
        currentAmrapWord = randomAmrapWord;
        randomWord = randomAmrapWord;
    } else if (workout === "emom") {
        let randomEmomWord = checkWord(currentEmomWord);
        // update current word with new random word
        currentEmomWord = randomEmomWord;
        randomWord = randomEmomWord;
    }

    // split new random word into an array of chars
    let arr = [...randomWord];
    return arr;
}

// translate letters of randomly chosen word to their ASL equivalent
function getASLImages(containerEl, wordArr, num) {
    // create container to store ASL images
    const wordContainer = document.createElement('div');
    wordContainer.classList.add('word-container');

    // generate image element for each letter of word
    // add images to word container
    wordArr.forEach(letter => {
        if (letter !== '-') {
            let img = document.createElement('img');
            img.src = `/assets/alphabet/${letter}.svg`;
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

function animateContent(wordContainer, text, delta) {
    let time = 0;
    const totalDuration = (wordContainer.children.length - 1) * delta;

    for (let imgEl of wordContainer.childNodes) {
        imgEl.style.animation = `fadeIn ${time}s ease-in`;
        time += delta;
    }

    // to keep highlighter animation in sync with fadeIn animation
    // highlighter duration value = total time to complete fadeIn animation
    //  text.children[0] = the <i> tag containing the English equivalent (in Roman alphabets) of the ASL word displayed
    text.children[0].style.animation = `highlighter ${totalDuration}s ease-in`;
    return [wordContainer, text];
}

function updateContent(containerEl, childElNum1, childElNum2, workout) {
    let wordArr = pickWord(workout);

    // generate new content
    const wordContainer = getASLImages(containerEl, wordArr, childElNum1);
    const text = getImgCaption(containerEl, wordArr, childElNum2);

    // animate content
    const [animatedWordContainer, animatedText] = animateContent(wordContainer, text,  0.15);

    // add animated word container and caption to DOM
    containerEl.append(animatedWordContainer, animatedText);
}

function updateTimer(timeLeft) {
    const timerSpan = document.querySelector('.timer');
    const timerSecondsSpan = document.querySelector('.timer-seconds');

    // update timer's display text
    timerSpan.textContent = timeLeft;
    timerSecondsSpan.textContent = timeLeft === 1 ? ' second' : ' seconds';
}

function startEmom() {
    emomButton.style.display = 'none';

    // change content for children 3 & 4 of container element
    updateContent(emomDiv, 3, 4, 'emom');

    // display each new word every five seconds
    let emom = setInterval(() => updateContent(emomDiv, 3, 4, 'emom'), 5000);

    // set one-minute timer for EMOM
    setTimeout(() => {
        clearInterval(emom);
        emomDiv.children[3].style.display = 'none';
        emomDiv.children[4].style.display = 'none';
        emomButton.style.display = 'inline-block';
    }, 60000);
}

function startAmrap(startTime) {
    // convert ms arg to seconds
    let timeLeft = startTime / 1000;

    // OUTER INTERVAL - run every 20 seconds //////////////////
    // immediately call outer interval
    // pass in named function--selfExecuteAmrap--so that it can be self-referenced in return
    startAmrapID = setInterval(function selfExecuteAmrap() {
        // save interval IDs
        // change content for children 2 & 3 of container element
        updateContent(amrapDiv, 2, 3, 'amrap');

        // INNER INTERVAL - run every second (for 20 seconds) /////////////////
        // immediately call inner interval
        // pass in named function--selfExecuteTimer--so that it can be self-referenced in return
        setTimerID = setInterval(function selfExecuteTimer() {
            // reset timer after 20 seconds
            if (timeLeft <= 0) {
                clearInterval(setTimerID);
                timeLeft = startTime / 1000;
            }

            // update displayed text
            updateTimer(timeLeft);
            // update time left
            timeLeft -= 1;

            // continue executing timer setInterval by passing itself into setInterval as the callback
            return selfExecuteTimer;
        }(), 1000);
        // continue executing outer interval by passing itself into setInterval as the callback
        return selfExecuteAmrap;
    }(), 20000);
}

// calls startAmrap & removes timeout on intervals
function restartAmrap(startTime, timeoutID) {
    clearTimeout(timeoutID);
    startAmrap(startTime);
}

// clear interval if page is no longer visible (e.g., user navigates away from page, minimizes window, or switches to new tab in same browser)
// otherwise intervals will run in an infinite loop
function handleVisibilityChange() {
    let timeoutID;
    if (document.visibilityState === 'hidden') {
        timeoutID = setTimeout(() => {
            clearInterval(startAmrapID);
            clearInterval(setTimerID);
        });
    } else if (document.visibilityState === 'visible') {
        // restart interval when document is visible again
        restartAmrap(20000, timeoutID);
    }
}

// event listeners ---------------------------------------------------
emomButton.addEventListener('click', startEmom);
document.addEventListener('visibilitychange', handleVisibilityChange);