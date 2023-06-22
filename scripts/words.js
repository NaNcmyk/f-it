// modify/customize this list to change words displayed for level1.html & level2.html
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
];

// dynamically generate words for level1.html based on words in words array
const bElements = document.querySelectorAll(".content-div p:first-child>b");

bElements.forEach((b, i) => {
    b.textContent = words[i];
});

// export words array for level2.html/speller.js
export default words;